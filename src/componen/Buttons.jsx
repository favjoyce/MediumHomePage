import React from 'react'
import Button from '@mui/material/Button';
const Buttons = ({input,size,sizes,color,fontSize,borderRadius}) => {
  return (
    <div>
 <Button variant="contained" sx={{
  borderRadius:`${borderRadius}`,
  backgroundColor:color,
  paddingLeft:`${size}`,
  paddingRight:`${size}`,
  paddingLeft:`${size}`,
  paddingTop:`${sizes}`,
  paddingBottom:`${sizes}`,

  height:"40px",
  fontSize:fontSize,
  textTransform: "none"
  // width:"120px",
  // marginTop:"20px",
  
  }}>
    {input}
</Button>
    </div>
  )
}

export default Buttons;
