import React, { useContext, createContext, useState, useEffect } from "react";

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifications: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const [screenSize, setscreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#03C9D7');
    const [currentMode, setcurrentMode] = useState('Light');
    const [themeSettings, setthemeSettings] = useState(false)

    useEffect(() => {
        // Check localStorage and set the mode if it exists
        const storedMode = localStorage.getItem('themeMode');
        if (storedMode && storedMode !== currentMode) {
            setcurrentMode(storedMode);
        }
    }, [currentMode]);

    const setMode = (e) => {
        setcurrentMode(e.target.value)

        localStorage.setItem('themeMode',e.target.value)

        setthemeSettings(false)
        console.log('Updated Mode:', e.target.value);

    }

    const setColor = (color) => {
        setcurrentColor(color)

        localStorage.setItem("Color",color)
        setthemeSettings(false)
    }

    const handleClick = (clicked) => {
      setisClicked({...initialState, [clicked] : true})
    }
    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setisClicked,
            handleClick,
            screenSize,
            setscreenSize,
            currentColor , currentMode,
            // setcurrentColor , setcurrentMode,
            themeSettings, setthemeSettings,
            setMode, setColor
        }} >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext)