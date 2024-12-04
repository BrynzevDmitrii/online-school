'use client'
import React from 'react'
import style from './style.module.scss'
import { cn } from '@/lib/utils'
import globalStore from '@/app/store/globalStore'

function Sort() {
  const [activeFilterItem, setActiveFilterItem] = React.useState('')
  const [isActiveSort, setActiveSort] = React.useState(false)
  const sortList = globalStore((state) => state.sortList)

  return (
    <div className={style.sort}>
      <div
        className={cn(style.sort__reset, isActiveSort ? style.active__sort : '')}
        onClick={() => setActiveFilterItem('')}
      >
        сбросить
      </div>
      <div className={style.sort__title} onClick={() => setActiveSort(!isActiveSort)}>
        Сортировка
      </div>
      <ul className={cn(style.sort__list, isActiveSort ? style.active__sort : '')}>
        {sortList.map((item: string, index: number) => {
          return (
            <li
              id={item}
              key={item + index}
              className={cn(style.sort__checkbox, activeFilterItem === item ? style.active : '')}
              onClick={() => setActiveFilterItem(item)}
            >
              <div />
              <span>{item}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sort
