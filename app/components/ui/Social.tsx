import Link from 'next/link'
import { FC } from 'react'

import { FaGithub, FaTelegram, FaVk } from 'react-icons/fa'

const socials = [
	{ icon: <FaGithub />, path: 'https://github.com/Qw3ko' },
	{ icon: <FaTelegram />, path: 'https://t.me/qw3ko' },
	{ icon: <FaVk />, path: 'https://vk.com/qw3kolive' },
]

interface ISocial {
	containerStyles: string
	iconStyles: string
}

const Social: FC<ISocial> = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link key={index} href={item.path} className={iconStyles}>
						{item.icon}
					</Link>
				)
			})}
		</div>
	)
}

export default Social
