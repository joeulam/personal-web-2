'use client'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Box from '@mui/material/Box';
import WorkIcon from '@mui/icons-material/Work';
export default function Timelines() {
  return (
    <Timeline position="left">



      <TimelineItem className='mt-3'>
        <TimelineOppositeContent sx={{color:"#fdf0d5"}}>
          <Box>
            <h2 className='text-[28px]'>Mellon Foundation</h2>
            <hr className="w-[29vw]"/>
            <li className='w-3/4'>
              <ul>
                Developed and integrated five API endpoints into Mellon's backend API to facilitate seamless data synchronization with a custom migration application, integrating data from Fluxx, Contentful, and a proprietary database.
              </ul>
              <ul>
                Designed and implemented a custom internal tool that enables communication teams to independently sync data, reducing dependency on the IT team for synchronization tasks.
              </ul>
            </li>
            
          </Box>
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot>
            <WorkIcon/>
          </TimelineDot>
          <TimelineConnector className='mt-3'/>
        </TimelineSeparator>
        <TimelineContent>
          <Box>
            <h2 className='text-[#fefae0] text-[28px]'>IT Intern</h2>
            <p className='text-[#6d6875]'>June 2024 - Auguest 2024</p>
          </Box>
          </TimelineContent>
      </TimelineItem>



      <TimelineItem >
        <TimelineOppositeContent sx={{color:"#fdf0d5"}}>
          <Box>
            <h2 className='text-[28px]'>Boston University</h2>
            <hr className="w-[29vw]"/>
            <p className='w-3/5'>A dedicated team member adept at concurrently assisting multiple clients, demonstrating a notable proficiency in resolving software-related issues with an impressive average turnaround time ranging from 5 to 15 minutes. Possesses a track record of generating and managing over 100 tickets through ServiceNow, showcasing a comprehensive mastery of the platform. Additionally, boasts extensive expertise in KACE Lite.</p>
          </Box>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot className='pulse'>
            <WorkIcon sx={{font:"black"}}/>
          </TimelineDot>
        <TimelineConnector />
        </TimelineSeparator>
        
        <TimelineContent sx={{color:"white"}}>
          <Box>
            <h2 className='text-[#fefae0] text-[28px]'>IT Support Specialist</h2>
            <p className='text-[#6d6875]'>August 2023 - Present</p>
          </Box>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem className='mt-3'>
        <TimelineOppositeContent sx={{color:"#fdf0d5"}}>
          <Box>
            <h2 className='text-[28px]'>RoboMindTech</h2>
            <hr className="w-[29vw]"/>
            <p className='w-3/5'>A highly reliable team collaborator, consistently providing support for fellow team members and offering assistance as needed. Actively engaged in collaborative curriculum development with colleagues, demonstrating strong teamwork and contribution to the creation of new educational materials. Independently conceived and developed a comprehensive drone curriculum utilizing Python, CV2, and DJI technologies, showcasing proficiency in educational innovation and technical expertise. </p>
          </Box>
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot>
            <WorkIcon/>
          </TimelineDot>
          <TimelineConnector className='mt-3'/>
        </TimelineSeparator>
        <TimelineContent>
          <Box>
            <h2 className='text-[#fefae0] text-[28px]'>Teacher/Intern</h2>
            <p className='text-[#6d6875]'>April 2023 - July 2023</p>
          </Box>
          </TimelineContent>
      </TimelineItem>



    </Timeline>
  );
}


