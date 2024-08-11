import React, { useState, useRef, useCallback, } from 'react'
import {
  Box,
  Modal,
  Stack,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  TextField,
  Chip
} from '@mui/material'
import JobLabel from '../constant/JobLabel';
import getTechStackList from '../api/getTechStackList';
import RegionList from '../constant/RegionList';
import { useSearchParams } from 'react-router-dom';

const FilteringModal = ({ open, handleClose }) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const job = searchParams.get('job') || ''
  const myTechStack = Boolean(searchParams.get('tech-stack')) ? searchParams.get('tech-stack')?.split(',') : []
  const region = Boolean(searchParams.get('region')) ? searchParams.get('region')?.split(',') : []
  const salary =  searchParams.get('salary') || ''
  const career = searchParams.get('career') || ''
  const techStackList = [...getTechStackList('front-end').map(el => el.id), ...getTechStackList('back-end').map(el => el.id)]

  const handleJobChange = useCallback((event) => {
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      params.set('job', event.target.value);
      return params
    })
  }, [setSearchParams])

  const handleMyTechStack = useCallback((event, newValue) => {
    const newMyTechStack = newValue
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      params.set('tech-stack', newMyTechStack);
      return params
    })
  }, [setSearchParams])

  const handleRegion = useCallback((event, newValue) => {
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      params.set('region', newValue);
      return params
    })
  }, [setSearchParams])

  const handleSalary = useCallback((event) => {
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      params.set('salary', event.target.value);
      return params
    })
  }, [setSearchParams])

  const handleCareer = useCallback((event) => {
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      params.set('career', event.target.value);
      return params
    })
  }, [setSearchParams])

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '1rem'
        }}
      >
        <Stack width={'50rem'} maxWidth={'90vw'} padding={'4rem 2rem'} spacing={2} >

          {/* 희망 직무 */}
          <FormControl fullWidth size='medium'>
            <InputLabel id="job-select-label">희망 직무</InputLabel>
            <Select
              labelId="job-select-label" id="job-select"
              value={job} label="희망 직무"
              onChange={handleJobChange}
            >
              <MenuItem value={''}>선택 취소</MenuItem>
              {Object.entries(JobLabel).map(([job, value]) => {
                return <MenuItem key={job} value={job}>{value.kr}</MenuItem>
              })}
            </Select>
          </FormControl>
            
          {/* 기술 스택 */}
          <Autocomplete
            size='medium'
            id="tech-stack-select"
            multiple
            options={techStackList}
            value={myTechStack}
            defaultValue={techStackList.filter((el) => {
              return myTechStack.includes(el)
            })}
            onChange={handleMyTechStack}
            renderInput={(params) => <TextField {...params} label="기술 스택" />}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                const { key, ...props } = getTagProps({ index });
                return (
                  <Chip
                    key={key}
                    label={option}
                    color='secondary'
                    {...props}
                    sx={{ fontSize: '1.2rem' }} 
                  />
                );
              })
            }
          >
          </Autocomplete>

          {/* 근무지역 */}
          <Autocomplete
            size='medium'
            id="region-select"
            multiple
            options={RegionList}
            onChange={handleRegion}
            value={region}
            defaultValue={region.filter((el) => {
              return RegionList.includes(el)
            })}
            renderInput={(params) => <TextField {...params} label="근무 희망 지역" />}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                const { key, ...props } = getTagProps({ index });
                return (
                  <Chip
                    key={key}
                    label={option}
                    color='secondary'
                    {...props}
                    sx={{ fontSize: '1.2rem' }} 
                  />
                );
              })
            }
          >
          </Autocomplete>

          {/* 최소 연봉 */}
          <FormControl fullWidth size='medium'>
            <InputLabel id="salary-select-label">최소 희망 연봉</InputLabel>
            <Select
              labelId="salary-select-label" id="salary-select"
              value={salary} label="최소 희망 연봉"
              onChange={handleSalary}
            >
              <MenuItem value={'0'}>없음</MenuItem>
              <MenuItem value={'1500'}>1500 만원 이상</MenuItem>
              <MenuItem value={'2000'}>2000 만원 이상</MenuItem>
              <MenuItem value={'3000'}>3000 만원 이상</MenuItem>
              <MenuItem value={'4000'}>4000 만원 이상</MenuItem>
              <MenuItem value={'5000'}>5000 만원 이상</MenuItem>
              <MenuItem value={'6000'}>6000 만원 이상</MenuItem>

            </Select>
          </FormControl>


          {/* 경력 */}
          <FormControl fullWidth size='medium'>
            <InputLabel id="career-select-label">경력</InputLabel>
            <Select
              labelId="career-select-label" id="career-select"
              value={career} label="경력"
              onChange={handleCareer}
            >
              <MenuItem value={'0'}>신입</MenuItem>
              <MenuItem value={'3'}>3년 이상</MenuItem>
              <MenuItem value={'5'}>5년 이상</MenuItem>
              <MenuItem value={'10'}>10년 이상</MenuItem>
            </Select>
          </FormControl>

          <Button variant='contained' color='secondary' fullWidth onClick={handleClose}>확인</Button>

        </Stack>
      </Box>
    </Modal>
  )
}

export default FilteringModal