'use client'
import { Button, Tooltip } from 'antd'
import {
	BgColorsOutlined,
	CheckCircleOutlined,
	FileSyncOutlined,
} from '@ant-design/icons'
import { useCreate } from '@/app/lib/store/useCreate'
import { useEffect } from 'react'

const SidebarActions = ({
	name,
	action,
	icon,
}: {
	name: string
	action: any
	icon: any
}) => {
	return (
		<Tooltip title={name} placement={'right'}>
			<Button
				type={'default'}
				onClick={action}
				icon={icon}
				size={'large'}
				className={'border-slate-800 bg-indigo-400 text-slate-800'}
			/>
		</Tooltip>
	)
}

const Sidebar = ({ layout }: any) => {
	const { Sider } = layout
	const editor = useCreate((state) => state.editor)
	const setEditor = useCreate((state) => state.setEditor)
	useEffect(() => {
		console.log(editor)
	}, [])
	const actionList = [
		{
			name: 'Edit Colors',
			action: () => {
				setEditor()
			},
			icon: <BgColorsOutlined />,
		},
		{
			name: 'Edit Files',
			action: () => {},
			icon: <FileSyncOutlined />,
		},
		{
			name: 'Confirmation',
			action: () => {},
			icon: <CheckCircleOutlined />,
		},
	]
	return (
		<Sider width={80}>
			<div
				className={'flex flex-col items-center justify-center gap-2 text-2xl'}
			>
				{actionList.map(({ name, action, icon }, index) => (
					<SidebarActions name={name} action={action} icon={icon} key={index} />
				))}
			</div>
		</Sider>
	)
}

export default Sidebar
