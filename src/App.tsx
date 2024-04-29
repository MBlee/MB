import React,{useState,useEffect} from 'react';
import {useNavigate,useLocation} from 'react-router-dom'

import MBRoute from '@router/index'
import MBTabbar from './components/MBTabbar'

function App(props) {
	const location = useLocation();
	const navigate = useNavigate()
	const onTabChangeHandler = (name)=>{
		navigate('/'+name)
	}
  return (
    <div className="App">
    	<MBRoute />
			<MBTabbar defaultValue={location.pathname.substring(1)} onChangeHandler={onTabChangeHandler}/>
    </div>
  );
}


export default App;
