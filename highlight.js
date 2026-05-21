/* ── Reset & Base ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d1117;
  --bg2: #161b22;
  --bg3: #21262d;
  --bg4: #30363d;
  --border: #30363d;
  --border2: #484f58;
  --text: #e6edf3;
  --text2: #8b949e;
  --text3: #484f58;
  --accent: #58a6ff;
  --accent-dim: #1f3a5f;
  --green: #3fb950;
  --green-dim: #1a3a22;
  --red: #f85149;
  --red-dim: #3d1a1a;
  --purple: #d2a8ff;
  --purple-dim: #2d1f4e;
  --yellow: #e3b341;
  --orange: #f0883e;
  --mic-active: #f85149;
  --radius: 6px;
  --radius-lg: 10px;
  --sidebar-w: 320px;
  --titlebar-h: 52px;
  --bottombar-h: 56px;
}

html, body {
  height: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: 'JetBrains Mono', monospace;
  overflow: hidden;
  font-size: 14px;
}

/* ── App Grid ── */
#app {
  display: grid;
  grid-template-rows: var(--titlebar-h) 1fr var(--bottombar-h);
  grid-template-columns: 1fr var(--sidebar-w);
  height: 100vh;
}

/* ── Titlebar ── */
#titlebar {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);
  background: var(--bg2);
}

.logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: var(--text);
  letter-spacing: -0.5px;
  white-space: nowrap;
}
.logo span { color: var(--accent); }

.tb-badge {
  font-size: 10px;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 100px;
  background: var(--green-dim);
  color: var(--green);
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.tb-spacer { flex: 1; }

#status-indicator {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  color: var(--text2);
  white-space: nowrap;
}
.status-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
}
.status-dot.loading {
  background: var(--yellow);
  animation: blink 0.8s ease-in-out infinite;
}
@keyframes blink { 0%,100%{opacity:1}50%{opacity:0.3} }

.tb-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  padding: 5px 12px;
  border: 1px solid var(--border2);
  border-radius: var(--radius);
  background: none;
  color: var(--text2);
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.tb-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }

/* ── Editor ── */
#main-editor {
  grid-row: 2;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid var(--border);
}

#editor-tabs {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
  background: var(--bg2);
  padding: 0 16px;
  height: 36px;
  flex-shrink: 0;
  gap: 4px;
}
.tab {
  font-size: 12px;
  color: var(--text2);
  padding: 0 14px;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 2px solid transparent;
  cursor: default;
  white-space: nowrap;
}
.tab.active { color: var(--text); border-bottom-color: var(--accent); }
.tab-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); }
.editor-actions { margin-left: auto; display: flex; gap: 6px; }
.icon-btn {
  background: none;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text2);
  cursor: pointer;
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
  padding: 3px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.15s;
}
.icon-btn:hover { border-color: var(--border2); color: var(--text); background: var(--bg3); }

#code-scroll {
  flex: 1;
  overflow-y: auto;
  display: flex;
}

#gutter {
  padding: 12px 0;
  background: var(--bg);
  min-width: 56px;
  border-right: 1px solid var(--border);
  flex-shrink: 0;
  user-select: none;
}
.gutter-num {
  font-size: 12px;
  color: var(--text3);
  text-align: right;
  padding: 1px 14px 1px 8px;
  line-height: 22px;
}
.gutter-num.active-gutter { color: var(--text2); }

#code-lines { flex: 1; padding: 12px 0; }

.code-line {
  display: flex;
  align-items: stretch;
  min-height: 22px;
  cursor: pointer;
  position: relative;
  transition: background 0.08s;
}
.code-line:hover { background: rgba(255,255,255,0.03); }
.code-line.selected { background: rgba(88,166,255,0.08); }
.code-line.selected::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 2px;
  background: var(--accent);
}
.line-content {
  font-size: 13px;
  line-height: 22px;
  padding: 0 20px;
  white-space: pre;
  flex: 1;
  overflow: hidden;
}
.line-actions {
  display: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  gap: 4px;
}
.code-line:hover .line-actions,
.code-line.selected .line-actions { display: flex; }
.line-action-btn {
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  padding: 1px 7px;
  border: 1px solid var(--border2);
  border-radius: 3px;
  background: var(--bg2);
  color: var(--text2);
  cursor: pointer;
  transition: all 0.1s;
}
.line-action-btn:hover { background: var(--bg3); color: var(--text); border-color: var(--accent); }

/* Empty state */
#empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--text3);
  padding: 80px 40px;
  text-align: center;
}
#empty-state svg { opacity: 0.25; }
#empty-state p { font-size: 13px; line-height: 1.6; }
.empty-hint { font-size: 12px; color: var(--text3); font-style: italic; margin-top: 4px; }
.empty-hint em { color: var(--text2); font-style: normal; }

/* ── Sidebar ── */
#sidebar {
  grid-row: 2;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg2);
}

.sb-section { border-bottom: 1px solid var(--border); }

.sb-header {
  font-family: 'Syne', sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: var(--text3);
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 10px 16px 6px;
}

/* Voice */
#voice-section { padding: 10px 16px 14px; }

#mic-btn {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border2);
  border-radius: var(--radius-lg);
  background: var(--bg3);
  color: var(--text);
  cursor: pointer;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
}
#mic-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(248,81,73,0.18) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}
#mic-btn.active { border-color: var(--mic-active); color: var(--mic-active); }
#mic-btn.active::after { opacity: 1; }
.mic-ring {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
#mic-btn.active .mic-ring { animation: mic-pulse 1.2s ease-in-out infinite; }
@keyframes mic-pulse { 0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.3;transform:scale(0.6)} }

#transcript-area {
  margin-top: 10px;
  padding: 10px 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  min-height: 60px;
  font-size: 12px;
  color: var(--text2);
  line-height: 1.6;
  transition: border 0.15s;
}
#transcript-area.has-text { color: var(--text); border-color: var(--border2); }

#voice-actions { display: flex; gap: 8px; margin-top: 10px; }
.voice-btn {
  flex: 1;
  padding: 7px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: none;
  color: var(--text2);
  cursor: pointer;
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
  transition: all 0.15s;
}
.voice-btn:hover:not(:disabled) { border-color: var(--border2); color: var(--text); background: var(--bg3); }
.voice-btn.primary { border-color: var(--green); color: var(--green); }
.voice-btn.primary:hover:not(:disabled) { background: var(--green-dim); }
.voice-btn:disabled { opacity: 0.3; cursor: default; }

/* Commands */
#commands-list { padding: 6px 16px 12px; }
.cmd-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 3px 0;
  font-size: 11px;
  line-height: 1.5;
}
.cmd-row code {
  color: var(--purple);
  background: var(--purple-dim);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 10px;
  white-space: nowrap;
  flex-shrink: 0;
}
.cmd-row span { color: var(--text2); font-size: 11px; }

/* Line Editor */
#edit-inner {
  padding: 8px 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
  flex: 1;
}
.edit-label { font-size: 10px; color: var(--text3); letter-spacing: 0.5px; text-transform: uppercase; font-family: 'Syne', sans-serif; font-weight: 600; }

#selected-line-preview {
  font-size: 11px;
  padding: 7px 10px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text2);
  min-height: 30px;
  white-space: pre;
  overflow-x: auto;
}
.preview-empty { color: var(--text3); font-style: italic; }

#quick-edits {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.qe-btn {
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  padding: 4px 9px;
  border: 1px solid var(--border2);
  border-radius: 100px;
  background: none;
  color: var(--text2);
  cursor: pointer;
  transition: all 0.12s;
}
.qe-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }

#find-replace { display: flex; flex-direction: column; gap: 5px; }
#find-input, #replace-input {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  padding: 6px 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  outline: none;
  transition: border 0.15s;
}
#find-input:focus, #replace-input:focus { border-color: var(--accent); }
#find-input::placeholder, #replace-input::placeholder { color: var(--text3); }
.fr-btn {
  padding: 6px 10px;
  border: 1px solid var(--border2);
  border-radius: var(--radius);
  background: none;
  color: var(--text2);
  cursor: pointer;
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
  transition: all 0.15s;
  text-align: left;
}
.fr-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }

#edit-log {
  font-size: 11px;
  color: var(--text2);
  line-height: 1.6;
  padding: 4px 0;
  min-height: 20px;
}

/* ── Bottombar ── */
#bottombar {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 20px;
  border-top: 1px solid var(--border);
  background: var(--bg2);
}
.bb-prompt { font-size: 16px; color: var(--text3); flex-shrink: 0; }

#cmd-input {
  flex: 1;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  padding: 9px 14px;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  outline: none;
  transition: border 0.15s;
}
#cmd-input:focus { border-color: var(--accent); }
#cmd-input::placeholder { color: var(--text3); }

#cmd-btn {
  padding: 9px 22px;
  border: 1px solid var(--accent);
  border-radius: var(--radius);
  background: var(--accent-dim);
  color: var(--accent);
  cursor: pointer;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 13px;
  transition: all 0.15s;
  white-space: nowrap;
}
#cmd-btn:hover { background: var(--accent); color: #000; }

/* ── Help Modal ── */
#help-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
#help-modal {
  background: var(--bg2);
  border: 1px solid var(--border2);
  border-radius: var(--radius-lg);
  width: 520px;
  max-width: 90vw;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.hm-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}
.hm-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; }
.hm-close {
  background: none; border: none; color: var(--text2); cursor: pointer; font-size: 14px; padding: 4px 8px; border-radius: var(--radius);
}
.hm-close:hover { background: var(--bg3); color: var(--text); }
.hm-body { padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
.hm-body h3 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px; color: var(--accent); }
.hm-body p { font-size: 12px; color: var(--text2); line-height: 1.7; }
.hm-body strong { color: var(--text); font-weight: 500; }

/* ── Toast ── */
#toast {
  position: fixed;
  bottom: 68px;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  background: var(--bg3);
  border: 1px solid var(--border2);
  border-radius: var(--radius-lg);
  padding: 8px 20px;
  font-size: 12px;
  color: var(--text);
  opacity: 0;
  transition: all 0.2s;
  pointer-events: none;
  z-index: 999;
  white-space: nowrap;
}
#toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* ── Syntax Colors ── */
.kw  { color: #ff7b72; }
.fn  { color: #d2a8ff; }
.str { color: #a5d6ff; }
.num { color: #79c0ff; }
.cm  { color: #6e7681; font-style: italic; }
.builtin { color: #ffa657; }
.bool    { color: #79c0ff; }
.decorator { color: #e3b341; }
.op  { color: #ff7b72; }

/* ── Scrollbars ── */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--bg4); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--border2); }
