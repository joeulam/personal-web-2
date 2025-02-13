"use client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Typewriter from "typewriter-effect";
import { Card, List } from "antd";
import { data, experience } from "../project";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-8 font-sans">
      <SpeedInsights />
      <Analytics />

      {/* Navigation - Clean & Minimal */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm">
        <ul className="flex justify-center space-x-8 py-4 text-lg font-medium">
          {["Home", "About", "Resume", "Projects", "Others"].map((item) => (
            <li key={item}>
              <a className="hover:text-gray-500 transition duration-200 cursor-pointer">
                {item}
              </a>
            </li>
          ))}
        </ul>
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

      <section className="h-screen flex flex-col justify-center max-w-2xl w-full">
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
      </section>

      {/* Projects Section - Notion-Style */}
      <section className="h-screen flex flex-col justify-center max-w-2xl w-full">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card className="bg-white border border-gray-200 shadow-none text-black p-6">
                <h3 className="font-medium">{item.title}</h3>
                {/* <p className="text-gray-600">{item.description}</p> */}
              </Card>
            </List.Item>
          )}
        />
      </section>
    </main>
  );
}
