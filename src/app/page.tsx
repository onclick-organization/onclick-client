'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { getDeviceToken } from '@/utilities/device'
import getAuthUser from '@/utilities/getAuthUser'
import Main from '@/components/Main/Main'
import MySwiper from '@/components/Swiper/MySwiper'
import Courses from '@/components/Courses/Courses'
import News from '@/components/News/News'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  const fetchDeviceToken = async () => {
    const deviceToken = await getDeviceToken()
    console.log('deviceToken', deviceToken)
    // TODO save the token in DB
  }
  useEffect(() => {
    const _ = async () => {
      const authUser = await getAuthUser()
      console.log(authUser)
      await fetchDeviceToken()
    }
    _()
  }, [])

  return (
    <main>
      <Header />
      <MySwiper width='50px' height='50px' />
      <Main />
      <Courses />
      <News />
      <Footer />
    </main>
  )
}
