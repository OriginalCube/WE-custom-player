'use client'
import React from 'react'
import { PencilSquareIcon } from '@heroicons/react/20/solid'
import { SwatchIcon } from '@heroicons/react/20/solid'
import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import { ButtonIcons } from '@/app/ui/Buttons'

export default function Layout({ children }: { children: React.ReactNode }) {
	const navbarActions = [
		{
			Icon: <PencilSquareIcon />,
			action: () => console.log('pencil'),
			name: 'Edit Images & Name',
		},
		{
			Icon: <SwatchIcon />,
			action: () => console.log('Swatch'),
			name: 'Edit Colors',
		},
		{
			Icon: <CheckBadgeIcon />,
			action: () => console.log('Confirmation'),
			name: 'Confirmation',
		},
	]

	return (
		<div className={'h-screen w-full'}>
			<header
				className={'h-[64px] w-full border-b border-white bg-slate-900'}
			></header>

			<section className={'flex min-h-[calc(100%-64px)] w-full'}>
				<nav className={'w-[350px] border-r border-white bg-slate-900'}>
					<div
						className={
							'flex h-full w-16 flex-col items-center gap-2 border-r border-white py-2'
						}
					>
						{navbarActions.map(({ Icon, action, name }, index: number) => (
							<ButtonIcons
								Icon={Icon}
								action={action}
								name={name}
								key={index}
							/>
						))}
					</div>
				</nav>

				<main className={'h-full w-full'}>{children}</main>
			</section>
		</div>
	)
}
