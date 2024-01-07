import { Box } from "@mui/material"
import React from "react"

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "5%",
                fontFamily: "Roboto",
                fontSize: "0.7vw",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "0.1vw",
                zIndex: 1,
                color: "#fff",
                flexDirection: "row",
                gap: "0.5vw",
            }}
        >
            {" "}
            <p>
                Icons made by{" "}
                <a href="https://www.freepik.com" title="Freepik">
                    {" "}
                    Freepik.
                </a>
            </p>
            <p>SVG line drawing animation made by Julian Garnier.</p>
            Challenge by Frontend Mentor. Coded by Tainara Novaes. 2024.
        </Box>
    )
}
