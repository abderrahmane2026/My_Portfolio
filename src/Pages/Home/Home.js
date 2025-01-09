import React from 'react'
import Hero from '../../Components/Hero/Hero'
import MyservicesSection from '../../Components/Myservices/MyservicesSection'
import Aboutsection from '../../Components/Aboutsection/Aboutsection'
import ContactPage from '../../Components/Contact/Contact'
import PhotoSection from '../../Components/PhotoSection/PhotoSection'

export default function Home() {
  return (
    <div>
        <Hero/>
        <MyservicesSection/>
        <Aboutsection/>
        <ContactPage/>
        <PhotoSection/>
    </div>
  )
}
