import { createContext, useReducer } from "react";
import AlertReducer from "../../context/alert/AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {

    const initialState = {
        alert: {}
    }

    const [{ alert }, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (msg, type) => {
        dispatch({
            type: "SET_ALERT",
            payload: { msg, type }
        })

        setTimeout(() => dispatch({
            type: "CLEAR_ALERT"
        }), 2000);
    }

    return <AlertContext.Provider value={{
        alert,
        setAlert,
    }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext;