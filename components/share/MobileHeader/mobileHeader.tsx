'use client'
import * as React from 'react';
import MobileContainer from "@/components/share/Containers/mobileContainer";
import Image from "next/image";
import styles from './style.module.scss';

type Props = {

};
export default function MobileHeader  (props: Props) {
    const [isAuth, setIsAuth] = React.useState(true);
    return (
        <MobileContainer>
            <div className={'flex justify-between items-center sticky'}>
                <Image src={'/logo.png'} alt={'logo'} width={100} height={100}/>
                <span>Онлайн курсы</span>
                <div className="menu">
                    <input type="checkbox" id="burger-checkbox" className={styles['burger-checkbox']}/>
                    <label htmlFor="burger-checkbox" className={styles['burger']}></label>
                </div>
            </div>
        </MobileContainer>
);
};

