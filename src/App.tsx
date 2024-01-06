import "./App.css"
import { Providers } from "./Providers"
import { Routes } from "react-router-dom"
import { Snackbar } from "@mui/material"

function App() {
    return (
        <Providers>
            <Routes />git init
            <Snackbar />
        </Providers>
    )
}

export default App
