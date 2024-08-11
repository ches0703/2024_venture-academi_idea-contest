import React, {useState} from 'react'
import { 
  Stack, 
  Button,
  Box
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Slide = ({ children }) => {

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Stack
      width={'100%'}
      height={'calc(90vh - 100px)'}
    >
      {children}
    </Stack>
  )
}

export default Slide