'use client'
import Container from '@/components/share/Containers/container'
import Image from 'next/image'
import { Button } from '../ui/button'
import React from 'react'
import { useResize } from '@/hooks/useResize'
import MobileHeader from '@/components/share/MobileHeader/mobileHeader'
import Link from 'next/link'
import globalStore from '@/app/store/globalStore'
export default function Header() {
  const [active, setActive] = React.useState(0)
  const { isMobile } = useResize()
  const isAuth = globalStore((state) => state.isAuth)
  const setActiveMenuItem = globalStore((state) => state.setActiveMenuItem)
  const menu = globalStore((state) => state.menu)

  const activeItem = (index: number) => {
    setActive(index)
    setActiveMenuItem(menu[index].label)
  }

  return isMobile ? (
    <MobileHeader isAuth={isAuth} />
  ) : (
    <Container>
      <header className={'flex justify-between items-center px-5'}>
        <Link href={'/'}>
          <Image src={'/logo.png'} alt={'logo'} width={50} height={50} />
        </Link>
        <ul className={'flex  gap-6 text-black text-2xl'}>
          {menu.map((item: { label: string; link: string }, index: number) => {
            return (
              <li
                key={item.label + index}
                className={'cursor-pointer hover:text-red-400'}
                onClick={() => activeItem(index)}
              >
                <Link href={item.link}>
                  <Button variant={active === index ? 'default' : 'secondary'}>{item.label}</Button>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className={'flex items-center gap-4'}>
          {isAuth ? (
            <Image src={'/icons8-user-48.png'} alt={'user-icon'} width={25} height={25} />
          ) : (
            <div>{'Регистрация / Войти'}</div>
          )}
        </div>
      </header>
    </Container>
  )
}
