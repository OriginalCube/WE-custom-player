import { create } from 'zustand'

type State = {
	name: string
}

type Action = {
	changeName: (name: State['name']) => void
}

export const useCreate = create<State & Action>((set) => ({
	name: '',
	changeName: (name) => set(() => ({ name: name })),
}))
