import React, { useState, useEffect } from 'react'
import {
  Box,
  Stack,
  Typography
} from '@mui/material'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const JOB_SKILL = 'JOB_SKILL'
const JOB_POSTING = 'JOB_POSTING'

const Header = () => {

  const navigate = useNavigate()
  const [tab, setTab] = useState(JOB_SKILL)
  const handleTab = (newTab) => {
    setTab(newTab)
  }

  useEffect(() => {
    // 탭 상태에 따라 배경 색을 변경합니다.
    if (tab === JOB_SKILL) {
      document.body.style.backgroundColor = '#1F2942' // JOB_SKILL에 해당하는 배경 색
    } else if (tab === JOB_POSTING) {
      document.body.style.backgroundColor = '#4E5A77' // JOB_POSTING에 해당하는 배경 색
    }
  }, [tab])

  return (
    <Box height={'10vh'}>
      <Side color={'#1F2942'} left
        select={(tab === JOB_SKILL).toString()}
      ></Side>
      <Side color={'#4E5A77'} right
        select={(tab === JOB_POSTING).toString()}
      ></Side>
      <Stack
        direction={'row'}
        textAlign={'center'}
        alignItems={'center'}
        height={'10vh'}
      >
        <TabTypography
          isSelect={(tab === JOB_SKILL)}
          handleClick={() => {
            navigate('/')
            handleTab(JOB_SKILL)
          }}
        >
          직무별 요구 사항
        </TabTypography>
        <TabTypography
          isSelect={(tab === JOB_POSTING)}
          handleClick={() => {
            navigate('/job-post')
            handleTab(JOB_POSTING)
          }}
        >
          채용 공고
        </TabTypography>
      </Stack>
    </Box>
  )
}


const Side = styled(Box)((props) => {
  return {
    backgroundColor: props.color,
    position: 'absolute',
    width: (props.select === 'true') ? '55%' : '45%',
    height: '10vh',
    top: '0',
    right: props.right && '0',
    left: props.left && '0',
    zIndex: (props.select === 'true') ? '-1' : '-2',
    transition: '0.5s'
  }
})


const TabTypography = ({ children, isSelect, handleClick }) => {
  return (
    <Typography
      lineHeight={'10vh'}
      fontSize={(isSelect) ? '2.4rem' : '1.8rem'}
      flexGrow={(isSelect) ? 6 : 4}
      onClick={handleClick}
      color={'#FFFFFF'}
      sx={{ transition: '0.4s ease-in-out' }}
    >
      {children}
    </Typography>
  )
}

export default Header