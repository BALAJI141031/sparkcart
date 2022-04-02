import { BrowserRouter as Router } from 'react-router-dom';
import {Sidebar} from '../contexts/sidebarContext'
import {FilterProvider} from '../contexts/filterContext'

const Providers=({children})=>{
    return <Router>
    <FilterProvider>
        <Sidebar>{children}</Sidebar>
    </FilterProvider>
    </Router>
}

export {Providers}