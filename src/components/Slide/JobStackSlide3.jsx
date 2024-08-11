import React from 'react'
import Slide from './Slide'
import { Box, Typography } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import { useParams } from 'react-router-dom'
import JobLabel from '../../constant/JobLabel'
import getPreferentialTechStack from '../../api/getPreferentialTechStack'

const JobStackSlide3 = () => {

  const { job } = useParams()
  const data = getPreferentialTechStack('front-end')

  return (
    <Slide>
      <Box textAlign={'center'} marginBottom={'1rem'}>
        <Typography color={'#FFFFFF'} variant='h3'>{JobLabel[job]['kr']}에게 기업이 우대하는 기술 스택의 순위는 다음과 같아요.</Typography>
      </Box>
      <ResponsivePie
        height={450}
        data={data}
        margin={{ top: 80, right: 80, bottom: 40, left: 80 }}
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

export default JobStackSlide3