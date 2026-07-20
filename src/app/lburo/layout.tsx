import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'L.BURO — Ландшафтная студия полного цикла',
  description: 'Создаём скандинавские сады во всех климатических зонах. Более 300 садов в портфолио. Признана лучшей студией 2025 года по версии АЛАРОС.',
}

export default function LburoLayout({ children }: { children: React.ReactNode }) {
  return children
}