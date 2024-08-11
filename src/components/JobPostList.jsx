import React, { useEffect, useState, useRef } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import {
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
  ImageList,
  ImageListItem
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getJobPostList from '../api/getJobPostList';
import JobLabel from '../constant/JobLabel';

const JobPostList = () => {

  const [searchParams,] = useSearchParams()
  const [jobPostList, setJobPostList] = useState([])

  const job = searchParams.get('job')
  const techStack = searchParams.get('tech-stack')
  const region = searchParams.get('region')
  const salary = searchParams.get('salary')
  const career = searchParams.get('career')

  useState(() => {
    setJobPostList(getJobPostList())
  }, [])

  useEffect(() => {

    let filteredList = getJobPostList()

    // 직무 필터링
    if(job) {
      filteredList = filteredList.filter(post => {
        return post.job === job
      })
    }

    // 기술 스택 필터링
    if(techStack) {
      filteredList = filteredList.filter(post => {
        const unionTechStack = [...post.essential, ...post.preferential]
        return techStack.split(',').every((el) => {return unionTechStack.includes(el)})
      })
    } 
    
    // 지역 필터링
    if (region) {
      filteredList = filteredList.filter(post => {
        return region.includes(post.region)
      })
    } 

    // 연봉 필터링
    if (salary) {
      filteredList = filteredList.filter(post => {
        return post.salary >= salary
      })
    } 

    // 경력 필터링
    if (career) {
      filteredList = filteredList.filter(post => {
        return Number(post.career) <= Number(career)
      })
    } 


    setJobPostList(filteredList)
  }, [job, region, techStack, salary, career])



  return (
    <ImageList variant='masonry' gap={8} cols={2}>
      {jobPostList.map(el => {
        return (
          <ImageListItem key={el.url}>
            <JobPostCard data={el}></JobPostCard>
          </ImageListItem>
        )
      })}

    </ImageList>
  )
}


const JobPostCard = ({ data }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: '1rem' }}>
      <Stack padding={'1rem'} paddingBottom={'calc(1rem - 8px)'} spacing={0.5}>
        <Typography variant='body2' fontWeight={700} color={'#555555'}>{data.site}</Typography>
        <Typography variant='h3'>{data.company}</Typography>
        <Divider></Divider>
        <Stack padding={'0.5rem'}>
          <Typography variant='body1'>● 직무 : {JobLabel[data.job]['kr']}</Typography>
          <Typography variant='body1'>● 경력 : {data.career}년 이상</Typography>
          <Typography variant='body1'>● 위치 : {data.region}</Typography>
          <Typography variant='body1'>● 연봉 : {data.salary} 이상</Typography>
        </Stack>
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
    onClick={() => { naviagate('/job-post?tech-stack=React') }}
    sx={{
      marginRight: '8px',
      marginBottom: '8px',
      borderRadius: '5px',
      fontSize: '1.2rem',
      fontWeight: '700'
    }}></Chip>
}

export default JobPostList