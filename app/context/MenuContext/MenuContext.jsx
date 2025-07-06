"use client"

import React,{ createContext,useContext,useReducer} from "react"

const initialState = {isMenuOpen:false};

function menuReducer(state,action){
    switch (action.type) {
        case 'TOGGLE_MENU':
            
            return {isMenuOpen:!state.isMenuOpen};
    
        default:
            return state;
    }
}
// Create Context
const MenuContext = createContext();

// provider

export const MenuProvider =({children}) =>{
    const [state,dispatch] = useReducer(menuReducer,initialState);
    const toggleMenu = () => {
        dispatch({type:'TOGGLE_MENU'})};

    return (
        <MenuContext.Provider value={{isMenuOpen:state.isMenuOpen,toggleMenu}}>
            {children}
        </MenuContext.Provider>
    );
}

export const useMenu = () =>useContext(MenuContext);
