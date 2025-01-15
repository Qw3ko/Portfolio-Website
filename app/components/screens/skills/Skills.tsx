'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

const skills = [
	{
		num: '01',
		title: 'JavaScript',
		description:
			'Обладаю умеренными знаниями в JS, применяя их в работе. Всегда учусь новому и пополняю багаж своих знаний нововведениями.',
	},
	{
		num: '02',
		title: 'TypeScript',
		description:
			'Имею годовой опыт в использовании типизации и написании интерфейсов и типов. Активно применяю этот язык при написании проектов.',
	},
	{
		num: '03',
		title: 'HTML5 & CSS3',
		description:
			'Обладаю хорошими навыками в адаптивной, сематической и кросс-браузерной верстки. Стараюсь, чтобы проект максимально соответствовал макету.',
	},
	{
		num: '04',
		title: 'CSS-препроцессоры',
		description:
			'Имею хороший опыт в использовании SCSS препроцессора в проектах. Активно изучаю его и готов изучать другие в зависимости от проектов.',
	},
	{
		num: '05',
		title: 'Git & GitHub',
		description:
			'Активно использую систему контроля версии для сохранения своих проектов в облаке. Знаю основные команды для загрузки проекта на облако, слияния и загрузки. Также использовал эту систему при работе в команде.',
	},
	{
		num: '06',
		title: 'React Native',
		description:
			'Имею опыт работы с этой библиотекой 2 года. Всегда изучаю что то новое и активно стараюсь применять это в своих проектах.',
	},
	{
		num: '07',
		title: 'Next.Js',
		description:
			'Активно начал делать свои проекты на этом фреймворке и каждый день изучаю его больше.',
	},
	{
		num: '08',
		title: 'Английский язык',
		description:
			'Обладаю уровнем Intermediate. Способен понимать техническую документацию и разбираться в ней. Также коммуницировать с другими.',
	},
]

const Skills: FC = () => {
	return (
		<section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
					}}
					className='grid grid-cols-1 md:grid-cols-2 gap-[60px] my-20'
				>
					{skills.map((skill, index) => {
						return (
							<div
								key={index}
								className='flex-1 flex flex-col justify-center gap-6 group'
							>
								<div className='w-full flex justify-between items-center'>
									<div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
										{skill.num}
									</div>
								</div>
								<h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
									{skill.title}
								</h2>
								<p className='w-[596px] h-[128px] text-white/60'>
									{skill.description}
								</p>
								<div className='border-b border-white/20 w-full'></div>
							</div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}

export default Skills
