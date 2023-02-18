import { FunctionComponent } from 'react'
import {Routes, Route} from 'react-router'
import AppLayout from '../components/Layout'
import Explorer from '../pages/Explorer'

/**
 * Router component using react-router v6
 * 
 * @returns AppRouter component
 */

const AppRouter: FunctionComponent = () => {
    return (
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path='/' element={<Explorer/>} />
            </Route>
        </Routes>
    )
}

export default AppRouter