import { ROUTES_NAME } from '@/shared/routes';

export const menuItems = [
  {
    title: 'Trang chủ',
    href: ROUTES_NAME.home
  },
]

export const subMenuItems = [
  {
    title: 'Bồn nước Sơn Hà',
    href: ROUTES_NAME.waterTanks
  },
  {
    title: 'Thái năng Sơn Hà',
    href: ROUTES_NAME.solarEnergy
  },
  {
    title: 'Bình nóng lạnh',
    href: ROUTES_NAME.waterHeater
  },
  {
    title: 'Bồn tự hoại',
    href: ROUTES_NAME.septicTank
  },
  {
    title: 'Bồn nhựa',
    href: ROUTES_NAME.plasticTank
  },
  {
    title: 'Chậu sen vòi',
    href: ROUTES_NAME.sinkTank
  },
]

export const spMenuItems = [...menuItems, ...subMenuItems]
