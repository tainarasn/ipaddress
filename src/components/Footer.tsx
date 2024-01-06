import { Box } from "@mui/material"
import React from "react"

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "5%",
                fontFamily: "space",
                fontSize: "0.7vw",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "0.1vw",
                zIndex: 1,
                color: "#fff",
            }}
        >
            {" "}
            Challenge by Frontend Mentor. Coded by Tainara Novaes. 2024.
        </Box>
    )
}
