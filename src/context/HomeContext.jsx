import React, { createContext } from "react";
import data_atv from "../components/Assets/data";
export const HomeContext = createContext(null);
const HomeContextProvider =(props) => {
    const contextValue ={data_atv};
    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>

    )
}
export default HomeContextProvider;