// Screenshot a URL with headless Chrome over the DevTools protocol. node scripts/shot.mjs <url> <out.png> [waitMs]
import { spawn } from 'node:child_process'; import { mkdtempSync, writeFileSync } from 'node:fs'; import { tmpdir } from 'node:os'; import { join } from 'node:path';
const [url, out, waitMs = '1500', scrollSel = ''] = process.argv.slice(2); const prof = mkdtempSync(join(tmpdir(), 'chrome-shot-')); const port = 9444;
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new', '--use-angle=swiftshader', '--no-first-run', `--user-data-dir=${prof}`, `--crash-dumps-dir=${prof}`, `--remote-debugging-port=${port}`, '--window-size=1400,1000', '--allow-file-access-from-files', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms)); let ws;
try {
  let targets = []; for (let i = 0; i < 50 && !targets.length; i++) { await sleep(200); try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch {} }
  ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl); await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  let id = 0; const pending = new Map(); const logs = [];
  ws.onmessage = (e) => { const m = JSON.parse(String(e.data)); if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); } if (m.method === 'Runtime.exceptionThrown') logs.push(m.params.exceptionDetails.text); };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Runtime.enable'); await send('Page.navigate', { url }); await sleep(Number(waitMs));
  if (scrollSel) { await send('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(scrollSel)})?.scrollIntoView({ block: 'start' })` }); await sleep(300); }
  const shot = await send('Page.captureScreenshot', { format: 'png' }); writeFileSync(out, Buffer.from(shot.data, 'base64')); console.log('screenshot', out, logs.length ? logs : 'clean');
} finally { ws?.close(); chrome.kill('SIGKILL'); }
