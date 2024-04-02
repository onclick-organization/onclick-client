'use client'
import React, { useState } from 'react'
import CourseProgressLayout from './pogressLayout'
import { Box, Button } from '@mui/material'
import CourseStepTwo from './components/CourseStepTwo'
import CourseStepThree from './components/CourseStepThree'
import CourseStepOne from './components/step1/Step1Form'
import { useSearchParams } from 'next/navigation'

export interface TopicI {
  id: string
  title: string
}
export interface SubCategoryI {
  id: string
  name: string
  topics: TopicI[]
}
export interface CategoryI {
  id: string
  title: string
  description: string
  photo: string
  subCategories: SubCategoryI[]
}

export default function CourseCreationPage() {
  const params = useSearchParams()
  const step = parseInt(params.get('step') || '0')

  const stepComponents = [
    <CourseStepOne step={step} key='1' />,
    <CourseStepTwo key='2' step={step} />,
    <CourseStepThree key='3' step={step} />
  ]
  return (
    <CourseProgressLayout activeStep={step}>
      <Box sx={{ width: 700, maxWidth: '90%' }}>{stepComponents[step]}</Box>
    </CourseProgressLayout>
  )
}
