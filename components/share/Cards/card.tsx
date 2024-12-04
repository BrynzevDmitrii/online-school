import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'

export interface CardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  price: number
}

function Card(props: { props: CardProps }) {
  return (
    <div className={style.card}>
      <div className={style.card_preview}>
        <Image
          src={props.props.imageSrc}
          alt={props.props.imageAlt}
          width={300}
          height={300}
          className={style.card_preview__img}
        />
      </div>

      <h3 className={style.card_title}>{props.props.title}</h3>
      <p className={style.card_description}>{props.props.description}</p>
      <div className={style.card_footer}>
        <p className={style.card_price}>{props.props.price}</p>
        <button className={style.card_btn_buy}>Купить</button>
      </div>
      <div className={style.card_more}>
        <p>Подробнее</p>
      </div>
    </div>
  )
}

export default Card
