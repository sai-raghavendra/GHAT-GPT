import React from "react";
import styles from "@/styles/LeftSection.module.css";
import chatgptlogo from "@/app/assets/chatgptlogo.png";
import nouserlogo from "@/app/assets/nouserlogo.png";
import Image from "next/image";

const LeftSection = () => {
  const allCharts = [
    {
      id: 1,
      chatName: "This is sample Chat1 for chatgpt...",
    },
    {
      id: 2,
      chatName: "This is sample Chat2 for chatgpt...",
    },
    {
      id: 3,
      chatName: "This is sample Chat3 for chatgpt...",
    },
    {
      id: 4,
      chatName: "This is sample Chat4 for chatgpt...",
    },
    {
      id: 5,
      chatName: "This is sample Chat5 for chatgpt...",
    },
  ];
  return (
    <div className={styles.leftSection}>
      <div className={styles.newChat}>
        <div>
          <Image src={chatgptlogo} alt="ChatGPT" width={50} height={50} />
          <p className={styles.text1}>New chat</p>
        </div>
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
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </div>
      <div className={styles.allCharts}>
        {allCharts.map((chat) => (
          <div key={chat.id} className={styles.chat}>
            <p className={styles.text1}>{chat.chatName}</p>
          </div>
        ))}
      </div>
      <div className={styles.newChat}>
        <div>
          <Image src={nouserlogo} alt="nouser" width={50} height={50} />
          <p className={styles.text1}>SSB</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
