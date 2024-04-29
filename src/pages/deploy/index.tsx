import { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Styles from "./index.module.scss";
import MBTabsLayouts from "@layouts/MBTabsLayouts";
import { toChangeCheckedDeploy } from "@store/actions";

const Index = () => {
	const dispatch = useDispatch();
	const tabsModel = useSelector((state) => state["deployReducer"]);
	const onTabsClickHandler = (keys) => {
		dispatch(toChangeCheckedDeploy(keys));
	};
	const onNavBarsRightHandler = () => {
		localStorage.removeItem("deploy");
		window.location.reload();
	};
	return (
		<div className={Styles.index}>
			<div className={Styles.indexBox}>
				<MBTabsLayouts
					model={tabsModel}
					onTabsClickHandler={onTabsClickHandler}
					onNavBarsRightHandler={onNavBarsRightHandler}
				/>
			</div>
		</div>
	);
};

export default Index;
