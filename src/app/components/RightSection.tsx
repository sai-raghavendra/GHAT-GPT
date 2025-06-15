"use client";
import React, { useState } from "react";
import styles from "@/styles/RightSection.module.css";
import chatgptlogo from "@/app/assets/chatgptlogo.png";
import nouserlogo from "@/app/assets/nouserlogo.png";
import chatgptlogo2 from "@/app/assets/chatgptlogo2.png";
import Image from "next/image";

const openAiAPI = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const RightSection = () => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState<any[]>([]);
  const sendMessage = async () => {
    // console.log(message);
    let url = "https://api.openai.com/v1/chat/completions";

    let token = `Bearer ${openAiAPI}`;
    let model = "gpt-3.5-turbo";

    let messageToSend = [
      ...allMessages,
      {
        role: "user",
        content: message,
      },
    ];

    let res = await fetch(url, {
      method: "post",
      headers: {
        Authorization: token,
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        message: messageToSend,
      }),
    });
    let resjson = await res.json();

    if (resjson) {
      // console.log(resjson.error.message);
      let newAllMessages = [...messageToSend, resjson.error.message];
      setAllMessages(newAllMessages);
      setMessage("");
    }
  };
  return (
    <div className={styles.rightSection}>
      <div className={styles.chatgptversion}>
        <p className={styles.text1}>ChatGPT 3.5</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {allMessages.length > 0 ? (
        <div className={styles.messages}>
          {allMessages.map((msg, index) => (
            <div key={index} className={styles.message}>
              <Image
                src={msg.role === "user" ? nouserlogo : chatgptlogo2}
                width={50}
                height={50}
                alt="logo"
              />
              <div className={styles.details}>
                <h2>{msg.role === "user" ? "You" : "ChatGPT"}</h2>
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.nochat}>
          <div className={styles.s1}>
            <Image src={chatgptlogo} alt="chapgpt" height={70} width={70} />
            <h1>How can I help you tody?</h1>
          </div>
          <div className={styles.s2}>
            <div className={styles.suggestioncard}>
              <h2>Recommend action</h2>
              <p>psychology behind decision-makin</p>
            </div>
            <div className={styles.suggestioncard}>
              <h2>Recommend action</h2>
              <p>psychology behind decision-makin</p>
            </div>
            <div className={styles.suggestioncard}>
              <h2>Recommend action</h2>
              <p>psychology behind decision-makin</p>
            </div>
            <div className={styles.suggestioncard}>
              <h2>Recommend action</h2>
              <p>psychology behind decision-makin</p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.bottomsection}>
        <div className={styles.messagebar}>
          <input
            type="text"
            placeholder="Message ChatGPT..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <svg
            onClick={sendMessage}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
        </div>
        <p>
          ChatGpt can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
};

export default RightSection;
