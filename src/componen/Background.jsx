import React from 'react'
import "../index.css"
import Buttons from './Buttons'
import bgimg from "../assets/bgimg.webp"
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
const Background = () => {
  return (
    <Box className='main'>
      <Box className='mainLeft'>
        <Box className='mleft2' sx={{width:{xs:"100%",md:"85%"}}}>
   <Typography variant="h1" gutterBottom sx={{marginTop:"50px",color:"#242424",fontFamily:"Charter, Georgia, Cambria, 'Times New Roman', Times, serif",fontSize:{xs:"70px",sm:"100px"},lineHeight:{xs:"70px",md:"100px"}}}>
Human <br />
stories & ideas   
   </Typography>

         <Typography variant="subtitle1" gutterBottom sx={{color:"#242424",fontSize:"22px",marginBottom:"20px"}}>
        A place to read, write, and deepen your understanding
      </Typography>

     <Buttons input={"Start reading"} size={"40px"} color={"#242424"} fontSize={"17px"} sizes={"22px"} borderRadius={"22px"}/>

        </Box>


   
      </Box>
      <Box className='mainRight' sx={{display:{xs:"none",md:"flex"}}}>
        <img src={bgimg} alt="" className='bgimg' />

      </Box>
    </Box>
  )
}

export default Background;
