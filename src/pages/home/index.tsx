import React from 'react'
import MBTabs from '@components/MBTabs'
import {useSelector,useDispatch} from 'react-redux'
import {toChangeChecked} from '@store/actions'


export default function HomePage() {
	const dispatch = useDispatch()
	const tabsModel = useSelector((state)=>state['frontEndReducer'])
	const onTabsClickHandler =(keys)=>{
		dispatch(toChangeChecked(keys))
	}
	return (
		<div>
			<MBTabs model={tabsModel} onClickHandler={onTabsClickHandler} />
		</div>
	)
}