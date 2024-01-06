import { Button } from '@/components/ui/Button'
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
				<TooltipTrigger>
					<Button
						className={'size-10 bg-slate-500 p-1'}
						size={'icon'}
						onClick={() => action()}
					>
						{Icon}
					</Button>
					<TooltipContent side={'right'}>
						<p className={'text-lg'}>{name}</p>
					</TooltipContent>
				</TooltipTrigger>
			</Tooltip>
		</TooltipProvider>
	)
}
