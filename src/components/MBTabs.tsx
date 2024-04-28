import { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import Styles from "./MBTabs.module.scss";
import { Tabs, List, Cell, Checkbox } from "react-vant";

interface ModelType {
	title: string;
	children: { title: string; checked: boolean }[];
}
interface PropType {
	onClickHandler?: (keys: string[]) => void;
	model?: ModelType[];
}
const MBTabs = (props: PropType) => {

	const onClickHandler = (keys)=>{
		props.onClickHandler!(keys)
	}
	return (
		<div className={Styles.MBTabs}>
			<div className={Styles.MBTabsBox}>
				<Tabs
					swipeable={true}
					sticky={true}
					titleInactiveColor="#666"
					titleActiveColor="#cc0000"
					lineHeight="3px"
					color="#cc0000"
					border={true}
				>
					{props.model!.map((m, index) => {
						return (
							<Tabs.TabPane key={index} title={m.title}>
								{m.children &&
									m.children.map(({ title, checked }, i) => (
										<Cell
											key={i}
											title={title}
											center
											titleStyle={{
												color: "#333",
												textDecoration: checked ? "line-through" : "none",
											}}
											onClick={()=>{
												onClickHandler([m.title,title])
											}}
										></Cell>
									))}
							</Tabs.TabPane>
						);
					})}
				</Tabs>
			</div>
		</div>
	);
};

export default MBTabs;
