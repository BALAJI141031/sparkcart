import { BrowserRouter as Router } from 'react-router-dom';
import {Sidebar} from '../contexts/sidebarContext'

const Providers=({children})=>{
    return <Router>
    <Sidebar>{children}</Sidebar>
    </Router>
}

export {Providers}