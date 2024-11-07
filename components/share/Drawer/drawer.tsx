'use client'
import globalStore from '@/app/store/globalStore'
import { useResize } from '@/hooks/useResize'
import { cn } from '@/lib/utils'
import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function Drawer() {
  const isOpen = globalStore((state) => state.isOpen)
  const close = globalStore((state) => state.close)
  const activeItem = globalStore((state) => state.activeMenuItem)
  const { isMobile } = useResize()
  const menu = globalStore((state) => state.menu)
  const setActiveMenuItem = globalStore((state) => state.setActiveMenuItem)

  const handlerClickToMenuItem = (index) => {
    setActiveMenuItem(menu[index].label)
    close()
  }
  const handlerClickToHome = () => {
    close()
    setActiveMenuItem('Главная')
  }

  return (
    <div className={cn(isMobile && isOpen ? styles.drawer : 'hidden')} role='dialog'>
      <div className={styles.drawer_header}>
        <div className={styles.drawer_title}>
          <Link href={'/'} onClick={() => handlerClickToHome()}>
            <Image src={'/drawer-home.png'} alt={'logo'} width={28} height={28} />
          </Link>
          <h3>{activeItem}</h3>
          <button onClick={close}>x</button>
        </div>
      </div>
      <div className={styles.drawer_content}>
        <div className={styles.drawer_body}>
          {menu.map((item, index) => {
            return (
              <Link href={item.link} key={item.label} onClick={() => handlerClickToMenuItem(index)}>
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Drawer