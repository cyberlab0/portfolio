"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

type Command = {
  text: string;
  response: React.ReactNode;
};

export default function LiveTerminal() {
  const [history, setHistory] = useState<Command[]>([
    {
      text: "help",
      response: (
        <div className="text-slate-300">
          Available commands: <br />
          <span className="text-blue-400">whoami</span>   - Display identity info <br />
          <span className="text-blue-400">skills</span>   - List technical capabilities <br />
          <span className="text-blue-400">sudo</span>     - Superuser access <br />
          <span className="text-blue-400">clear</span>    - Clear terminal output <br />
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let response: React.ReactNode = "";

    switch (cmd) {
      case "whoami":
        response = <div className="text-green-400">Michael Olowoseu - SOC Analyst & Cybersecurity Engineer</div>;
        break;
      case "skills":
        response = (
          <div className="text-blue-300">
            Cybersecurity<br/>
            SOC<br/>
            Python<br/>
            AI<br/>
            Cloud
          </div>
        );
        break;
      case "sudo":
        response = <div className="text-red-400">Permission denied. This incident will be reported. 🙂</div>;
        break;
      case "help":
        response = (
          <div className="text-slate-300">
            Available commands: <br />
            <span className="text-blue-400">whoami</span>   - Display identity info <br />
            <span className="text-blue-400">skills</span>   - List technical capabilities <br />
            <span className="text-blue-400">sudo</span>     - Superuser access <br />
            <span className="text-blue-400">clear</span>    - Clear terminal output <br />
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "open sentralog":
        response = <div className="text-green-400 animate-pulse">Launching SentraLog Protocol...</div>;
        setTimeout(() => {
          document.getElementById('sentralog')?.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
        break;
      default:
        response = <div className="text-slate-400">Command not found: {cmd}. Type 'help' for available commands.</div>;
    }

    setHistory((prev) => [...prev, { text: input, response }]);
    setInput("");
  };

  return (
    <section className="py-24 bg-[#05070a] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0a0f1d] border border-slate-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] font-mono text-sm md:text-base">
          {/* Terminal Header */}
          <div className="bg-[#151b2b] px-4 py-2 border-b border-slate-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="flex-1 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
              <TerminalIcon className="w-3 h-3" /> guest@michael-os: ~
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            className="p-6 h-[400px] overflow-y-auto cursor-text text-slate-300"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="mb-4 text-green-400/80">
              Welcome to Michael OS v4.0.0. <br />
              Type 'help' to see available commands.
            </div>

            {history.map((cmd, i) => (
              <div key={i} className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">guest@michael-os:~$</span>
                  <span className="text-white">{cmd.text}</span>
                </div>
                <div className="mt-1 ml-4">{cmd.response}</div>
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-green-500">guest@michael-os:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0"
                autoFocus
                spellCheck="false"
                autoComplete="off"
              />
            </form>
            <div ref={endRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
