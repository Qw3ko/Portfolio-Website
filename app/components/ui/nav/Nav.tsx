'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const links = [
	{
		name: 'Главная',
		path: '/',
	},
	{
		name: 'Навыки',
		path: '/skills',
	},
	{
		name: 'Резюме',
		path: '/resume',
	},
	{
		name: 'Проекты',
		path: '/work',
	},
	{
		name: 'Контакты',
		path: '/contact',
	},
]

const Nav: FC = () => {
	const pathname = usePathname()
	return (
		<nav className='flex gap-8'>
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`${
							link.path === pathname && 'text-accent border-b-2 border-accent'
						} capitalize font-medium hover:text-accent transition-all`}
					>
						{link.name}
					</Link>
				)
			})}
		</nav>
	)
}

export default Nav
