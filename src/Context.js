import React, { createContext, useContext } from "react";

const AppContext=createContext()
const AppProvider=(({children})=>{
    <AppContext.Provider value='lisrs'>
     {children}
    </AppContext.Provider>
})

const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}