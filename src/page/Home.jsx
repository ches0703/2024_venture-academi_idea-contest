import React, { useRef, useState } from 'react';
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Fade,
  Menu,
  Button
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box height={'90vh'} display={'flex'} alignItems={'center'}>
        <Button
          endIcon={<ArrowDropDownIcon></ArrowDropDownIcon>}
          color='white'
          onClick={handleClick}
          sx={{
            "&:hover": {
              backgroundColor: 'rgba(0,0,0,0)'
            },
            borderRadius: '25px',
            transition: 'ease-in-out 0.5s',
            fontWeight: '700',
            width: '100%',
            fontSize: '4rem',
            margin: 'auto'
          }}
        >
          직무를 선택해 주세요
        </Button>
      </Box>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        slotProps={{
          paper: {
            sx: {
              width: '100%',
              borderRadius: '0.75rem',
              padding: '0.5rem 1rem'
            }
          }
        }}
      >
        <MenuItem onClick={() => {navigate('/job-stack/front-end')}} value={1}>프론트 엔드 개발자</MenuItem>
        <MenuItem onClick={() => {navigate('/job-stack/front-end')}} value={2}>백엔드 개발자</MenuItem>
      </Menu>
    </>
  )
}

export default Home