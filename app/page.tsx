import React from 'react'
import Card from '@/components/share/Cards/card'
import BodyContainer from '@/components/share/Containers/bodyContainer'

export default function Home() {
  return (
    <>
      <BodyContainer className='body_container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </BodyContainer>
    </>
  )
}
