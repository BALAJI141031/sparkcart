import { BrowserRouter as Router } from 'react-router-dom';
import {Sidebar} from '../contexts/sidebar-context'
import {FilterProvider} from '../contexts/filter-context'

const Providers=({children})=>{
    return <Router>
    <FilterProvider>
        <Sidebar>{children}</Sidebar>
    </FilterProvider>
    </Router>
}

export {Providers}