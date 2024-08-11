import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import {
  Chip,
  Divider,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
const JobPostList = () => {
  const [searchParams,] = useSearchParams()
  const [jobPostList, setJobPostList] = useState([])

  const job = searchParams.get('job')
  const techStack = searchParams.get('tech-stack')
  const region = searchParams.get('region')
  const salary = searchParams.get('salary')
  const career = searchParams.get('career')


  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8 }} >
      <Grid xs={4}>
        <JobPostCard></JobPostCard>
      </Grid>
      <Grid xs={4}>
        <JobPostCard></JobPostCard>
      </Grid>
      <Grid xs={4}>
        <JobPostCard></JobPostCard>
      </Grid>
      <Grid xs={4}>
        <JobPostCard></JobPostCard>
      </Grid>
    </Grid>
  )
}


const JobPostCard = () => {
  return (
    <Paper elevation={3} sx={{ borderRadius: '1rem' }}>
      <Stack padding={'1rem'} paddingBottom={'calc(1rem - 8px)'} spacing={0.5}>
        <Typography variant='body2' fontWeight={700} color={'#555555'}>사람인</Typography>
        <Typography variant='h3'>정보처리산업</Typography>
        <Divider></Divider>
        <Stack padding={'0.5rem'}>
          <Typography variant='body1'>● 직무 : {'프론트엔드 개발'}</Typography>
          <Typography variant='body1'>● 경력 : {5}년 이상</Typography>
          <Typography variant='body1'>● 위치 : 대구</Typography>
          <Typography variant='body1'>● 연봉 : 2000 이상</Typography>
        </Stack>
        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'flex-start'}>
          <TechStackChip label={'React'} type="E"></TechStackChip>
          <TechStackChip label={'React'} type="P"></TechStackChip>
          <TechStackChip label={'React'}></TechStackChip>
          <TechStackChip label={'React'}></TechStackChip>
          <TechStackChip label={'React'}></TechStackChip>
          <TechStackChip label={'React'}></TechStackChip>
          <TechStackChip label={'React'}></TechStackChip>
          <TechStackChip label={'React'}></TechStackChip>
          <TechStackChip label={'React'}></TechStackChip>
        </Stack>

      </Stack>
    </Paper>
  )
}

const TechStackChip = ({ label, type }) => {
  const naviagate = useNavigate()
  console.log(type)
  return <Chip label={label}
    clickable
    color={type === 'E' ? 'primary' : 'default'}
    onClick={() => {naviagate('/job-post?tech-stack=React')}}
    sx={{
      marginRight: '8px',
      marginBottom: '8px',
      borderRadius: '5px',
      fontSize: '1.2rem',
      fontWeight: '700'
    }}></Chip>
}

export default JobPostList