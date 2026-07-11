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
import { Footer } from "antd/es/layout/layout";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Resume", "Projects", "Github"];
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  return (
    <main className="page bg-animated">
      <SpeedInsights />
      <Analytics />

      <nav className="nav">
        <div className="nav__inner">
          <button
            className="nav__menu-btn"
            onClick={() => setIsOpen(true)}
            onKeyDown={() => setIsOpen(true)}
            aria-label="Open navigation"
          >
            <MenuOutlined />
          </button>

          <ul className="nav__links">
            {menuItems.map((item, index) => (
              <motion.li
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                key={item}
              >
                {index !== menuItems.length - 1 ? (
                  <a href={`#${item}`} className="nav__link">
                    {item}
                  </a>
                ) : (
                  <a
                    href="https://github.com/joeulam"
                    className="nav__link"
                  >
                    {item}
                  </a>
                )}
              </motion.li>
            ))}
          </ul>

          <Space className="nav__theme-toggle" direction="vertical">
            <Switch
              checked={theme === "light"}
              onChange={() => changeTheme()}
              unCheckedChildren={<MoonOutlined />}
              checkedChildren={<SunOutlined />}
            />
          </Space>
        </div>

        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setIsOpen(false)}
          open={isOpen}
          className="nav__drawer"
        >
          <ul>
            {menuItems.map((item, index) => (
              <motion.li
                key={`${item}-${isOpen}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                <a href={`#${item}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
          <div className="nav__drawer-theme">
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

      <section id="Home" className="hero">
        <NodeBackground />
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero__title"
        >
          Welcome
        </motion.h2>
        <h3 className="hero__subtitle">
          <div>
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

      <motion.section id="About" className="section--about">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 1, x: -50 },
          }}
        >
          <Card className="about-card">
            <div>
              <div className="section--about__header">
                <Avatar
                  size={{ xs: 40, sm: 50, md: 50, lg: 64, xl: 64, xxl: 70 }}
                  src={<img src="/headshot.png" alt="photo of joey" />}
                />
                <h2>About Me 👋</h2>
              </div>
              <p className="section--about__description">
                This is the about me section.
              </p>
            </div>

            <div>
              <h3 className="section--about__bio">
                Hi, my name is Joey Lam! I&apos;m a Third-year student at
                Boston University, studying Computer Science and Economics.
                I&apos;m passionate about cutting-edge technologies in the
                tech sector! My hobbies include crocheting, woodworking, and
                playing ping pong.
              </h3>
              <div className="section--about__socials">
                <h2>My socials</h2>
                <div className="section--about__social-icons">
                  <GithubOutlined
                    onClick={() => window.open("https://github.com/joeulam")}
                  />
                  <LinkedinOutlined
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/joey-lam-89057021b/"
                      )
                    }
                  />
                  <InstagramOutlined
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

      <motion.section id="Resume" className="section--resume">
        <h2 className="section--resume__title">Resume</h2>
        <p className="section--resume__description">
          This is the resume section.
        </p>
        <div>
          {experience.map((job, index) => (
            <motion.div
              key={job.companyTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 },
              }}
            >
              <Card
                className="section--resume__card"
                title={job.companyTitle}
                extra={job.date}
              >
                <p className="section--resume__job-title">
                  Job Title: {job.jobTitle}
                </p>
                <h5 className="section--resume__responsibilities-title">
                  Responsibilities:
                </h5>
                <ul className="section--resume__responsibilities">
                  {job.responsibility.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <a className="section--resume__cv-link" href="/cv.pdf" download="Joey Lam CV">
          <Button>Download my CV</Button>
        </a>
      </motion.section>

      <section id="Projects" className="section--projects">
        <h2 className="section--projects__title">Projects</h2>
        <p className="section--projects__description">
          These are some projects I&apos;ve worked on recently.
        </p>

        <List
          grid={{
            gutter: 24,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 4,
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  hoverable
                  cover={
                    <img alt={item.title} src={item.image} />
                  }
                  className="section--projects__card"
                >
                  <h3 className="section--projects__card-title">
                    {item.title}
                  </h3>
                  <p className="section--projects__card-description">
                    {item.description}
                  </p>
                  <div className="section--projects__tags">
                    {item.techStack.split(", ").map((tech) => (
                      <span key={tech} className="section--projects__tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="section--projects__card-footer">
                    {item.gitURL && (
                      <a
                        href={item.gitURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubOutlined />
                      </a>
                    )}
                    {item.websiteURL && (
                      <a
                        href={item.websiteURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check the website
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            </List.Item>
          )}
        />
      </section>

      <Footer className="site-footer">
        <h6>© Copyright 2025 Joey Lam</h6>
      </Footer>
    </main>
  );
}
