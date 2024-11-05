import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const globalStore = create(
  devtools((set) => ({
    isOpen: false,
    menu: [
      { label: 'Курсы', link: '/courses' },
      { label: 'Мастер-классы', link: '/lesson' },
      { label: 'Акции', link: '/stock' },
      { label: 'Контакты', link: '/contacts' },
      { label: 'О нас', link: '/aboutUs' },
    ],
    activeMenuItem: 'Главная',
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    setActiveMenuItem: (item) => set({ activeMenuItem: item }),
  })),
)

export default globalStore
