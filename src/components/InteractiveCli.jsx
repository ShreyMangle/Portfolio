import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles, Trash2 } from 'lucide-react';
import { cliCommands, personalInfo } from '../data/portfolioData';

export default function InteractiveCli({ isOpen, onClose, onOpenResume, onShowToast }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "⚡ Shrey Mangle Developer Terminal [v2.4.0]\nType 'help' to see commands or click the shortcut chips below.",
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear' || cmd === 'cls') {
      setHistory([]);
      return;
    }

    let response = '';

    if (cmd === 'resume') {
      response = cliCommands.resume;
      onOpenResume?.();
    } else if (cliCommands[cmd]) {
      response = cliCommands[cmd];
    } else if (cmd === 'sudo' || cmd === 'admin') {
      response = "Permission denied: Shrey Vilas Mangle has full sudo rights on this machine! 🚀";
    } else if (cmd === 'whoami') {
      response = "guest@visitor — Welcome to Shrey Mangle's Engineering Portfolio!";
    } else if (cmd === 'date' || cmd === 'time') {
      response = `Current IST (Pune): ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}`;
    } else {
      response = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: rawCmd },
      { type: 'output', text: response },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  const quickChips = ['help', 'about', 'skills', 'projects', 'experience', 'stats', 'contact'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0e0b1c] border border-violet-500/40 shadow-2xl shadow-violet-950/80 overflow-hidden flex flex-col h-[520px] max-h-[85vh]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#16122a] border-b border-violet-900/50">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="ml-2 font-mono text-xs font-semibold text-violet-300 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-violet-400" />
              shrey@workstation: ~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              title="Clear terminal"
              className="p-1 text-violet-400 hover:text-white rounded hover:bg-violet-900/40"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              title="Close terminal"
              className="p-1 text-violet-400 hover:text-white rounded hover:bg-violet-900/40"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-[#120d24] border-b border-violet-900/30 overflow-x-auto text-[11px] font-mono">
          <span className="text-violet-400/70 mr-1 shrink-0">Chips:</span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-2 py-0.5 rounded bg-violet-950/80 text-violet-300 hover:bg-violet-800 hover:text-white border border-violet-800/60 shrink-0 transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Logs & Output */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm text-violet-200 space-y-3">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'system' && (
                <div className="text-violet-400/90 whitespace-pre-wrap leading-relaxed">
                  {item.text}
                </div>
              )}
              {item.type === 'input' && (
                <div className="flex items-center gap-2 text-violet-300">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-violet-400">~</span>
                  <span className="text-white font-semibold">{item.text}</span>
                </div>
              )}
              {item.type === 'output' && (
                <div className="pl-5 text-violet-100 whitespace-pre-wrap leading-relaxed bg-violet-950/20 p-2 rounded border-l-2 border-violet-500">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-4 py-3 bg-[#16122a] border-t border-violet-900/50"
        >
          <span className="text-emerald-400 font-mono font-bold">➜</span>
          <span className="text-violet-400 font-mono text-xs">~</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none placeholder:text-violet-600/60"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-violet-700 hover:bg-violet-600 text-white transition-colors"
            aria-label="Send command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
