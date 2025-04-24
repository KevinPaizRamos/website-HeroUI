const projectsContent = [
  {
    title: "Gamespace",
    description:
      "Social media platform for gamers where you can: find your next game partner or team, share your gaming experience,\n" +
      " sell your gaming related items and find gaming related events.",
    imageSrc: "/gamespace.png",
    links: [
      { url: "https://gamespacegamers.online/", label: "View Project" },
      { url: "https://github.com/AaronScott2025/GameSpace", label: "GitHub" },
    ],
    technologies: [
      "JavaScript",
      "Python",
      "React",
      "Node.js",
      "Supabase(PostgreSQL)",
      "FlaskAPI",
      "OpenAI",
      "AWS",
    ],
  },
  {
    title: "Algo-forum",
    description:
      "Platform for developers to discuss recent technical interviews and data structures and algorithms questions,\n." +
      " share their Hackerrank and Leetcode recent submissions and find new ways to improve their coding skills.",
    imageSrc: "/algo.gif",
    links: [
      { url: "https://github.com/KevinPaizRamos/Algo-Forum", label: "GitHub" },
    ],
    technologies: ["JavaScript", "React", "Node.js", "Supabase(PostgreSQL)"],
  },

  {
    title: "Stock Diviner",
    description:
      "A humorous stock advisor that suggests buy/sell actions based on historical data and random correlations, such as lunar new years or moon phases. Features include stock graphs, filters for cyclical events, and multiple chart styles like line and candlestick. Stocks are limited to Google, Apple, Microsoft, Amazon, and Meta. This is not stock trading advice.",
    imageSrc: "/stock.png",
    links: [
      { url: "https://github.com/Verdenroz/StockDiviner", label: "GitHub" },
    ],
    technologies: ["Java", "Firebase", "AlphaVantage", "FinancialModelingPrep"],
  },
  {
    title: "Sales Management System",
    description:
      "Sales Management System is an Android application designed to securely store and manage sales records. It features user authentication for secure access and follows the MVVM architecture to ensure a clean and maintainable codebase. The app provides a user-friendly interface for businesses to track and analyze their sales data efficiently.",
    imageSrc: "/sales.gif",
    links: [
      {
        url: "https://github.com/KevinPaizRamos/Sales_Records_App",
        label: "GitHub",
      },
    ],
    technologies: ["Kotlin", "Android Studio", "Firebase", "MVVM"],
  },
];
export default projectsContent;
