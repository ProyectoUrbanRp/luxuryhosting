import { create } from "zustand"

type NavbarStore = {
  activeMenu: string | null
  setActiveMenu: (menu: string | null) => void
}

export const useNavbarStore = create<NavbarStore>((set) => ({
  activeMenu: null,

  setActiveMenu: (menu) =>
    set({
      activeMenu: menu,
    }),
}))