'use client'
import Container from "@/components/share/container";
import Image from "next/image";
import { Button } from "../ui/button";
import React from "react";
export default function Header() {
    const menu = ['Курсы', 'Мастер-классы', 'Акции', 'Контакты', 'О нас']
    const[active, setActive] = React.useState(0)
    return (
        <Container>
            <header className={'flex justify-between'}>
                <Image src={'/logo.png'} alt={'logo'} width={100} height={100} />
                    <ul className={'flex  gap-6 text-black text-2xl'}>
                        { menu.map((item, index) => {
                            return (
                                <li key ={item + index} className={'cursor-pointer hover:text-red-400'}>
                                    <Button variant={active === index ? "default" : "secondary"}>{item}</Button>
                                </li>
                            )
                        })}
                    </ul>
                <div className={'flex items-center gap-4'}>
                    <div>{'Регистрация / Войти'}</div>
                    <Image src={'/icons8-user-48.png'} alt={'user-icon'} width={25} height={25}/>
                </div>
            </header>
        </Container>

    );
};
