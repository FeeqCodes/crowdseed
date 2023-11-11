'use client'
import React, { useState } from 'react'
import ChatResult from './ChatResult'
import PromptBox from './PromptBox'








const AiChatBot = () => {

  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);

  const [messages, setMessages] = useState([
    {
      text: "I'm seed! You can ask me any questions relating to crowdfunding or any general questions",
      type: "bot",
    },
  ]);

  const [firstMsg, setFirstMsg] = useState(true);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmitPrompt = async () => {
    console.log("Sending", prompt);

    try {
      // updating the user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: prompt, type: "user" },
      ]);

      // sending the prompt to backend
      const response = await fetch("/api/aichatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg: firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      // Resetting the prompt and the firstMsg
      setPrompt("");
      setFirstMsg(false);

      // fetching the response from backend
      const searchRes = await response.json();

      // updating messages with the response from backend(bot message)
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: searchRes.output.response, type: "bot" },
      ]);

      console.log({ searchRes });

      //Clear old errors
      setError("");
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };




  return (
    <div className=" flex justify-end items-center sticky top-0 w-[95vw] max-w-[1280px]  h-full">
      {/* <Popup
          trigger={<button> Click to open popup </button>}
          position="top center"
        >

        </Popup> */}
      <div>
        <ChatResult messages={messages} pngFile="brain" />
        <PromptBox
          prompt={prompt}
          handleSubmit={handleSubmitPrompt}
          error={error}
          handlePromptChange={handlePromptChange}
        />
      </div>
    </div>
  );
}

export default AiChatBot