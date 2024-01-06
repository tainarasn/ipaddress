import { Box } from "@mui/material"
import React from "react"
import { Header } from "../components/Header"
import { Map } from "../components/Map"
import { Footer } from "../components/Footer"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <Box sx={{ position: "relative", width: "100%", height: "100%", flexDirection: "column", alignItems: "center" }}>
            <Header />
            <Box
                sx={{
                    position: "absolute",
                    top: "25vh",
                    width: "70%",
                    height: "18%",
                    zIndex: 1,
                    bgcolor: "#fff",
                    borderRadius: "1.5vw",
                }}
            ></Box>
            <Map />
            <Footer />
        </Box>
    )
}
