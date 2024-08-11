import React, { useState } from 'react'
import {
  Fade,
  Box,
  Button,
  Menu,
  MenuItem
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';
import HomeSlide2 from '../components/Slide/HomeSlide2';
import JobStackSlide1 from '../components/Slide/JobStackSlide1';
import JobLabel from '../constant/JobLabel';

const JobStack = () => {

  const navigate = useNavigate()
  const {job} = useParams()

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box>
      <Button
        endIcon={<ArrowDropDownIcon></ArrowDropDownIcon>}
        color='white'
        onClick={handleClick}
        sx={{
          "&:hover": {
            backgroundColor: 'rgba(0,0,0,0)'
          },
          borderRadius: '15px',
          fontWeight: '700',
          fontSize: '2rem',
          height: '80px',
          marginBottom: '20px'
        }}
      >
        {JobLabel[job]['kr']}
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {
          navigate('/job-stack/front-end')
          handleClose()
        }} value={1}>프론트엔드 개발자</MenuItem>
        <MenuItem onClick={() => {
          navigate('/job-stack/back-end')
          handleClose()
        }} value={2}>백엔드 개발자</MenuItem>
      </Menu>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><JobStackSlide1></JobStackSlide1></SwiperSlide>
        <SwiperSlide><HomeSlide2></HomeSlide2></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <style>
        {`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
        }
      `}
      </style>
    </Box>
  )
}

export default JobStack