import React from 'react'
import { Input } from '@/components/ui/input'
import { ColorPicker } from 'antd'

type BasicInputType = {
	name: string
	input: (input: string | Object) => void
}

export const TextInput = ({ name, input }: BasicInputType) => {
	return (
		<div className={''}>
			<p className={'my-1 w-full text-base'}>{name}</p>
			<Input onChange={(e) => input(e.target.value)} />
		</div>
	)
}

export const ColorInput = ({ name, input }: BasicInputType) => {
	return (
		<div className={'flex items-center gap-1 py-2'}>
			<ColorPicker onChange={(Color) => input(Color)} />
			<p className={'mx-1 text-base'}>{name}</p>
		</div>
	)
}
