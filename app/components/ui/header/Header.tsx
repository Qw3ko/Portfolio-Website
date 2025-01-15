import Link from 'next/link'
import { FC } from 'react'
import { Button } from '../button'
import MobileNav from '../MobileNav'
import Nav from '../nav/Nav'

const Header: FC = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/'>
					<h1 className='text-4xl font-semibold'>
						Qw3ko<span className='text-accent'>.</span>Work
					</h1>
				</Link>
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
					<Link href='/contact'>
						<Button>Наймите меня!</Button>
					</Link>
				</div>
				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	)
}

export default Header
