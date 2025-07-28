'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../../ui/tooltip'
import WorkSliderButtons from '../../ui/WorkSliderButtons'

const projects = [
	{
		num: '01',
		title: 'High five',
		description: 'Онлайн-платформа для выявления профессионального выгорания',
		stack: [
			{ name: 'React' },
			{ name: 'Vite.Js' },
			{ name: 'TypeScript' },
			{ name: 'HTML 5' },
			{ name: 'CSS 3' },
		],
		image: '/Project1.jpg',
		github: 'https://github.com/Qw3ko/High-Five',
		live: 'https://high-five-kappa.vercel.app/',
	},
	{
		num: '02',
		title: 'Online Cinema',
		description:
			'Онлайн кинотеатр с возможностью авторизации и регистрации, оценки фильма, добавление его в избранное и просмотра трейлера.',
		stack: [
			{ name: 'React' },
			{ name: 'Next.Js' },
			{ name: 'TypeScript' },
			{ name: 'HTML 5' },
			{ name: 'SCSS' },
		],
		image: '/Project2.png',
		github: 'https://github.com/Qw3ko/Next.js-Online-Cinema',
		live: 'https://next-js-online-cinema.vercel.app/',
	},
	{
		num: '03',
		title: 'Simple Bank Application',
		description:
			'Простое банковское приложение написанное на чистом JavaScript.',
		stack: [{ name: 'JavaScript' }, { name: 'HTML 5' }, { name: 'SCSS' }],
		image: '/Project3.png',
		github: 'https://github.com/Qw3ko/JS-SPA-Bank',
		live: '',
	},
	{
		num: '04',
		title: 'Simple Workout Application',
		description: 'Простое мобильное приложение для тренировок.',
		stack: [
			{ name: 'React' },
			{ name: 'Vite.JS' },
			{ name: 'JavaScript' },
			{ name: 'HTML 5' },
			{ name: 'SCSS' },
		],
		image: '/Project4.jpg',
		github: 'https://github.com/Qw3ko/React-SPA-Workout-App',
		live: '',
	},
	{
		num: '05',
		title: 'Сервис для сообщения о краже велосипедов.',
		description: 'Этот сервис поможет сообщить о краже велосипедов.',
		stack: [
			{ name: 'React' },
			{ name: 'JavaScript' },
			{ name: 'HTML 5' },
			{ name: 'CSS' },
		],
		image: '/Project5.png',
		github: 'https://github.com/Qw3ko/Final-project',
		live: '',
	},
	{
		num: '06',
		title: 'Лектоник.',
		description:
			'Лектоник - это удобная платформа, которая соединяет компании, образовательные учреждения и НКО с профессиональными лекторами, спикерами и тренерами.',
		stack: [
			{ name: 'React' },
			{ name: 'Next.Js' },
			{ name: 'JavaScript' },
			{ name: 'TypeScript' },
			{ name: 'HTML 5' },
			{ name: 'Tailwind CSS' },
		],
		image: '/Project6.png',
		github: '',
		live: 'https://lectonic.ru/',
	},
]

const Work: FC = () => {
	const [project, setProject] = useState(projects[0])
	const handleSlideChange = (swiper: any) => {
		setProject(projects[swiper.activeIndex])
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
		>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row xl:gap-[30px]'>
					<div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
						<div className='flex flex-col gap-[30px]'>
							<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
								{project.num}
							</div>
							<h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
								{project.title}
							</h2>
							<p className='text-white/60'>{project.description}</p>
							<ul className='flex flex-wrap gap-4'>
								{project.stack.map((item, index) => (
									<li key={index} className='text-xl text-accent'>
										{item.name}
										{index !== project.stack.length - 1 && ','}
									</li>
								))}
							</ul>
						</div>

						<div className='border-t border-white/20 mt-8 pt-4 flex items-center gap-4'>
							<Link href={project.github}>
								<TooltipProvider delayDuration={100}>
									<Tooltip>
										<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
											<BsGithub className='text-white text-3xl group-hover:text-accent' />
										</TooltipTrigger>
										<TooltipContent>
											<p>Репозиторий</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</Link>

							<Link href={project.live}>
								<TooltipProvider delayDuration={100}>
									<Tooltip>
										<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
											<BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
										</TooltipTrigger>
										<TooltipContent>
											<p>Онлайн</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</Link>
						</div>
					</div>

					<div className='w-full xl:w-[50%]'>
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className='xl:h-[520px] mb-12'
							onSlideChange={handleSlideChange}
						>
							{projects.map((proj, idx) => (
								<SwiperSlide key={idx} className='w-full'>
									<div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
										<div className='absolute inset-0 bg-black/10 z-10'></div>
										<Image
											src={proj.image}
											fill
											quality={100}
											className='object-cover'
											alt=''
										/>
									</div>
								</SwiperSlide>
							))}

							<WorkSliderButtons
								containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
								btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Work
