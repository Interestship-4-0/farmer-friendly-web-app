import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AdbIcon from '@mui/icons-material/Adb';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './About.css'
export default function About() {
  return (
    <Timeline position="alternate">
      <div className='top-heading' id="ABOUT">
      <div id="top-heading">ABOUT</div>    
      <div>Our Growth Journey</div>
      </div>
      <TimelineItem>
      <TimelineOppositeContent 
          sx={{ m: 'auto 1' }}
          align="right"
          variant="body2">
          <Typography variant="h6" component="span" style={{fontWeight:'bold',fontSize:'23px'}}>
            2019-2020
          </Typography>
          <Typography style={{fontWeight:'bold',fontSize:'25px'}}>Our Humble Beginnings</Typography>
          <Typography style={{fontWeight:'lighter',fontSize:'17px',fontFamily:'inherit'}}> A small idea to transform lives</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:5}}>   
             <PlayCircleFilledIcon sx={{ fontSize:"65px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span" style={{fontWeight:'bold',fontSize:'23px'}}>
            2019-2020
          </Typography>
          <Typography style={{fontWeight:'bold',fontSize:'25px'}}>Our Humble Beginnings</Typography>
          <Typography style={{fontWeight:'lighter',fontSize:'17px',fontFamily:'inherit'}}> A small idea to transform lives</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent 
          sx={{ m: 'auto 1' }}
          variant="body2">
          <Typography variant="h6" component="span" style={{fontWeight:'bold',fontSize:'23px'}}>
            May 2020
          </Typography>
          <Typography style={{fontWeight:'bold',fontSize:'25px'}}>A Startup is Born</Typography>
          <Typography style={{fontWeight:'lighter',fontSize:'17px',fontFamily:'inherit'}}>Our startup with 20 dedicated young spirits</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}}>
            <AccountBalanceIcon sx={{ fontSize:"73px",bgcolor: '#f7c81e',borderRadius:"50%" }}/> 
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span" style={{fontWeight:'bold',fontSize:'23px'}}>
            May 2020
          </Typography>
          <Typography style={{fontWeight:'bold',fontSize:'25px'}}>A Startup is Born</Typography>
          <Typography style={{fontWeight:'lighter',fontSize:'17px',fontFamily:'inherit'}}>Our startup with 20 dedicated young spirits</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          <Typography variant="h6" component="span" style={{fontWeight:'bold',fontSize:'23px'}}>
            April 2021
          </Typography>
          <Typography style={{fontWeight:'bold',fontSize:'25px'}}>Transition to Full Service</Typography>
          <Typography style={{fontWeight:'lighter',fontSize:'17px',fontFamily:'inherit'}}>Our ever-ending service begins</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}} >
          <AdbIcon sx={{ fontSize:"78px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}} />
       

        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span">
            April 2021 
          </Typography>
          <Typography>Transition to full service</Typography>
          <Typography>Our never ending service begins</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent >
          <Typography variant="h6" component="span" style={{fontWeight:'bold',fontSize:'23px'}}>
            July 2022
          </Typography>
          <Typography style={{fontWeight:'bold',fontSize:'25px'}}>Phase Two Expansion</Typography>
          <Typography style={{fontWeight:'lighter',fontSize:'17px',fontFamily:'inherit'}}>Our expansion in terms of new agro</Typography>
          <Typography style={{fontWeight:'lighter',fontSize:'17px',fontFamily:'inherit'}}>-services</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}}  >
        <OpenWithIcon sx={{ fontSize:"78px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent sx={{ m: 'auto 0' }}
          align="right"
          variant="body2">
          <Typography variant="h6" component="span" style={{fontWeight:'bold',fontSize:'23px'}}>
            Be Part Of Our Story!
          </Typography>
          
        </TimelineOppositeContent>      
        <TimelineSeparator>
          <TimelineConnector sx={{height:"65px"}}/>
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:5}}>
               <FiberManualRecordIcon sx={{padding:0.8 ,fontSize:"65px",color: '#f7c81e',borderRadius:"50%" }}/>
             
             
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}
