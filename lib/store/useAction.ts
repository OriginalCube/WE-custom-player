import { create } from 'zustand'

type State = {
	mode: 'files' | 'colors'
}

type Action = {
	changeMode: (mode: State['mode']) => void
}

export const useAction = create<State & Action>((set) => ({
	mode: 'files',

	changeMode: (mode) => set(() => ({ mode: mode })),
}))
