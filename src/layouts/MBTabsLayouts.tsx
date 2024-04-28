import { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import Styles from "./MBTabsLayouts.module.scss";
import MBTabs from "@components/MBTabs";
import MBNavBar from "@components/MBNavBar";

interface PropsType {
	model?: any;
	onTabsClickHandler?: (kes: any) => void;
	onNavBarsRightHandler?: () => void;
}
const MBTabsLayouts = (props) => {
	const [counts, setCounts] = useState('');
	useEffect(() => {
		const arr = props.model.reduce((pre, cur) => {
			return [...pre, cur.children.length];
		}, []);

		setCounts(arr.join('/'));
	}, [props.model]);

	const onNavBarsLeftHandler = () => {};
	const onNavBarsRightHandler = () => {
		props.onNavBarsRightHandler();
	};
	const onTabsClickHandler = (keys) => {
		props.onTabsClickHandler(keys);
	};
	return (
		<div className={Styles.MBTabsLayouts}>
			<div className={Styles.MBTabsLayoutsBox}>
				<MBNavBar
					title={counts}
					onClickLeft={onNavBarsLeftHandler}
					onClickRight={onNavBarsRightHandler}
				/>
				<MBTabs model={props.model} onClickHandler={onTabsClickHandler} />
			</div>
		</div>
	);
};

export default MBTabsLayouts;
