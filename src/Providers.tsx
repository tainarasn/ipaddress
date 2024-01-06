import { MantineProvider } from "@mantine/core"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"
import { SnackbarProvider } from "burgos-snackbar"
import "@mantine/core/styles.css"
import { useMantineTheme } from "./hooks/useMantineTheme"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mantine_theme = useMantineTheme()
    const mui_theme = useMuiTheme()

    return (
        <BrowserRouter>
            <ThemeProvider theme={mui_theme}>
                <SnackbarProvider>
                    <MantineProvider theme={mantine_theme} defaultColorScheme="dark">
                        {children}
                    </MantineProvider>
                </SnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}
