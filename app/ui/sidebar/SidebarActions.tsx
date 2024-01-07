import React from 'react'

const SidebarActions = ({ data }: any) => {
	return (
		<div className={'h-full w-full p-2'}>
			{data.map((element: React.JSX.Element, index: number) => (
				<React.Fragment key={index}>{element}</React.Fragment>
			))}
		</div>
	)
}

export default SidebarActions
