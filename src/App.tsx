import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import MBRoute from '@router/index'
import MBTabbar from './components/MBTabbar'

function App(props) {
	const navigate = useNavigate()
	const onTabChangeHandler = (name)=>{
		navigate('/'+name)
	}
  return (
    <div className="App">
    	<MBRoute />
			<MBTabbar onChangeHandler={onTabChangeHandler}/>
    </div>
  );
}


export default App;
