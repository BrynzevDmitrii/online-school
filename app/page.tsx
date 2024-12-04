'use client'
import React from 'react'
import Sort from '../components/share/Sort/sort'
import BodyContainer from '../components/share/Containers/bodyContainer'
import Card, { CardProps } from '../components/share/Cards/card'
import globalStore from './store/globalStore'

export default function Home() {
  const cardList = globalStore((state) => state.cardList)

  return (
    <>
      <BodyContainer>
        <Sort />
        <BodyContainer className='body_container'>
          {cardList.map((card: CardProps, index) => (
            <Card key={index} props={card} />
          ))}
        </BodyContainer>
      </BodyContainer>
    </>
  )
}
