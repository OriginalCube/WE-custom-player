'use client'
import { Image, Button } from 'antd'
import { GithubOutlined, LinkOutlined, PlusOutlined } from '@ant-design/icons'
import Link from 'next/link'
export default function Home() {
	return (
		<main
			className={
				'flex min-h-screen items-center justify-center gap-4 bg-white text-slate-800'
			}
		>
			<div className={'flex w-1/2 flex-col gap-4'}>
				<p className={'text-7xl font-medium '}>Wallpaper Creator v1.0</p>
				<p className={'w-11/12 text-2xl font-light leading-10'}>
					Start creating custom wallpaper now! This is still in a beta version
					so changes or bugs can appear. If those issue occurs please create an
					issue in Github and let me know about it.
				</p>
				<div className={'mt-4 flex items-center justify-evenly'}>
					<a
						target={'_blank'}
						href={'https://github.com/OriginalCube/WE-custom-player'}
					>
						<Button size={'large'} type={'default'} icon={<GithubOutlined />}>
							Contribute
						</Button>
					</a>
					<a
						target={'_blank'}
						href={'https://steamcommunity.com/id/OriginalCube/myworkshopfiles/'}
					>
						<Button size={'large'} type={'default'} icon={<LinkOutlined />}>
							Steam Workshop
						</Button>
					</a>
					<Link key={'edit'} href={'/edit'}>
						<Button
							size={'large'}
							type={'primary'}
							className={'bg-blue-500'}
							icon={<PlusOutlined />}
						>
							Start Creating Now!
						</Button>
					</Link>
				</div>
			</div>
			<Image
				src={'/images/Engine_Logo.gif'}
				alt={''}
				width={600}
				preview={false}
			/>
		</main>
	)
}