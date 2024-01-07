'use client'
import React from 'react'
import Sidebar from '@/app/ui/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={'h-screen w-full'}>
			<header
				className={'h-[64px] w-full border-b border-white bg-slate-900'}
			></header>

			<section className={'flex min-h-[calc(100%-64px)] w-full'}>
				<Sidebar />
				<main className={'h-full w-full'}>{children}</main>
			</section>
		</div>
	)
}
