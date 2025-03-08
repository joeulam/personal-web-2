"use client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Typewriter from "typewriter-effect";
import { Avatar, Button, Card, List } from "antd";
import { data, experience } from "./project";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import { useEffect, useState } from "react";
import { Space, Switch } from "antd";
import { motion } from "framer-motion";
import NodeBackground from "./nodeBackground";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Resume", "Projects"];
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };
  return (
    <main
      className={`min-h-screen flex flex-col items-center px-8 font-sans bg-animated ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <SpeedInsights />
      <Analytics />
      <nav
        className={`z-50 fixed top-0 left-0 w-full ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 md:px-10">
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            onKeyDown={() => setIsOpen(true)}
            aria-label="Open navigation"
          >
            <MenuOutlined className="text-2xl" />
          </button>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center w-1/2 m-auto space-x-8 text-lg font-medium">
            {menuItems.map((item) => (
              <motion.li
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                key={item}
              >
                <a
                  href={`#${item}`}
                  className="hover:text-gray-500 transition duration-200 cursor-pointer"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <Space className="hidden md:flex" direction="vertical">
            <Switch
              checked={theme === "light"}
              onChange={() => changeTheme()}
              unCheckedChildren={<MoonOutlined />}
              checkedChildren={<SunOutlined />}
            />
          </Space>
        </div>

        {/* Mobile Drawer Navigation */}
        <Drawer
          className={`${
            theme === "dark"
              ? "!bg-gray-900 text-white [&_.ant-drawer-close]:text-white"
              : "bg-white text-black"
          }`}
          title="Menu"
          placement="left"
          onClose={() => setIsOpen(false)}
          open={isOpen}
        >
          <ul className="space-y-4 text-lg font-medium">
            {menuItems.map((item, index) => (
              <motion.li
                key={`${item}-${isOpen}`} // Change key to force reanimation
                initial={{ opacity: 0, x: -50 }} // Start off-screen
                animate={{ opacity: 1, x: 0 }} // Slide into place
                transition={{ duration: 0.8, delay: index * 0.1 }} // Staggered effect
                onClick={() => setIsOpen(false)}
              >
                <a
                  href={`#${item}`}
                  className="block hover:text-gray-500 transition duration-200 cursor-pointer"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="mt-4">
            <Space direction="vertical">
              <Switch
                checked={theme === "light"}
                onChange={() => changeTheme()}
                unCheckedChildren={<MoonOutlined />}
                checkedChildren={<SunOutlined />}
              />
            </Space>
          </div>
        </Drawer>
      </nav>

      {/* Hero Section */}
      <section
        id="Home"
        className="h-screen flex flex-col justify-center text-center"
      >
        <NodeBackground />

        <motion.h2
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:text-7xl text-5xl font-bold mb-4 tracking-tight"
        >
          Welcome
        </motion.h2>
        <h3 className="text-xl font-light text-gray-600">
          <div
            className={`${theme === "dark" ? "text-[#c3c5c5] " : "text-black"}`}
          >
            <Typewriter
              options={{
                loop: true,
                delay: 60,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I'm Joey, a ")
                  .pauseFor(500)
                  .typeString("student")
                  .pauseFor(2500)
                  .deleteChars(7)
                  .typeString("programmer")
                  .pauseFor(2500)
                  .deleteChars(10)
                  .typeString("engineer")
                  .pauseFor(2500)
                  .deleteChars(8)
                  .start();
              }}
            />
          </div>
        </h3>
      </section>

      <motion.section
        id="About"
        className="h-screen flex flex-col justify-center max-w-2xl w-full"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Reanimates and triggers when 20% is visible
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 1, x: -50 }, // Reduce x distance for smoother effect
          }}
        >
          <Card
            className={`${
              theme === "dark"
                ? "!bg-gray-900 text-white "
                : "bg-white text-black border border-black"
            }`}
          >
            <div>
              <Avatar
                className="align-middle"
                size={{ xs: 40, sm: 50, md: 50, lg: 64, xl: 64, xxl: 70 }}
                src={<img src="/headshot.png" alt="photo of joey" />}
              />
              <h2 className="md:text-5xl text-4xl font-semibold">
                About Me 👋
              </h2>
              <p
                className={`md:text-2xl mt-2 align-bottom  ${
                  theme === "dark" ? "text-[#c3c5c5] " : "text-gray-500"
                }`}
              >{`This is the about me section.`}</p>
            </div>

            <div>
              <h3 className="md:text-2xl text-base">
                Hi, my name is Joey Lam! I'm a second-year student at Boston
                University, studying Computer Science and Economics. I'm
                passionate about cutting-edge technologies in the tech sector!
                My hobbies include crocheting, woodworking, and playing ping
                pong.
              </h3>
              <div className="mt-10">
                <h2 className="md:text-2xl text-base">My socials</h2>
                <div className="w-1/3 mt-5 flex flex-1 justify-between">
                  <GithubOutlined
                    style={{ fontSize: "150%" }}
                    onClick={() => window.open("https://github.com/joeulam")}
                  />
                  <LinkedinOutlined
                    style={{ fontSize: "150%" }}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/joey-lam-89057021b/"
                      )
                    }
                  />
                  <InstagramOutlined
                    style={{ fontSize: "150%" }}
                    onClick={() =>
                      window.open("https://www.instagram.com/joeulamb/")
                    }
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.section>

      <motion.section
        id="Resume"
        className="min-h-screen flex flex-col justify-center max-w-2xl w-full mx-auto py-12"
      >
        <h2 className="text-3xl font-semibold">Resume</h2>
        <p
          className={`mt-2 ${
            theme === "dark" ? "text-[#c3c5c5] " : "text-gray-500"
          }`}
        >{`This is the resume section.`}</p>
        <div>
          {experience.map((job, index) => (
            <motion.div
              key={job.companyTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is visible
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 },
              }}
            >
              <Card
                className={`mt-10 ${
                  theme === "dark"
                    ? "bg-white text-gray-700 hover:bg-gray-200 hover:scale-110 duration-700"
                    : "bg-white text-black hover:bg-gray-100 hover:scale-110 duration-700"
                }`}
                title={job.companyTitle}
                extra={job.date}
              >
                <p className="font-medium">Job Title: {job.jobTitle}</p>
                <h5 className="font-medium mt-2">Responsibilities:</h5>
                <ul className="list-disc list-inside text-gray-700 mt-1">
                  {job.responsibility.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <a
          className={`mt-5 ${
            theme === "dark"
              ? "bg-white text-gray-700 rounded-md"
              : "bg-white text-black"
          } `}
          href="/cv.pdf"
          download="Joey Lam CV"
        >
          <Button className="w-[100%]">Download my CV</Button>
        </a>
      </motion.section>

      {/* Projects Section - Notion-Style */}
      <section
        id="Projects"
        className="min-h-screen flex flex-col justify-center max-w-2xl w-full"
      >
        <h2 className="text-3xl font-semibold ">Projects</h2>
        <p
          className={`mt-2 mb-6 ${
            theme === "dark" ? "text-[#c3c5c5] " : "text-gray-500"
          }`}
        >{`This is the project section.`}</p>
        <List
          grid={{
            gutter: 18,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 2,
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <motion.div
                initial={{ opacity: 0, y: 30 }} // Start slightly below
                whileInView={{ opacity: 1, y: 0 }} // Slide into view
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
                transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
              >
                <Card
                  className={`bg-white border border-gray-200 shadow-none text-black p-6 ${
                    theme === "dark"
                      ? " bg-gray-300 text-gray-700 hover:bg-gray-200 hover:scale-105 duration-700"
                      : "bg-white text-black hover:bg-gray-100 hover: hover:scale-105 duration-700"
                  }`}
                  cover={<img alt={item.title} src={item.image} />}
                  actions={
                    item.websiteURL
                      ? [
                          <a
                            href={item.gitURL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubOutlined />
                          </a>,
                          <a
                            href={item.websiteURL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Check the website
                          </a>,
                        ]
                      : [
                          <a
                            href={item.websiteURL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubOutlined />
                          </a>,
                        ]
                  }
                >
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-800">{item.description}</p>
                  <p className="text-gray-600">Tech Stack: {item.techStack}</p>
                </Card>
              </motion.div>
            </List.Item>
          )}
        />
      </section>
    </main>
  );
}
