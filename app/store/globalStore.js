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
