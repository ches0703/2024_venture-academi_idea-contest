import React from 'react'
import {
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import JobLabel from '../constant/JobLabel';

const JobPostCard = ({ data }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: '1rem' }} >
      <Stack padding={'1rem'} paddingBottom={'calc(1rem - 8px)'} spacing={0.5}>
        <Link href={data.url} underline='none' target={'_blank'}>
          <Typography variant='body2' fontWeight={700} color={'#555555'}>{data.site}</Typography>
          <Typography variant='h3'>{data.company}</Typography>
          <Divider></Divider>
          <Stack padding={'0.5rem'}>
            <Typography variant='body1'>● 직무 : {JobLabel[data.job]['kr']}</Typography>
            <Typography variant='body1'>● 경력 : {data.career}년 이상</Typography>
            <Typography variant='body1'>● 위치 : {data.region}</Typography>
            <Typography variant='body1'>● 연봉 : {data.salary} 이상</Typography>
          </Stack>
        </Link>
        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'flex-start'}>
          {data.essential.map(el => {
            return <TechStackChip key={el} label={el} type={'E'}></TechStackChip>
          })}
          {data.preferential.map(el => {
            return <TechStackChip key={el} label={el} type={'P'}></TechStackChip>
          })}
        </Stack>

      </Stack>
    </Paper>

  )
}

const TechStackChip = ({ label, type }) => {
  const naviagate = useNavigate()
  return <Chip label={label}
    clickable
    color={type === 'E' ? 'primary' : 'default'}
    onClick={() => { naviagate(`/job-post?tech-stack=${label}`) }}
    sx={{
      marginRight: '8px',
      marginBottom: '8px',
      borderRadius: '5px',
      fontSize: '1.2rem',
      fontWeight: '700',
      zIndex: 1
    }}></Chip>
}

export default JobPostCard