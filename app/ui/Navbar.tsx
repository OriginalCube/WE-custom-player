import { CodeOutlined } from '@ant-design/icons'
import { Button } from 'antd'
const Navbar = ({ layout }: any) => {
	const { Header } = layout

	const Links = () => {
		return (
			<Button type={'link'} className={'text-2xl'} size={'large'}>
				Home
			</Button>
		)
	}

	return (
		<Header className={'flex h-16 w-full items-center text-white'}>
			<div className={'flex gap-4'}>
				<CodeOutlined className={'text-4xl'} />
				<p className={'text-3xl font-light'}>Wallpaper Creator</p>
			</div>
			<div className={'flex items-center'}></div>
		</Header>
	)
}

export default Navbar
