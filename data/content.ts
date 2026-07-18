// 這是全站唯一需要編輯的內容檔。改這裡的值，網站文字就會跟著更新。

export const content = {
  name: "陳大衛",
  initials: "DL",
  role: "軟體工程師",
  tagline: "打造乾淨、好用的產品，從構想到上線都能自己動手完成。",
  location: "Taipei, Taiwan",
  email: "your-email@example.com",
  resumeUrl: "", // 有履歷 PDF 的話把連結填在這裡，會顯示「履歷」按鈕；留空就不顯示。
  social: {
    github: "https://github.com/DavidLoman5",
    linkedin: "https://www.linkedin.com/in/your-profile",
  },

  about: {
    paragraphs: [
      "這裡放一段自我介紹：你是誰、擅長什麼、目前在做什麼樣的專案或工作。建議 2 到 3 句話，講清楚你的專業領域跟做事風格就好，不用寫成完整履歷。",
      "第二段可以補充背景，例如求學或工作經歷的重點、你關心的技術主題，或是你希望合作對象知道的事情。",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Git",
      "Figma",
    ],
  },

  projects: [
    {
      title: "專案名稱一",
      description:
        "一到兩句話描述這個專案解決了什麼問題、用了什麼技術，以及你在其中負責的部分。",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        demo: "",
        code: "",
      },
    },
    {
      title: "專案名稱二",
      description:
        "一到兩句話描述這個專案解決了什麼問題、用了什麼技術，以及你在其中負責的部分。",
      tags: ["React", "Node.js"],
      links: {
        demo: "",
        code: "",
      },
    },
    {
      title: "專案名稱三",
      description:
        "一到兩句話描述這個專案解決了什麼問題、用了什麼技術，以及你在其中負責的部分。",
      tags: ["Python", "資料分析"],
      links: {
        demo: "",
        code: "",
      },
    },
  ],
} as const;
