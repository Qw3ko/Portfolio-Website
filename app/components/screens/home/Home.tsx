import { FC } from 'react'
import { FiDownload } from 'react-icons/fi'
import { Button } from '../../ui/button'
import Photo from '../../ui/Photo'
import Social from '../../ui/Social'
import Stats from '../../ui/Stats'

const Home: FC = () => {
	return (
		<section className='h-full'>
			<div className='container mx-auto h-full'>
				<div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
					<div className='text-center xl:text-left order-2 xl:order-none'>
						<span className='text-xl'>Frontend-разработчик</span>
						<h1 className='h1 mb-6'>
							Привет! Я <br />{' '}
							<span className='text-accent'>Арсений Банников</span>
						</h1>
						<p className='max-w-[500px] mb-9 text-white/80 '>
							Выполняю работу по веб-разработке. Работаю на результат!
						</p>
						<div className='flex flex-col xl:flex-row items-center gap-8'>
							<Button
								variant='outline'
								size='lg'
								className='uppercase flex items-center gap-2'
							>
								<span>Скачать резюме</span>
								<FiDownload className='text-xl' />
							</Button>
							<div className='mb-8 xl:mb-0'>
								<Social
									containerStyles='flex gap-6'
									iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
								/>
							</div>
						</div>
					</div>
					<div className='order-1 xl:order-none mb-8 xl:mb-0'>
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	)
}

export default Home
