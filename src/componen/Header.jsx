import React from 'react'
import "../index.css"
import mediumLogo from "../assets/mediumLogo.svg"
import Buttons from './Buttons'
import { Box, ButtonGroupContext } from '@mui/material'
const Header = () => {
  return (
    <Box className='MediumHead'>
      <Box className='mhWrap'>
       <Box className='mlWrap' sx={{width:{xm:"20%",sm:"70%",md:"50%",lg:"65%"}}}>
        <img src={mediumLogo} alt="" className='mediumLogo'/>
       </Box>
       <Box className='mlwrap2'>
        <Box className='multiext' sx={{fontSize:{xs:"10px",sm:"12px" ,md:"12px" ,lg:"15px" } , display:{xs:"none", md:"flex"}}}>
        <p>Our story</p>
        <p>Membership</p>
        <p>Write</p>
        <p>Sign in</p>
        </Box>
        <Box className=''>
           <Buttons input=" Get started
" color={"black"} borderRadius={"20px"}/>
        </Box>
       </Box>
      </Box>
    </Box>
  )
}

export default Header
