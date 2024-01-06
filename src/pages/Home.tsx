import { Box } from "@mui/material"
import React from "react"
import { Header } from "../components/Header"
import { Map } from "../components/Map"
import { Footer } from "../components/Footer"
import { BoxHeader } from "../components/BoxHeader"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <Box sx={{ position: "relative", width: "100%", height: "100%", flexDirection: "column", alignItems: "center" }}>
            <Header />
            <BoxHeader />
            <Map />
            <Footer />
        </Box>
    )
}
