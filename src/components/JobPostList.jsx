import React, { useEffect, useState } from 'react'
import {
  ImageList,
  ImageListItem
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import getJobPostList from '../api/getJobPostList';
import JobPostCard from './JobPostCard';
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




export default JobPostList