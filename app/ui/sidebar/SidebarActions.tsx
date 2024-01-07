import React from 'react'
import { TextInput } from '@/app/ui/Inputs'
import { useCreate } from '@/lib/store/useCreate'

const SidebarActions = () => {
	const trackName = useCreate((state) => state.name)
	const changeName = useCreate((state) => state.changeName)
	return (
		<div className={'h-full w-full p-2'}>
			<TextInput name={trackName} input={changeName} />
		</div>
	)
}

export default SidebarActions
