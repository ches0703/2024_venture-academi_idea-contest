import React from 'react'
import Slide from './Slide'
import { Box, Typography } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import getEssentialTechStack from '../../api/getEssentialTechStack'
import { useParams } from 'react-router-dom'
import JobLabel from '../../constant/JobLabel'

const JobStackSlide2 = () => {
  const { job } = useParams()
  const data = getEssentialTechStack('front-end')
  return (
    <Slide>
      <Box textAlign={'center'} marginBottom={'1rem'}>
        <Typography color={'#FFFFFF'} variant='h2'>{JobLabel[job]['kr']}에게 기업이 필수적으로 요구하는 기술 스택의 순위는 다음과 같아요.</Typography>
      </Box>
      <ResponsivePie
        height={500}
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        endAngle={-360}
        sortByValue={true}
        innerRadius={0.7}
        padAngle={2}
        cornerRadius={10}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'yellow_green_blue' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0'
                ]
            ]
        }}
        arcLinkLabel={e=>e.id+" ("+e.value+")"}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabel="value"
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ theme: 'background' }}
        arcLinkLabelsStraightLength={36}
        transitionMode="pushOut"
    />
    </Slide>
  )
  
}

export default JobStackSlide2