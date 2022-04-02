import { useContext, useState } from "react";
import { createContext } from "react";

const sidebarContext=createContext({sidebarToggle:false})

const Sidebar =({children})=>{
    const [toggleState,setToggleState]=useState(true)
    return <sidebarContext.Provider value={{sidebarToggle:toggleState,setToggleState}}>{children}</sidebarContext.Provider>

}

const useSidebar=()=>useContext(sidebarContext)

export {Sidebar,useSidebar}