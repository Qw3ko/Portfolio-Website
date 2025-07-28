import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import Link, { type LinkProps } from 'next/link'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors',
	{
		variants: {
			variant: {
				default: 'bg-accent text-primary hover:bg-accent-hover',
				primary: 'bg-primary text-white',
				outline:
					'border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary',
			},
			size: {
				default: 'h-[33px] px-6',
				md: 'h-[48px] px-6',
				lg: 'h-[56px] px-8 text-sm uppercase tracking-[2px]',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

type CommonButtonProps = VariantProps<typeof buttonVariants> & {
	asChild?: boolean
	className?: string
	children?: React.ReactNode
	onClick?: React.MouseEventHandler<
		HTMLButtonElement | HTMLAnchorElement | HTMLElement
	>
}

type LinkButtonProps = CommonButtonProps &
	LinkProps & {
		href: string
	}

type NativeButtonProps = CommonButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: undefined
	}

export type ButtonProps = LinkButtonProps | NativeButtonProps

const Button = React.forwardRef<
	HTMLAnchorElement | HTMLButtonElement | HTMLElement,
	ButtonProps
>((props, ref) => {
	const {
		asChild = false,
		variant,
		size,
		className,
		href,
		children,
		onClick,
		...rest
	} = props
	const classes = cn(buttonVariants({ variant, size, className }))

	if (href) {
		const isExternal = /^(https?:)?\/\//.test(href)
		if (isExternal) {
			return (
				<a
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					ref={ref as React.LegacyRef<HTMLAnchorElement>}
					className={classes}
					onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
					{...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
				>
					{children}
				</a>
			)
		} else {
			const {
				href: _href,
				replace,
				scroll,
				shallow,
				passHref,
				prefetch,
				locale,
				...linkProps
			} = rest as LinkProps
			return (
				<Link
					href={href}
					ref={ref as React.LegacyRef<HTMLAnchorElement>}
					className={classes}
					onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
					replace={replace}
					scroll={scroll}
					shallow={shallow}
					passHref={passHref}
					prefetch={prefetch}
					locale={locale}
					{...linkProps}
				>
					{children}
				</Link>
			)
		}
	}

	if (asChild) {
		return (
			<Slot
				ref={ref as React.LegacyRef<HTMLElement>}
				className={classes}
				onClick={onClick}
				{...(rest as React.HTMLAttributes<HTMLElement>)}
			>
				{children}
			</Slot>
		)
	}

	return (
		<button
			ref={ref as React.LegacyRef<HTMLButtonElement>}
			className={classes}
			onClick={onClick}
			{...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{children}
		</button>
	)
})

Button.displayName = 'Button'

export { Button, buttonVariants }
