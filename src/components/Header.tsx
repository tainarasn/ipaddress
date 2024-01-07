import { Box, IconButton, InputAdornment, TextField } from "@mui/material"
import React from "react"
import { textField } from "../styles/input"
import { Logo } from "./Logo"
import { Circuit } from "./Circuit"
import SearchIcon from "@mui/icons-material/Search"

interface HeaderProps {
    formik: any
}

export const Header: React.FC<HeaderProps> = ({ formik }) => {
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
            <h2 style={{ color: "#fff", position: "fixed", top: "2vw", zIndex: 1 }}>IP ADDRESS</h2>
            <Circuit />
            <Box sx={{ position: "fixed", right: "5vw", top: "-3vw" }}>
                <Logo />
            </Box>
            <TextField
                sx={{ ...textField, width: "35%", position: "fixed", top: "6vw", p: "0" }}
                placeholder="Ip Address"
                name="ip"
                value={formik.values.ip}
                onChange={formik.handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                type="submit"
                                aria-label="search"
                                edge="end"
                                sx={{ borderRadius: "0vw 0.8vw 0.8vw  0" }}
                                onClick={formik.onSubmit}
                            >
                                <SearchIcon sx={{ color: "#fff" }} />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}
