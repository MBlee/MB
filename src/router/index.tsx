import {lazy,Suspense} from 'react'
import {useRoutes, Navigate} from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(()=>import('../pages/home'))
const BackEnd = lazy(()=>import('../pages/backEnd'))
const Deploy = lazy(()=>import('../pages/deploy'))

const routes:RouteObject[] = [
	{
		path:'/',
		element: <Navigate to="/frontEnd" />
	},{
		path:'/frontEnd',
		element: <Home />
	},{
		path:'/backEnd',
		element: <BackEnd />
	},{
		path:'/deploy',
		element: <Deploy />
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