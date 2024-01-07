'use client'
import React from 'react'
import {
	CheckIcon,
	PencilSquareIcon,
	SwatchIcon,
} from '@heroicons/react/20/solid'
import { ButtonIcons } from '@/app/ui/Buttons'
import { useAction } from '@/lib/store/useAction'
import SidebarActions from '@/app/ui/sidebar/SidebarActions'
import { TextInput } from '@/app/ui/Inputs'

const test = (sample: string) => {
	console.log(sample)
}

const modeActions = {
	files: [<TextInput name={'Name'} input={test} key={0} />],
	colors: [],
}

const Sidebar = () => {
	const mode = useAction((state) => state.mode)
	const changeMode = useAction((state) => state.changeMode)

	const navbarActions = [
		{
			Icon: <PencilSquareIcon />,
			action: () => changeMode('files'),
			name: 'Edit Images & Name',
		},
		{
			Icon: <SwatchIcon />,
			action: () => changeMode('colors'),
			name: 'Edit Colors',
		},
		{
			Icon: <CheckIcon />,
			action: () => console.log('Confirmation'),
			name: 'Confirmation',
		},
	]

	return (
		<div
			className={'flex w-[400px] border-r border-white bg-slate-900 text-white'}
		>
			<nav
				className={
					'flex h-full w-16 flex-col items-center gap-4 border-r border-white py-2'
				}
			>
				{navbarActions.map(({ Icon, action, name }, index: number) => (
					<ButtonIcons Icon={Icon} action={action} name={name} key={index} />
				))}
			</nav>

			<main className={'h-full w-[calc(100%-64px)]'}>
				<SidebarActions data={modeActions[mode]} />
			</main>
		</div>
	)
}

export default Sidebar
