import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const globalStore = create(
  devtools((set, get) => ({
    isAuth: false,
    isOpen: false,
    menu: [
      { label: 'Курсы', link: '/courses' },
      { label: 'Мастер-классы', link: '/lesson' },
      { label: 'Акции', link: '/stock' },
      { label: 'Контакты', link: '/contacts' },
      { label: 'О нас', link: '/aboutUs' },
    ],
    mobileMenu: [],
    activeMenuItem: 'Главная',
    sortList: ['Новинки', 'Цена', 'Рейтинг'],
    cardList: [
      {
        imageSrc: '/video.png',
        imageAlt: 'video',
        title: 'Курс по пластилину',
        description:
          'Сегодня на уроке по пластилину будет очень ярко! Мы с вами слепим хамелеона. Я покажу, как миксовать цвета впластилине и расскажу интересные факты, про эту необычную ящерицу.',
        price: '3500',
      },
      {
        imageSrc: '/video.png',
        imageAlt: 'video',
        title: 'Курс по пластилину',
        description:
          'Сегодня на уроке по пластилину будет очень ярко! Мы с вами слепим хамелеона. Я покажу, как миксовать цвета впластилине и расскажу интересные факты, про эту необычную ящерицу.',
        price: '3500',
      },
      {
        imageSrc: '/video.png',
        imageAlt: 'video',
        title: 'Курс по пластилину',
        description:
          'Сегодня на уроке по пластилину будет очень ярко! Мы с вами слепим хамелеона. Я покажу, как миксовать цвета впластилине и расскажу интересные факты, про эту необычную ящерицу.',
        price: '3500',
      },
      {
        imageSrc: '/video.png',
        imageAlt: 'video',
        title: 'Курс по пластилину',
        description:
          'Сегодня на уроке по пластилину будет очень ярко! Мы с вами слепим хамелеона. Я покажу, как миксовать цвета впластилине и расскажу интересные факты, про эту необычную ящерицу.',
        price: '3500',
      },
      {
        imageSrc: '/video.png',
        imageAlt: 'video',
        title: 'Курс по пластилину',
        description:
          'Сегодня на уроке по пластилину будет очень ярко! Мы с вами слепим хамелеона. Я покажу, как миксовать цвета впластилине и расскажу интересные факты, про эту необычную ящерицу.',
        price: '3500',
      },
      {
        imageSrc: '/video.png',
        imageAlt: 'video',
        title: 'Курс по пластилину',
        description:
          'Сегодня на уроке по пластилину будет очень ярко! Мы с вами слепим хамелеона. Я покажу, как миксовать цвета впластилине и расскажу интересные факты, про эту необычную ящерицу.',
        price: '3500',
      },
      {
        imageSrc: '/video.png',
        imageAlt: 'video',
        title: 'Курс по пластилину',
        description:
          'Сегодня на уроке по пластилину будет очень ярко! Мы с вами слепим хамелеона. Я покажу, как миксовать цвета впластилине и расскажу интересные факты, про эту необычную ящерицу.',
        price: '3500',
      },
    ],

    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    setActiveMenuItem: (item) => set({ activeMenuItem: item }),
    setMobileMenu: () =>
      set({
        mobileMenu: get().isAuth
          ? [{ label: 'Профиль', link: '/profile' }, ...get().menu, { label: 'Выход', link: '/logout' }]
          : [...get().menu, { label: 'Вход', link: '/logout' }],
      }),
  })),
)

export default globalStore
