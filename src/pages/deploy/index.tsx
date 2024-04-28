import { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Styles from "./index.module.scss";
import MBTabsLayouts from "@layouts/MBTabsLayouts";
import { toChangeCheckedBackEnd } from "@store/actions";

const Index = () => {
	const dispatch = useDispatch();
	const tabsModel = useSelector((state) => state["backEndReducer"]);
	const onTabsClickHandler = (keys) => {
		dispatch(toChangeCheckedBackEnd(keys));
	};
	const onNavBarsRightHandler = () => {
		localStorage.removeItem("backEnd");
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
