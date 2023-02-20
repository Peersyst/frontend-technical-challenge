import { FunctionComponent, useEffect } from 'react'
import {Routes, Route } from 'react-router'
import { useNavigate } from 'react-router-dom'
import AppLayout from '../components/Layout'
import { DEFAULT_ADDRESS } from '../constans/constans'
import Explorer from '../pages/Explorer'

/**
 * Router component using react-router v6
 * 
 * @returns AppRouter component
 */

const AppRouter: FunctionComponent = () => {

    /**
     * Default address to be used when no address is provided in the url
     */

    let defaultId = DEFAULT_ADDRESS;
    
    const navigate = useNavigate();

    /**
     * Check if default address is set in local storage
     */
    useEffect(() => {
        if(localStorage.getItem('default_address')){
            defaultId = localStorage.getItem('default_address')!;
        }
    }, [])

    return (
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<NavigateToDefault navigate={navigate} defaultId={defaultId} />} />
                <Route path='/:id' element={<Explorer />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;

/**
 * Navigate to default address if no address is provided in the url
 */
const NavigateToDefault: FunctionComponent<{ navigate: any, defaultId: string }> = ({ navigate, defaultId }) => {
    useEffect(() => {
      navigate(`/${defaultId}`);
    }, [navigate, defaultId]);
  
    return null;
};