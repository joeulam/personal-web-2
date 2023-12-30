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
import SchoolIcon from '@mui/icons-material/School';

export default function Timelines2() {
    return (
      <Timeline position="left">
  
  
        <TimelineItem >
          <TimelineOppositeContent sx={{color:"#fdf0d5"}}>
            <Box>
              <h2 className='text-[28px]'>Boston University</h2>
              <hr className="w-[25vw]"/>
              <p className='w-3/5'>Majored in Computer science and Economics</p>
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className='pulse'>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className='h-[10vh]'/>
          </TimelineSeparator>
          <TimelineContent sx={{color:"white"}}>
            <Box>
              <h2 className='text-[#fefae0] text-[28px]'>Bachelor's degree</h2>
              <p className='text-[#6d6875]'>August 2023 - Present</p>
            </Box>
            </TimelineContent>
        </TimelineItem>
  
  
  
        <TimelineItem className='mt-3'>
          <TimelineOppositeContent sx={{color:"#fdf0d5"}}>
            <Box>
              <h2 className='text-[28px]'>Benjamin N Cardozo</h2>
              <hr className="w-[25vw]"/>
              <p className='w-3/5'>Majored in Computer Science. Mantained a 3.98 GPA. Graduated with Principle Honor roll</p>
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator >
            <TimelineDot>
              <SchoolIcon/>
            </TimelineDot>
            <TimelineConnector className='mt-3 h-[10vh]'/>
          </TimelineSeparator>
          <TimelineContent>
            <Box>
              <h2 className='text-[#fefae0] text-[28px]'>High School</h2>
              <p className='text-[#6d6875]'>September 2019 - June 2023</p>
            </Box>
            </TimelineContent>
        </TimelineItem>
  
  
  
      </Timeline>
    );
  }