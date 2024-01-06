import "./App.css"
import { Providers } from "./Providers"
import { Snackbar } from "@mui/material"
import "@mantine/core/styles.css"
import { Routes } from "./Routes"

function App() {
    return (
        <Providers>
            <Routes />
            <Snackbar />
        </Providers>
    )
}

export default App
