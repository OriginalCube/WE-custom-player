import { create } from 'zustand'

const modeInitialValue: { name: boolean; color: boolean } = {
	name: false,
	color: false,
}

type State = {
	mode: { name: boolean; color: boolean }
}

type Action = {
	changeMode: (mode: State['mode']) => void
}

export const useAction = create<State & Action>((set) => ({
	mode: { ...modeInitialValue },

	changeMode: (mode) => set(() => ({ mode: mode })),
}))
