import { useState, useEffect } from "react";
import { FaRobot, FaMicrophone, FaPlus, FaSearch, FaEllipsisV, FaTrash } from "react-icons/fa";

export default function AIChatbot() {

  useEffect(() => {
    document.title = "AI Chatbot | Crop Care";

    }, []);

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [language, setLanguage] = useState("English");

  // CHAT HISTORY
  const [history, setHistory] = useState(() => {

    const saved = localStorage.getItem("cropcare_chat_history");

    return saved ? JSON.parse(saved) : [];

  });
  const [currentChatId, setCurrentChatId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [menuOpen, setMenuOpen] = useState(null);

  // SEND MESSAGE

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMsg = {
      sender: "user",
      text: message
    };

    setChat(prev => [...prev, userMsg]);

    // SAVE TO HISTORY

    let activeChatId = currentChatId;

    if (!activeChatId) {

      activeChatId = Date.now();

      setCurrentChatId(activeChatId);

      setHistory(prev => [
        {
          id: activeChatId,
          title: message,
          messages: [userMsg]
        },
        ...prev
      ]);

    } else {

      setHistory(prev =>
        prev.map(item =>
          item.id === activeChatId
            ? {
                ...item,
                messages: [...item.messages, userMsg]
              }
            : item
        )
      );
    }

    try {

      const finalPrompt = `
Reply ONLY in ${language} language.

User Question:
${message}

You are an AI farming assistant.
Give short and useful farming advice.
`;

      const res = await fetch("http://localhost:8080/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: finalPrompt
        })
      });

      const data = await res.text();

      const botMsg = {
        sender: "bot",
        text: data
      };

      // SAVE BOT RESPONSE IN HISTORY

      setChat(prev => [...prev, botMsg]);

      setHistory(prev =>
        prev.map(item =>
          item.id === activeChatId
            ? {
                ...item,
                messages: [...item.messages, botMsg]
              }
            : item
        )
      );

    } catch (error) {

      setChat(prev => [
        ...prev,
        {
          sender: "bot",
          text: "Server error"
        }
      ]);
    }

    setMessage("");
  };

  // VOICE INPUT

  const startVoice = () => {

    const recognition =
      new window.webkitSpeechRecognition();

    if (language === "Hindi") {
      recognition.lang = "hi-IN";
    }
    else if (language === "Marathi") {
      recognition.lang = "mr-IN";
    }
    else {
      recognition.lang = "en-US";
    }

    recognition.start();

    recognition.onresult = (event) => {

      const voiceText =
        event.results[0][0].transcript;

      setMessage(voiceText);
    };
  };

  // NEW CHAT

  const newChat = () => {
    setChat([]);
    setCurrentChatId(null);
  };

  // LOAD OLD CHAT

  const loadChat = (chatItem) => {
    setChat(chatItem.messages);
    setCurrentChatId(chatItem.id);
  };

  // FILTER HISTORY

  // SAVE HISTORY IN LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "cropcare_chat_history",
      JSON.stringify(history)
    );

  }, [history]);

  // DELETE CHAT

  const deleteChat = (id) => {

    const updatedHistory = history.filter(item => item.id !== id);

    setHistory(updatedHistory);

    if (currentChatId === id) {
      setChat([]);
      setCurrentChatId(null);
    }
  };

  const filteredHistory = history.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (

    <div className="h-screen flex bg-green-50">

      {/* LEFT SIDE CHAT AREA */}

      <div className="w-2/3 flex flex-col border-r border-green-200">

        {/* HEADER */}

        <div className="bg-green-700 text-white px-5 py-4 flex items-center justify-between shadow-lg h-[55px]">

          {/* LEFT SIDE */}

          <div className="flex items-center gap-3">

            <FaRobot size={28} />

            <h1 className="text-2xl font-bold">
              AI Farmer Assistant
            </h1>

          </div>

          {/* LANGUAGE DROPDOWN */}

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-black px-3 py-2 rounded-lg outline-none h-07"
          >

            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>

          </select>

        </div>

        {/* CHAT AREA */}

        <div className="flex-1 p-4 overflow-y-auto">

          {chat.map((msg, index) => (

            <div
              key={index}
              className={`mb-4 flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[70%] p-3 rounded-2xl shadow whitespace-pre-line ${
                  msg.sender === "user"
                    ? "bg-green-600 text-white"
                    : "bg-white text-black"
                }`}
              >

                {msg.text}

              </div>

            </div>
          ))}

        </div>

        {/* INPUT */}

        <div className="p-4 bg-[#dff5df] flex items-center gap-3 shadow-lg border-t border-green-200">

          {/* TEXT INPUT */}

          <div className="flex-1 flex items-center bg-[#c8efc8] rounded-2xl px-4 py-2">

            <input
              type="text"
              placeholder="Ask farming question..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="flex-1 bg-transparent outline-none text-green-900 placeholder-green-700"
            />

            {/* MIC BUTTON */}

            <button
              onClick={startVoice}
              className="ml-2 text-white bg-green-600 hover:bg-green-700 p-2 rounded-full"
            >
              <FaMicrophone size={16} />
            </button>

            {/* SEND BUTTON */}

            <button
              onClick={sendMessage}
              className="ml-2 text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full font-semibold"
            >
              Send
            </button>

          </div>

        </div>


      </div>

      {/* RIGHT SIDE HISTORY */}

      <div className="w-1/3 bg-white flex flex-col h-screen">

        {/* HISTORY HEADER */}

        <div className="bg-green-700 text-white px-5 py-4 flex items-center justify-between shadow-lg h-[55px]">

          <h2 className="text-2xl font-bold">
            Chat History
          </h2>

          {/* HOME BUTTON */}

          <button
            onClick={() => window.location.href = "/"}
            className="bg-white text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition h-08"
          >

            Home

          </button>

        </div>

        {/* NEW CHAT BUTTON */}

        <div className="p-4 border-b">

          <button
            onClick={newChat}
            className="w-full bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700"
          >

            <FaPlus />

            New Chat

          </button>

        </div>

        {/* SEARCH CHAT */}

        <div className="p-4 border-b">

          <div className="flex items-center border border-green-300 rounded-xl px-3 py-2">

            <FaSearch className="text-gray-500 mr-2" />

            <input
              type="text"
              placeholder="Search chat..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="outline-none w-full"
            />

          </div>

        </div>

        {/* HISTORY LIST */}

        <div className="flex-1 overflow-y-auto p-3">

          {filteredHistory.length === 0 ? (

            <p className="text-gray-500 text-center mt-5">
              No chats yet
            </p>

          ) : (

            filteredHistory.map((item) => (

              <div
                key={item.id}
                onClick={() => loadChat(item)}
                className="bg-green-50 border border-green-200 p-3 rounded-xl mb-3 cursor-pointer hover:bg-green-100 flex justify-between items-start relative"
              >

                <p className="text-sm font-medium text-gray-700 truncate w-[85%]">
                  {item.title}
                </p>

                {/* 3 DOT MENU */}

                <div className="relative">

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen(menuOpen === item.id ? null : item.id);
                    }}
                    className="text-gray-600 hover:text-black"
                  >
                    <FaEllipsisV />
                  </button>

                  {menuOpen === item.id && (

                    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg border z-50">

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteChat(item.id);
                          setMenuOpen(null);
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full"
                      >

                        <FaTrash />
                        Delete

                      </button>

                    </div>
                  )}

                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

