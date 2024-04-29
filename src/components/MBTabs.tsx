import {
	useState,
	useReducer,
	useEffect,
	useMemo,
	useCallback,
	Fragment,
} from "react";
import Styles from "./MBTabs.module.scss";
import { Tabs, List, Cell, Checkbox } from "react-vant";
import { Divider } from "react-vant";
interface ModelType {
	title: string;
	children: { title: string; checked: boolean; type?: string }[];
}
interface PropType {
	onClickHandler?: (keys: string[]) => void;
	model?: ModelType[];
}

const count = (m) => {
	let c = 0;
	for (let item of m.children) {
		if (!item.checked) {
			continue;
		}
		c++;
	}
	return c + "/" + m.children.length;
};

const MBTabs = (props: PropType) => {
	const onClickHandler = (keys) => {
		props.onClickHandler!(keys);
	};
	return (
		<div className={Styles.MBTabs}>
			<div className={Styles.MBTabsBox}>
				<Tabs
					swipeable={true}
					sticky
					titleInactiveColor="#666"
					titleActiveColor="#cc0000"
					lineHeight="3px"
					color="#cc0000"
					border={true}
					type="jumbo"
				>
					{props.model!.map((m, index) => {
						return (
							<Tabs.TabPane
								key={index}
								title={`${m.title}`}
								description={count(m)}
							>
								{m.children &&
									m.children.map((mm, i) => (
										<Fragment key={i}>
											<Cell
												title={mm.title}
												center
												titleStyle={{
													color: "#333",
													textDecoration: mm.checked ? "line-through" : "none",
													fontWeight: 600,
													fontSize: "16px",
												}}
												onClick={() => {
													onClickHandler([m.title, mm.title]);
												}}
											></Cell>
											{mm.type ? (
												<>
													<Divider
														style={{
															color: "#3f45ff",
															borderColor: "#ddd",
															margin: "1px",
														}}
													/>
													<Divider
														style={{
															color: "#3f45ff",
															borderColor: "#ddd",
															margin: "1px",
														}}
													/>
												</>
											) : null}
										</Fragment>
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
