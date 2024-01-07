import React from 'react'
import { Input } from '@/components/ui/input'

type TextInputType = {
	name: string
	input: (input: string) => void
}

export const TextInput = ({ name, input }: TextInputType) => {
	return (
		<div className={''}>
			<p className={'my-1 w-full text-base'}>{name}</p>
			<Input onChange={(e) => input(e.target.value)} />
		</div>
	)
}
