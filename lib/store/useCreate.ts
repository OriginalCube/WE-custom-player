import { create } from 'zustand'

type SongDetails = {
	name: string
	filename?: string // Optional to save memory
	audioSrc?: string
	background: string
	foreground: string
	textColor: string
}

type State = {
	name: string
	songDetails: SongDetails
	songList: Array<SongDetails>
}

type Action = {
	changeName: (name: State['name']) => void
	changeSongDetail: (model: keyof SongDetails, value: string) => void
}

const initialSongDetails: SongDetails = {
	name: 'Guitar, Loneliness and Blue Planet',
	background: '#4c2633',
	foreground: '#ed709a',
	textColor: '#ed709a',
}

export const useCreate = create<State & Action>((set) => ({
	name: '',
	songDetails: { ...initialSongDetails },
	songList: [],
	changeName: (name) => set(() => ({ name: name })),
	changeSongDetail: (model, value) =>
		set((state) => ({ songDetails: { ...state.songDetails, name: value } })),
}))
