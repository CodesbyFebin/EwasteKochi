import { useState, useEffect, useRef } from "react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

const CONTACT_PHONE = "7500555454";

// Quick replies for the chat step (after funnel)
const QUICK_REPLIES = [
  "Sell old laptop",
  "Hard drive shredding",
  "DPDP Act compliance",
  "Free pickup Kochi",
  "Data destruction certificate",
  "Get free quote",
];

// Bot responses for free-text mode
const BOT_RESPONSES: Record<string, { text: string; next: string | null }> = {
  "sell": { text: "Great! We buy old laptops, phones, and tablets at the best prices in Kochi. Same-day cash or UPI payment with guaranteed data wipe. What device do you want to sell?", next: "device" },
  "laptop": { text: "We pay top price for laptops and MacBooks! Get an instant quote by calling us or sharing your device model on WhatsApp.", next: "cta" },
  "phone": { text: "We buy all smartphone brands — iPhone, Samsung, OnePlus, Xiaomi. All data wiped before resale. Want an instant quote?", next: "cta" },
  "hard drive": { text: "We offer NIST 800-88 certified data wiping AND physical shredding. Certificate of Destruction issued for every device. Perfect for DPDP Act compliance. Starting ₹200/unit.", next: "cta" },
  "shred": { text: "Physical hard drive shredding starts at ₹250/drive. We also offer on-site shredding for banks and hospitals. Certificate of Destruction included.", next: "cta" },
  "dpdp": { text: "The DPDP Act 2023 mandates certified data destruction when retiring IT assets — penalties up to ₹250 Crore. We provide full compliance documentation. Want to know more?", next: "cta" },
  "compliance": { text: "EWaste Kochi is fully DPDP Act 2023 compliant. We provide Certificate of Destruction, chain-of-custody logs, and audit-ready reports.", next: "cta" },
  "pickup": { text: "Free pickup available for bulk orders (10+ devices) across all Kochi and Ernakulam areas. Same-day and scheduled options available!", next: "cta" },
  "quote": { text: "For a free instant quote, WhatsApp us at +91 75005 555454 or call directly. We respond within 15 minutes during business hours!", next: "cta" },
  "certificate": { text: "We issue a Certificate of Destruction (CoD) for every job. It includes serial numbers, destruction method, and compliance reference. Required for DPDP Act 2023.", next: "cta" },
  "price": { text: "Data destruction starts at ₹200/unit. Hard drive shredding from ₹250/drive. Laptop buyback varies by model — get an instant valuation!", next: "cta" },
  "cta": { text: "Ready to get started? You can call or WhatsApp us right now for a free quote and free pickup scheduling.", next: null },
};

const getResponse = (input: string) => {
  const text = input.toLowerCase();
  for (const [key, response] of Object.entries(BOT_RESPONSES)) {
    if (text.includes(key)) return response;
  }
  return { text: "I'd be happy to help with e-waste recycling, data destruction, or laptop buyback in Kochi! What do you need?", next: null };
};

// Simple device valuation (mock)
const getEstimatedPrice = (deviceType: string) => {
  const prices: Record<string, number> = {
    laptop: 3500,
    phone: 2500,
    macbook: 12000,
    server: 15000,
    harddrive: 200,
  };
  return prices[deviceType.toLowerCase()] || 3000;
};

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Funnel state
  const [step, setStep] = useState<"greeting" | "askName" | "askPhone" | "askDevice" | "results" | "chat">("greeting");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deviceType, setDeviceType] = useState("");
  
  const messagesEnd = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Trigger popup at 3 seconds + exit intent
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !showPopup) setShowPopup(true);
    }, 3000); // psychological 3-second delay

    const exitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOpen && !showPopup) setShowPopup(true);
    };
    document.addEventListener("mouseleave", exitIntent);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", exitIntent);
    };
  }, [isOpen, showPopup]);

  // Auto-close popup after 12 seconds if ignored
  useEffect(() => {
    if (showPopup) {
      const t = setTimeout(() => setShowPopup(false), 12000);
      return () => clearTimeout(t);
    }
  }, [showPopup]);

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setStep("greeting");
      setTimeout(() => {
        setMessages([
          { role: "bot", text: "👋 Hey there! I'm your EWaste Kochi assistant. Ready to help you recycle old electronics and get the best price." },
          { role: "bot", text: "🔥 **Special offer:** Free pickup + 10% extra cashback if you sell today! Just tell me your name to start." },
        ]);
        setStep("askName");
      }, 300);
    }
  }, [isOpen, messages.length]);

  const addBotMessage = async (text: string, delay = 700) => {
    setIsTyping(true);
    await new Promise(r => setTimeout(r, delay));
    setMessages(prev => [...prev, { role: "bot", text }]);
    setIsTyping(false);
  };

  const openWhatsApp = () => {
    const message = `Hi EWaste Kochi! I'm ${name} (📞 ${phone}). I'm interested in ${deviceType ? `${deviceType} disposal` : "e-waste recycling"}. Please send me a free quote and schedule pickup.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/91${CONTACT_PHONE}?text=${encoded}`, "_blank");
    setIsOpen(false);
    setShowPopup(false);
  };

  const handleSend = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: msg }]);

    // Funnel logic
    if (step === "askName") {
      setName(msg);
      setStep("askPhone");
      await addBotMessage(`Nice to meet you, ${msg}! 🎉 What's your WhatsApp number? I'll send you an instant quote and free pickup details.`);
      return;
    }

    if (step === "askPhone") {
      const cleaned = msg.replace(/\D/g, "");
      if (cleaned.length < 10) {
        await addBotMessage("Please enter a valid 10-digit mobile number (e.g., 9876543210).");
        return;
      }
      setPhone(cleaned);
      setStep("askDevice");
      await addBotMessage("Awesome! What device do you want to recycle or sell? (e.g., laptop, phone, server, hard drive)");
      return;
    }

    if (step === "askDevice") {
      setDeviceType(msg);
      setStep("results");
      
      // Show "typing" and then estimated price
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 1500));
      const estPrice = getEstimatedPrice(msg);
      setIsTyping(false);
      
      await addBotMessage(`📱 Based on current market rates, your ${msg} could be worth up to ₹${estPrice}. Plus free doorstep pickup!`, 500);
      await addBotMessage("💡 **Pro tip**: Send photos of your items on WhatsApp for an exact valuation within 5 minutes.", 800);
      setStep("chat");
      return;
    }

    // Normal chat mode (after funnel)
    if (step === "chat") {
      const response = getResponse(msg);
      await addBotMessage(response.text);
      if (response.next === "cta") {
        // Optionally offer to redirect to WhatsApp
        setMessages(prev => [...prev, { role: "bot", text: "Would you like to continue on WhatsApp for faster service? Tap the button below." }]);
      }
    }
  };

  const { startVoiceRecognition, voiceEnabled } = useAccessibility();

  const handleVoice = () => {
    if (!voiceEnabled) {
      alert("Please enable Voice Assistant in accessibility settings (♿ button on bottom left).");
      return;
    }
    startVoiceRecognition((transcript) => {
      setInput(transcript);
      // Optional: automatically send after voice result
      // handleSend(transcript);
    });
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const formatText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  // Countdown timer (optional) – simple version
  const [countdown, setCountdown] = useState(3600); // 1 hour in seconds
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const hrs = Math.floor(mins / 60);
    if (hrs > 0) return `${hrs}h ${mins % 60}m`;
    return `${mins}m ${sec % 60}s`;
  };

  return (
    <>
      {/* Popup teaser with scarcity */}
      {showPopup && !isOpen && (
        <div
          className="fixed bottom-24 right-4 md:right-6 z-[100] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-green-200 dark:border-green-800 p-4 max-w-[280px] cursor-pointer animate-fade-up"
          onClick={() => { setIsOpen(true); setShowPopup(false); }}
          role="button"
          tabIndex={0}
          aria-label="Open chat assistant"
        >
          <button
            className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-600 text-lg leading-none"
            onClick={(e) => { e.stopPropagation(); setShowPopup(false); }}
            aria-label="Close popup"
          >×</button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-xl">♻️</div>
            <div>
              <div className="font-bold text-sm dark:text-white">EWaste Kochi Assistant</div>
              <div className="flex items-center gap-1 text-xs text-green-600"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span> Online now</div>
            </div>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">🔥 <strong>Limited offer:</strong> Free pickup + 10% extra cashback. Offer ends in <span className="font-mono font-bold">{formatTime(countdown)}</span>.</p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Tap to claim your bonus →</p>
        </div>
      )}

      {/* Floating chat button */}
      <button
        className="fixed bottom-6 right-4 md:right-6 z-[100] w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-xl shadow-green-200 dark:shadow-none flex items-center justify-center text-2xl transition-all hover:scale-110"
        onClick={() => { setIsOpen(true); setShowPopup(false); }}
        aria-label="Open e-waste assistant chatbot"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        💬
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-4 md:right-6 z-[100] w-[92vw] max-w-[380px] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-700 flex flex-col overflow-hidden transition-all duration-300"
          style={{ height: '560px' }}
          role="dialog"
          aria-modal="true"
          aria-label="EWaste Kochi Chat Assistant"
        >
          {/* Header with countdown */}
          <div className="bg-gradient-to-r from-green-700 to-green-600 p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg">♻️</div>
              <div>
                <div className="font-bold text-white text-sm">EWaste Kochi Assistant</div>
                <div className="text-xs text-green-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block animate-pulse"></span>
                  Offer ends in {formatTime(countdown)}
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white text-xl" aria-label="Close chat">×</button>
          </div>

          {/* Trust bar */}
          <div className="bg-green-50 dark:bg-green-950/30 px-4 py-2 flex items-center gap-4 text-xs font-semibold text-green-700 dark:text-green-400 flex-shrink-0 overflow-x-auto">
            <span>🛡️ NIST Certified</span>
            <span>⭐ 4.9 Rating (128+ reviews)</span>
            <span>✅ DPDP Compliant</span>
            <span>🚛 Free Pickup</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'bot' && (
                  <div className="w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-1">♻️</div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-green-600 text-white rounded-br-sm shadow-md'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-bl-sm'
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                />
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-sm">♻️</div>
                <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                  {[0,1,2].map(i => <span key={i} className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{animationDelay: `${i*150}ms`}}></span>)}
                </div>
              </div>
            )}
            <div ref={messagesEnd} />
          </div>

          {/* Quick replies (only in chat mode, not during funnel) */}
          {step === "chat" && messages.length <= 15 && (
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0 no-scrollbar">
              {QUICK_REPLIES.slice(0, 4).map(qr => (
                <button
                  key={qr}
                  onClick={() => handleSend(qr)}
                  className="flex-shrink-0 text-xs px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full font-semibold border border-green-200 dark:border-green-800 hover:bg-green-100 transition-colors"
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          {/* Input area */}
          <div className="p-3 border-t border-zinc-100 dark:border-zinc-800 flex gap-2 flex-shrink-0 bg-white dark:bg-zinc-900">
            <button
              onClick={handleVoice}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95 ${voiceEnabled ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-green-50' : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-300'}`}
              aria-label="Voice input"
              title={voiceEnabled ? "Listen" : "Voice disabled in accessibility settings"}
            >
              🎤
            </button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={
                step === "askName" ? "Your name" :
                step === "askPhone" ? "WhatsApp number" :
                step === "askDevice" ? "Device type (laptop, phone, etc.)" :
                "Type your question…"
              }
              className="flex-1 px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-zinc-400 border-none shadow-inner"
              aria-label="Chat input"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="w-10 h-10 bg-green-600 hover:bg-green-700 disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Send message"
            >→</button>
          </div>

          {/* WhatsApp CTA (visible during results step or always) */}
          {(step === "results" || step === "chat") && (
            <div className="p-3 pt-0 flex gap-2 flex-shrink-0 bg-white dark:bg-zinc-900">
              <a
                href={`tel:+91${CONTACT_PHONE}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-zinc-900 dark:bg-zinc-800 text-white text-xs font-bold rounded-xl hover:bg-zinc-800 transition-colors shadow-sm"
              >
                📞 Call Now
              </a>
              <button
                onClick={openWhatsApp}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
              >
                💬 Get Quote on WhatsApp
              </button>
            </div>
          )}

          {/* If still in funnel, show alternative CTA */}
          {step !== "results" && step !== "chat" && (
            <div className="p-3 pt-0 flex-shrink-0 bg-white dark:bg-zinc-900">
              <p className="text-center text-[11px] text-zinc-400">We'll send your details to our WhatsApp team for a fast quote.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
