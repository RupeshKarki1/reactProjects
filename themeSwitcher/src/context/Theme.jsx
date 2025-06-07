import { useContext, createContext } from "react"

export const themeContext = createContext({
    themeMode: 'dark',
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider = themeContext.Provider

export  default function useTheme(){
    return useContext(themeContext)
}

