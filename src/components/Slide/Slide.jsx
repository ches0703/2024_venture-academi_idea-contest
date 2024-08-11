import React from 'react'
import { 
  Box,
} from '@mui/material'
const Slide = ({ children }) => {
  return (
    <Box
      width={'100%'}
      height={'calc(90vh - 100px)'}
      display={'flex'} 
      flexDirection={'column'}
      alignItems={'center'}
    >
      {children}
    </Box>
  )
}

export default Slide