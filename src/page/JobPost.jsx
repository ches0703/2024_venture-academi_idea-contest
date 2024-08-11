import React from 'react'
import {
  Box,
  Stack,
  Button,
  Typography
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useModal from '../hooks/useModal';
import FilteringModal from '../components/FilteringModal';
const JobPost = () => {

  const { open, handleOpen, handleClose } = useModal()


  return (
    <Stack marginTop={'2rem'}>
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
        <Typography variant='h3'>
          희망 직무, 사용할 수 있는 기술 스택, 희망 연봉 등을 선택해 주세요
        </Typography>
      </Button>
      <FilteringModal open={open} handleClose={handleClose}></FilteringModal>
    </Stack>
  )
}

export default JobPost