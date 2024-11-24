import React from 'react'
import Card from '@/components/share/Cards/card'
import BodyContainer from '@/components/share/Containers/bodyContainer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <BodyContainer>
        <div className='flex justify-end'>
          <Image src={'/filter-icon.png'} alt={'filter'} width={24} height={24} />
        </div>
        <BodyContainer className='body_container'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </BodyContainer>
      </BodyContainer>
    </>
  )
}
