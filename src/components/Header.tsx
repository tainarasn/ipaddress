import { Box, TextField } from "@mui/material"
import React from "react"
import { textField } from "../styles/input"
import { Logo } from "./Logo"
import { Circuit } from "./Circuit"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "35%",
                backgroundColor: "#d54f07",
                // backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Circuit />
            <Box sx={{ position: "fixed", right: "5vw", top: "-3vw" }}>
                <Logo />
            </Box>
            <h3 style={{ color: "#fff" }}>IP Address</h3>
            <TextField
                sx={{ ...textField, width: "35%", position: "fixed", top: "6vw" }}
                placeholder="Ip Address"
                name="ip"
                value={""}
                onChange={() => {}}
            />
        </Box>
    )
}
