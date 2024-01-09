'use client'
import { useCreate } from '@/lib/store/useCreate'

const DisplayZustand = () => {
	const songDetails = useCreate((state) => state.songDetails)
	return <div>{JSON.stringify(songDetails)}</div>
}

const page = () => {
	return (
		<div className={'h-[calc(100%-64px)] w-full bg-slate-900 text-white'}>
			<DisplayZustand />
		</div>
	)
}

export default page
