export const data = [
  {
    key: "",
    title: "Morning brief",
    description:
      "Built a “morning brief” web app that combines live commute ETAs with hyperlocal weather and simple advice (e.g., “bring an umbrella”), all in one glance.",
    techStack:
      "Next.js, Tailwind CSS, Radix UI, Mapbox, OpenStreetMap, Open-meteo",
    websiteURL: "https://morning-breif.vercel.app/",
    gitURL: "https://github.com/joeulam/morning-breif",
    image: "/morning.png",
  },
  {
    key: "1",
    title: "Calico",
    description:
      "Built Calico, an AI-powered budgeting app that parses receipts with Gemini 2.5 Flash and turns them into structured transactions, visualizing spend vs. budget with Recharts and Supabase.",
    techStack: "Next.js, Tailwind CSS, Supabase, Shadcn, Gemini 2.5",
    websiteURL: "https://calicos.vercel.app/",
    gitURL: "https://github.com/joeulam/Calico",
    image: "/calico.png",
  },
  {
    key: "2",
    title: "Invy",
    description: "Minimalist inventory tracker",
    techStack: "Next.js, Tailwind CSS, Suprabase, Shadcn",
    websiteURL: "https://invery.vercel.app/",
    gitURL: "https://github.com/joeulam/inventorydashboard",
    image: "/invy.png",
  },
  {
    key: "",
    title: "EportfolioV3",
    description: "A modern and minimalistic online portfolio",
    techStack: "TailwindCSS, Next.js, Ant Design",
    websiteURL: "https://joeyresume.vercel.app/",
    gitURL: "https://github.com/joeulam/personal-web-2",
    image: "/websitev3.png",
  },
  {
    key: "",
    title: "BU Food Tracker",
    description:
      "An application that scrapes the food data from the BU dining hall and calculates the nutritional value. Created as a submission for Boston Hack 2024.",
    techStack: "Next.js, Tailwind CSS, Mantine UI, MongoDB",
    websiteURL: "https://bostonhacks.vercel.app/",
    gitURL: "https://github.com/joeulam/bostonhacks",
    image: "/buftlogo.png",
  },
  {
    key: "3",
    title: "EportfolioV2",
    description: "A modern online portfolio",
    techStack: "TailwindCSS, Next.js, Ant Design",
    websiteURL: "https://joeyresume.vercel.app/old",
    gitURL: "https://github.com/joeulam/personal-web-2",
    image: "/website.png",
  },
  {
    key: "4",
    title: "Emotion checker",
    description:
      "A computer vision project that detects the user's facial emotion and returns a confidence score along with the identified emotion.",
    techStack: "Python, CV2, Tensorflow, Matplot, Panda",
    websiteURL: "",
    gitURL: "https://github.com/joeulam/Facial-emotion-detection",
    image: "/noImg.png",
  },
  {
    key: "5",
    title: "PhotoPort",
    description:
      "A website for storing and showcasing a photography portfolio.",
    techStack: "Next.js, Tailwind CSS",
    websiteURL: "https://joeulam-photo.vercel.app/",
    gitURL: "https://github.com/joeulam/Photography-page",
    image: "/photoweb.png",
  },
  {
    key: "6",
    title: "CrossoverTrader",
    description:
      "A Python script that performs automatic trades using algorithms that produced an ROI of 2.37%",
    techStack: "Python, Alpaca API, Finnhub, yfinance, Matplotlib",
    websiteURL: "",
    gitURL: "https://github.com/joeulam/Algo-trading",
    image: "/algo.png",
  },
  {
    key: "7",
    title: "Scrapper",
    description:
      "A Python script that scrapes trade data from capitol hill and returns recent activities.",
    techStack: "Python, NumPy, pandas, Matplotlib, BeautifulSoup",
    websiteURL: "",
    gitURL: "https://github.com/joeulam/Stock-data-ana",
    image: "/noImg.png",
  },
  {
    key: "8",
    title: "HEYO",
    description: "A desktop mental health app",
    techStack: "Electron, PostgreSQL",
    websiteURL: "",
    gitURL: "https://github.com/joeulam/wellness-electron",
    image: "/heyo.web.png",
  },
  {
    key: "9",
    title: "Eportfolio",
    description: "An online portfolio",
    techStack: "JS, TailwindCSS, Next.js",
    websiteURL: "https://joeyweb.vercel.app/",
    gitURL: "https://github.com/joeulam/ssrtest",
    image: "/websitev1.png",
  },
];

export const experience = [
  {
    companyTitle: "The Andrew Mellon Foundation",
    jobTitle: "Consultant",
    date: "10/2024 - Present",
    responsibility: [
      `Built a full-stack Next.js and React application to visualize a dynamic taxonomy tree from Airtable, rendering
                      1,000+ grants with hierarchical parent–child relationships to improve data navigation.`,
      `Implemented a full-stack Next.js and React application with API integration to render 50+ artworks and locations
                     from collector system data, delivered 6 months ahead of schedule.`,
      `Contributed to the Mellon Foundation’s main website, triaging and fixing [10+] UI/visual bugs across responsive breakpoints and browsers, improving layout stability and polish.`
    ],
  },
  {
    companyTitle: "The Andrew Mellon Foundation",
    date: "06/2024 - 08/2024",
    jobTitle: "IT Intern",
    responsibility: [
      "Developed and integrated 5 API endpoints into Mellon's backend API to facilitate seamless data synchronization with a custom migration application, integrating data from Fluxx, Contentful, and a proprietary database.",
      "Designed and implemented a custom internal tool that enables communication teams to independently sync data, reducing dependency on the IT team for synchronization tasks.",
      "Developed an internal tool allowing data migration from Fluxx to Contentful in Mellon custom middleware.",
      "Optimized grant migration processes, resulting in an 18% reduction in data transfer time.",
    ],
  },
  {
    companyTitle: "Boston University",
    jobTitle: "IT Support Specialist",
    date: "08/2023 - Present",
    responsibility: [
      "Created and handled over 500 tickets on service now",
      "Handled professor's technical issues at Wheelock, Law and Business school",
    ],
  },
  {
    companyTitle: "Robo Mind Tech",
    jobTitle: "Intern",
    date: "04/2023 - 07/2023",
    responsibility: [
      "Innovative Drone Curriculum: Developed and implemented a curriculum integrating Python, OpenCV (cv2), and DJI technology, enhancing students' technical skills and fostering their interest in emerging technologies",
      "Inventory System Optimization: Collaborated with team members to establish and improve an efficient inventory management",
    ],
  },
];
