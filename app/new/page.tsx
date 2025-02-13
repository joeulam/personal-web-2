"use client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Typewriter from "typewriter-effect";
import { Button, Card, List } from "antd";
import { data, experience } from "./project";
import { GithubOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Resume", "Projects", "Others"];

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-8 font-sans">
      <SpeedInsights />
      <Analytics />
      <nav className="z-50 fixed top-0 left-0 w-full bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 md:px-10">
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation"
          >
            <MenuOutlined className="text-2xl" />
          </button>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center w-1/2 m-auto space-x-8 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <a className="hover:text-gray-500 transition duration-200 cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Drawer Navigation */}
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setIsOpen(false)}
          open={isOpen}
        >
          <ul className="space-y-4 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item} onClick={() => setIsOpen(false)}>
                <a className="block hover:text-gray-500 transition duration-200 cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Drawer>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Welcome</h2>
        <h3 className="text-xl font-light text-gray-600">
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
        </h3>
      </section>

      <section className="h-screen flex flex-col justify-center max-w-2xl w-full">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-2 text-gray-500">{`This is the about me section.`}</p>
        <div>
          <h3>
            Hi my name is Joey Lam! Im a current 2nd year student at Boston
            University studying Computer science and Economics. Im passionate
            about cutting edge technologies in the tech sector! My hobbies are
            chrocetting, woodwork, and playing ping pong !
          </h3>
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center max-w-2xl w-full mx-auto py-12">
        <h2 className="text-3xl font-semibold">Resume</h2>
        <p className="mt-2 text-gray-500">{`This is the resume section.`}</p>
        <div>
          {experience.map((job) => (
            <Card className="mt-10" title={job.companyTitle} extra={job.date}>
              <p className="font-medium">Job Title: {job.jobTitle}</p>
              <h5 className="font-medium mt-2">Responsibilities:</h5>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                {job.responsibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <a className="mt-5" href="/cv.pdf" download="Joey Lam CV"><Button className="w-[100%]">Download my CV</Button></a>
        
      </section>

      {/* Projects Section - Notion-Style */}
      <section className="min-h-screen flex flex-col justify-center max-w-2xl w-full">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
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
          renderItem={(item) => (
            <List.Item>
              <Card
                className="bg-white border border-gray-200 shadow-none text-black p-6"
                cover={
                  <img
                    alt={item.title}
                    src={item.image}
                  />
                }
                actions={
                  item.websiteURL
                    ? [<GithubOutlined />, <a href={item.websiteURL} target="_blank" rel="noopener noreferrer">Check the website</a>]
                    : [<GithubOutlined/>] 
                }
              >
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-800">{item.description}</p>
                <p className="text-gray-600">Tech Stack: {item.techStack}</p>
              </Card>
            </List.Item>
          )}
        />
      </section>
    </main>
  );
}
