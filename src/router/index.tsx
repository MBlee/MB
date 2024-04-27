import {lazy,Suspense} from 'react'
import {useRoutes, Navigate} from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(()=>import('../pages/home'))
const Login = lazy(()=>import('../pages/login'))

const routes:RouteObject[] = [
	{
		path:'/',
		element: <Navigate to="/home" />
	},{
		path:'/home',
		element: <Home />
	},{
		path:'login',
		element: <Login />
	}
] 

export default function(){
	return (
		<Suspense fallback=''>
			{
				useRoutes(routes)
			}
		</Suspense>
	);
}