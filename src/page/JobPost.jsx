import React from 'react'
import {
  Box,
  Stack,
  Button,
  Typography,
  Divider
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useModal from '../hooks/useModal';
import FilteringModal from '../components/FilteringModal';
import JobPostList from '../components/JobPostList';
import { useSearchParams } from 'react-router-dom';
import JobLabel from '../constant/JobLabel';

const JobPost = () => {

  const { open, handleOpen, handleClose } = useModal()
  const [searchParams,] = useSearchParams()

  const job = searchParams.get('job')
  const techStack = searchParams.get('tech-stack')
  const region = searchParams.get('region')
  const salary = searchParams.get('salary')
  const career = searchParams.get('career')
  const isView = Boolean(techStack || region || salary || career)

  return (
    <Stack marginTop={'2rem'} spacing={2}>
      <Button
        endIcon={<ArrowDropDownIcon></ArrowDropDownIcon>}
        color='white'
        onClick={handleOpen}
        sx={{
          "&:hover": {
            backgroundColor: 'rgba(0,0,0,0)'
          },
          borderRadius: '25px',
          fontWeight: '700',
          width: '100%',
          margin: 'auto'
        }}
      >
        <Typography variant={searchParams.size === 0 ? 'h3' : 'h4'}>
          희망 직무, 사용할 수 있는 기술 스택, 희망 연봉 등을 선택해 주세요
        </Typography>
      </Button>
      <FilteringModal open={open} handleClose={handleClose}></FilteringModal>
      {isView && <Divider color={'white'} ></Divider>}
      {isView && <Box sx={{color: '#ffffff'}}>
        {job && <Typography variant='body1'>희망 직무 : {JobLabel[job]['kr']}</Typography>}
        {techStack && <Typography variant='body1'>기술 스택 : {techStack.split(',').join(', ')}</Typography>}
        {region && <Typography variant='body1'>근무 지역 : {region.split(',').join(', ')}</Typography>}
        {salary && <Typography variant='body1'>희망 연봉 : {salary}만원 이상</Typography>}
        {career && <Typography variant='body1'>관련 경력 : {career}년 이상</Typography>}
      </Box>}

      <Divider color={'white'} ></Divider>
      


      <JobPostList></JobPostList>
    </Stack>
  )
}

export default JobPost