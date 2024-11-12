import * as React from 'react'
import MobileContainer from '@/components/share/Containers/mobileContainer'
import Image from 'next/image'
import styles from './style.module.scss'
import globalStore from '@/app/store/globalStore'

type Props = {
  isAuth: boolean
  menu: { label: string; link: string }[]
}
export default function MobileHeader(props: Props) {
  const isActiveDrawer = globalStore((state) => state.isOpen)
  const setIsActiveDrawer = globalStore((state) => state.open)
  const activeMenuItem = globalStore((state) => state.activeMenuItem)

  return (
    <MobileContainer>
      <div className={'flex justify-between items-center sticky'}>
        <Image src={'/logo.png'} alt={'logo'} width={100} height={100} />
        <span>{activeMenuItem}</span>
        <div className='menu' onClick={setIsActiveDrawer}>
          <input
            type='checkbox'
            id='burger-checkbox'
            className={styles['burger-checkbox']}
            checked={isActiveDrawer}
            onChange={() => setIsActiveDrawer(!isActiveDrawer)}
          />
          <label htmlFor='burger-checkbox' className={styles['burger']}></label>
        </div>
      </div>
    </MobileContainer>
  )
}
