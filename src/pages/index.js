import React from 'react'
import { Header } from '../components/Header'
import { Main1 } from '../components/Main1'
import { Maintwo } from '../components/Maintwo'
import { Footer } from '../components/Footer'
import { Carossel } from '../components/Carossel'
import '../global/global.css'

export default function Index() {

  return (
    <div>  
      <Header/>
      <Main1/>      
      <Maintwo/>  
      <Carossel/>
    </div>
  )
}