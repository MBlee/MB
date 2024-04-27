import { useState, useReducer, useEffect, useMemo, useCallback } from 'react'
import Styles from './MBTabbar.module.scss'
import {Tabbar} from 'react-vant'
import {FireO,Records,CashBackRecord} from '@react-vant/icons'
interface PropType{
	onChangeHandler:(name:string|number)=>void
}


const tabs = [{
	title:'前端',
	name:'frontEnd',
	icon: FireO
},{
	title:'后端',
	name:'backEnd',
	icon:Records
},{
	title:'部署',
	name:'deploy',
	icon:CashBackRecord
}]

const MBTabbar = (props:PropType) => {

		const onChangeHandler = (name:string|number)=>{
			props.onChangeHandler(name)
		}
    return (
    	<div className={Styles.MBTabbar}>
    		<div className={Styles.MBTabbarBox}>
    			<Tabbar defaultValue='frontEnd' onChange={onChangeHandler} activeColor='rgb(213,0,0'>
    				{
    					tabs.map(({name,icon:Icon,title})=>{
    						return (
    							// @ts-ignore
    							<Tabbar.Item key={name} icon={<Icon />} name={name}>{title}</Tabbar.Item>
    						);
    					})
    				}
    			</Tabbar>
				</div>
			</div>
    )
}

export default MBTabbar;