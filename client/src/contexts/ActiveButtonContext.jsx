import { createContext, useState } from "react";

const ActiveButtonContext = createContext();

export const ActiveButtonProvider = ({
    children,
}) => {
    const [activeButton, setActiveButton] = useState(0);
    
    const setActiveButtonHandler = (buttonId) => {
        setActiveButton(buttonId);
    };
    
    const values = {
        activeButton,
        setActiveButtonHandler,
    }

    return (
        <ActiveButtonContext.Provider value={values}>
            {children}
        </ActiveButtonContext.Provider>
    );
};

export default ActiveButtonContext;
