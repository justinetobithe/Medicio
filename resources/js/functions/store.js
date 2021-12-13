import { createContext } from "react";

export const AppContext = createContext();

export const initialState = {
    loading: false,
    modal: {
        isShown: false,
        heading: "",
        onHide: () => { },
        data: {}
    }
}