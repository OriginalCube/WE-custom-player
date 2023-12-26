'use client'
import React from 'react'
import { Layout as MainLayout } from 'antd'
import Sidebar from '@/app/ui/Sidebar'
export default function Layout({ children }: { children: React.ReactNode }) {
	const { Content } = MainLayout
	return (
		<MainLayout className={'min-w-screen flex'}>
			<Sidebar layout={MainLayout} />
			<Content className={'min-h-screen'}>{children}</Content>
		</MainLayout>
	)
}
