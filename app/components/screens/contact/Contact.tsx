'use client'

import emailjs from '@emailjs/browser'
import { motion as Motion } from 'framer-motion'
import { FC, FormEvent, useRef, useState } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Textarea } from '../../ui/textarea'

const info = [
	{ icon: <FaPhoneAlt />, title: 'Телефон', description: '+7 (982) 963-29-75' },
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

const SERVICE_ID =
	process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
const TEMPLATE_ID =
	process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'your_user_id'

const Contact: FC = () => {
	const formRef = useRef<HTMLFormElement>(null)
	const [isSending, setIsSending] = useState(false)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = formRef.current
		if (!form) return

		if (!form.checkValidity()) {
			form.reportValidity()
			return
		}

		setIsSending(true)
		try {
			const result = await emailjs.sendForm(
				SERVICE_ID,
				TEMPLATE_ID,
				formRef.current,
				USER_ID
			)
			console.log('📧 Email sent successfully:', result.text)
			alert('Сообщение успешно отправлено!')
			formRef.current.reset()
		} catch (error) {
			console.error('❌ Email send error:', error)
			alert('Ошибка отправки сообщения. Попробуйте позже.')
		} finally {
			setIsSending(false)
		}
	}

	return (
		<Motion.section
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
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
						>
							<h3 className='text-4xl text-accent'>Давайте сотрудничать</h3>
							<p className='text-white/60'>
								Я всегда готов к новым задачам и испытаниям, не боясь возможных
								трудностей. Для меня приоритет выполнить работу качественно и в
								срок.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<Input name='user_name' placeholder='Имя' required />
								<Input name='user_lastname' placeholder='Фамилия' required />
								<Input
									name='user_email'
									placeholder='Email или Телеграм'
									required
								/>
								<Input
									name='user_phone'
									type='tel'
									placeholder='Телефон'
									required
								/>
							</div>
							<Textarea
								name='message'
								className='h-[200px]'
								placeholder='Оставьте комментарий.'
							/>
							<Button
								type='submit'
								size='md'
								className='max-w-56 disabled:opacity-50 disabled:cursor-not-allowed'
								disabled={isSending}
							>
								{isSending ? 'Отправка...' : 'Отправить сообщение'}
							</Button>
						</form>
					</div>
					<div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
						<ul className='flex flex-col gap-10'>
							{info.map((item, idx) => (
								<li key={idx} className='flex items-center gap-6'>
									<div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
										<div className='text-[28px]'>{item.icon}</div>
									</div>
									<div className='flex-1'>
										<p className='text-white/60'>{item.title}</p>
										<h3 className='text-xl'>{item.description}</h3>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Motion.section>
	)
}

export default Contact
