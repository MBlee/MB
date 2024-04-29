import { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import Styles from "./MBNavBar.module.scss";
import { NavBar } from "react-vant";
import {Clear} from '@react-vant/icons'
interface PropsType{
	title: number[]
	onClickLeft?:()=>void
	onClickRight?:()=>void
	onClickCenter?:()=>void
}
const MBNavBar = (props:PropsType) => {

	return (
		<div className={Styles.MBNavBar}>
			<div className={Styles.MBNavBarBox}>
				<NavBar
					fixed placeholder
					title={<><span className={Styles.checkedCount}>{props.title[0]}</span><span className={Styles.totalCount}>/{props.title[1]}</span></>}
					leftText=""
					leftArrow=''
					// @ts-ignore
					rightText={<Clear  />}
					onClickLeft={() => {props.onClickLeft!()}}
					onClickRight={() => {props.onClickRight!()}}
				/>
			</div>
		</div>
	);
};

export default MBNavBar;
