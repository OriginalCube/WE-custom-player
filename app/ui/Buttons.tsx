import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

type ButtonIconProps = {
	Icon: React.JSX.Element
	action: () => void
	name: string
}

export const ButtonIcons = ({ Icon, action, name }: ButtonIconProps) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					className={
						'size-10 rounded-md bg-slate-500 p-1 text-white opacity-80'
					}
					onClick={() => action()}
				>
					{Icon}
				</TooltipTrigger>
				<TooltipContent side={'left'}>
					<p className={'text-lg'}>{name}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
