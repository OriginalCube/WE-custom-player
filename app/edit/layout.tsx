'use client'
import React from 'react'
import { Layout as MainLayout } from 'antd'
import Sidebar from '@/app/ui/Sidebar'
import Navbar from '@/app/ui/Navbar'
export default function Layout({ children }: { children: React.ReactNode }) {
	const { Content } = MainLayout
	return (
		<MainLayout className={'min-w-screen'}>
			<Navbar layout={MainLayout} />
			<Content>
				<MainLayout>
					<Sidebar layout={MainLayout} />
					<div className={'min-h-screen w-full'}>{children}</div>
				</MainLayout>
			</Content>
		</MainLayout>
	)
}
