import React from 'react'
import Slide from './Slide'
import getTechStackList from '../../api/getTechStackList'
import {
  styled,
  Stack,
  Box,
  Tooltip,
  Typography
} from '@mui/material'
import { useParams } from 'react-router-dom'
import getPastelColor from '../../utils/getPastelColor'
import JobLabel from '../../constant/JobLabel'

const JobStackSlide1 = () => {
  const { job } = useParams()
  const data = getTechStackList('front-end')

  return (
    <Slide>
      <Box textAlign={'center'} marginBottom={'1rem'}>
        <Typography color={'#FFFFFF'} variant='h2'>{JobLabel[job]['kr']}의 주요 기술스택은 다음과 같아요.</Typography>
      </Box>
      <Box margin={'auto'}>
        <Stack direction={'row'} flexWrap={'wrap'} alignItems={'flex-end'} justifyContent={'center'}>
          {data.map((el, index) => {
            if (index % 2 === 0) {
              const color = getPastelColor(el.value)
              return (
                <Tooltip key={el.id} followCursor
                  title={<TechCardTooltip color={color}>{el.label} : {el.value}</TechCardTooltip>} 
                >
                  <TechCard value={el.value} color={color}>
                    {el.label}
                  </TechCard>
                </Tooltip>
              )
            }
          })}
        </Stack>
        <Stack direction={'row'} flexWrap={'wrap'} alignItems={'flex-start'} justifyContent={'center'}>
          {data.map((el, index) => {
            if (index % 2 === 1) {
              const color = getPastelColor(el.value)
              return (
                <Tooltip key={el.id} followCursor
                  title={<TechCardTooltip color={color}>{el.label} : {el.value}</TechCardTooltip>} 
                >
                  <TechCard value={el.value} color={color}>
                    {el.label}
                  </TechCard>
                </Tooltip>
              )
            }
          })}
        </Stack>

      </Box>
    </Slide>
  )
}


const TechCardTooltip = ({ children, color }) => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={1}>
      <Box width={'2rem'} height={'2rem'} borderRadius={'2px'} backgroundColor={color}></Box>
      <Typography variant='body1'>{children}</Typography>
    </Stack>
  )
}

const TechCard = styled(Box)((props) => {
  return {
    padding: `${props.value / 30}px`,
    fontSize: `${props.value / 10}px`,
    border: `5px solid ${props.color}`,
    margin: '3px',
    borderRadius: '15px',
    backgroundColor: getPastelColor(props.value, 0.1),
    transition: 'ease-in-out 0.3s',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  }
})



export default JobStackSlide1