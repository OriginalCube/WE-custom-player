import { create } from 'zustand'
export const useCreate = create((set) => ({
	editor: 'hello',
	setEditor: () =>
		set((state: any) => {
			editor: state.editor
		}),
}))
