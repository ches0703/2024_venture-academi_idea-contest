import React, { useState, useRef, useEffect } from 'react'
import Slide from './Slide'
import {
  styled,
  Stack,
  Box,
  Tooltip,
  Typography,
  TextField,
  Fade
} from '@mui/material'
import JobLabel from '../../constant/JobLabel'
import getTechStackList from '../../api/getTechStackList'
import { useNavigate, useParams } from 'react-router-dom'
const JobStackSlide4 = () => {

  const navigate = useNavigate()
  const { job } = useParams()
  const data = getTechStackList('front-end')
  const [inputVal, setInputVal] = useState('')
  const [isVisible, setIsVisible] = useState(false);
  const target = useRef()

  const handleInputVal = (e) => {
    setInputVal(e.target.value)
  }

  const filteredData = data.filter(el =>
    el.label.toLowerCase().includes(inputVal.toLowerCase())
  )

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      setIsVisible(entry[0].isIntersecting)
    })

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [])

  return (
    <Slide>
      <Box textAlign={'center'} marginBottom={'1rem'}>
        <Typography color={'#FFFFFF'} variant='h3'>{JobLabel[job]['kr']}와 관련된 기술스택을 찾아보세요.</Typography>
      </Box>
      <Box width={'70%'} marginTop={'2rem'}>
        <TextField
          fullWidth
          focused
          color='white'
          onChange={handleInputVal}
          value={inputVal}
          InputProps={{
            style: { color: '#ffffff' }, // 글자 색상 변경
          }}
          InputLabelProps={{
            style: { color: '#ffffff' }, // 레이블 색상 변경
          }}
          placeholder='원하는 기술 스택을 검색해 보세요'
        ></TextField>
        <Fade in={isVisible} timeout={1000}>
          <Stack ref={target} marginTop={'2rem'} textAlign={'center'} spacing={1}>
            {filteredData.map((el, idx) => {
              return (
                <Box key={el.id}
                  onClick={() => { navigate(`/job-post?tech-stack=${el.label}`) }}
                  sx={{
                    transition: 'ease-in-out 0.3s !important',
                    borderRadius: '10px',
                    padding: '5px',
                    cursor: 'pointer',
                    ":hover": {
                      padding: '15px',
                      backgroundColor: 'rgba(255,255,255,0.2)'
                    }
                  }}>
                  <Typography variant='h3' sx={{ color: '#ffffff' }}>{`${el.label} (${el.value})`}</Typography>
                </Box>
              )
            })}
          </Stack>
        </Fade>

      </Box>
    </Slide>
  )
}

export default JobStackSlide4