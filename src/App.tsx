import React,{useState,useEffect} from 'react';
import MBRoute from '@router/index'
import MBTabbar from './components/MBTabbar'
function App(props) {
	const onTabChangeHandler = (name)=>{
		console.log(name);
	}
  return (
    <div className="App">
    	<MBRoute />
			<MBTabbar onChangeHandler={onTabChangeHandler}/>
    </div>
  );
}


export default App;
