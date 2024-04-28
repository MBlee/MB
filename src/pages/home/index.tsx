import React from "react";
import MBTabs from "@components/MBTabs";
import { useSelector, useDispatch } from "react-redux";
import MBTabsLayouts from "@layouts/MBTabsLayouts";

import { toChangeChecked } from "@store/actions";

export default function HomePage() {
	const dispatch = useDispatch();
	const tabsModel = useSelector((state) => state["frontEndReducer"]);
	const onTabsClickHandler = (keys) => {
		dispatch(toChangeChecked(keys));
	};
	const onNavBarsRightHandler = ()=>{
		localStorage.removeItem('frontEnd')
		window.location.reload()
	}
	return (
		<div>
			<MBTabsLayouts
				model={tabsModel}
				onTabsClickHandler={onTabsClickHandler}
				onNavBarsRightHandler={onNavBarsRightHandler}
			/>
		</div>
	);
}
