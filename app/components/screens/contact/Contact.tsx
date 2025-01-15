'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Textarea } from '../../ui/textarea'

const info = [
	{
		icon: <FaPhoneAlt />,
		title: 'Телефон',
		description: '+7 (982) 963-29-75',
	},
	{
		icon: <FaEnvelope />,
		title: 'Email',
		description: 'bannikov.arseniyy@rambler.ru',
	},
	{
		icon: <FaMapMarkedAlt />,
		title: 'Адрес',
		description: 'Россия, Тюменская область, г. Тюмень',
	},
]

const Contact: FC = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className='py-6'
		>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row gap-[30px]'>
					<div className='xl:w-[54%] order-2 xl:order-none'>
						<form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
							<h3 className='text-4xl text-accent'>Давайте сотрудничать</h3>
							<p className='text-white/60'>
								Я всегда готов к новым задачам и испытаниям, не боясь возможных
								трудностей. Для меня приоритет выполнить работу качественно и в
								срок.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<Input type='firstname' placeholder='Имя' />
								<Input type='lastname' placeholder='Фамилия' />
								<Input type='email' placeholder='Email' />
								<Input type='phone' placeholder='Телефон' />
							</div>
							<Textarea
								className='h-[200px]'
								placeholder='Оставьте комментарий.'
							/>
							<Button size='md' className='max-w-56'>
								Отправить сообщение
							</Button>
						</form>
					</div>
					<div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
						<ul className='flex flex-col gap-10'>
							{info.map((item, index) => {
								return (
									<li key={index} className='flex items-center gap-6'>
										<div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
											<div className='text-[28px]'>{item.icon}</div>
										</div>
										<div className='flex-1'>
											<p className='text-white/60'>{item.title}</p>
											<h3 className='text-xl'>{item.description}</h3>
										</div>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Contact
