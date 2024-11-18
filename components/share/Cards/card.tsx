import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'

function Card() {
  return (
    <div className={style.card}>
      <div className={style.card_preview}>
        <Image src={'/video.png'} alt={'preview'} width={300} height={300} className={style.card_preview__img} />
      </div>

      <h3 className={style.card_title}>Название карточки</h3>
      <p className={style.card_description}>
        Сегодня на уроке по пластилину будет очень ярко! Мы с вами слепим хамелеона. Я покажу, как миксовать цвета в
        пластилине и расскажу интересные факты, про эту необычную ящерицу.
      </p>
      <div className={style.card_footer}>
        <p className={style.card_price}>2500 ₽</p>
        <button className={style.card_btn_buy}>Купить</button>
      </div>
      <div className={style.card_more}>
        <p>Подробнее</p>
      </div>
    </div>
  )
}

export default Card
