import { Box, SxProps } from "@mui/material"
import React from "react"

interface BoxHeaderProps {}

const title_style = { fontSize: "0.7vw", letterSpacing: "0.15vw" }

const content_style = { fontSize: "1.5vw", color: "#fff" }

export const BoxHeader: React.FC<BoxHeaderProps> = ({}) => {
    return (
        <Box
            sx={{
                position: "absolute",
                top: "25vh",
                width: "70%",
                height: "18%",
                zIndex: 1,
                bgcolor: "#545051",
                borderRadius: "1.5vw",
                flexDirection: "row",
                p: "2vw",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Box sx={{ borderRight: "1px solid gray", width: "20%" }}>
                <p style={title_style}>IP ADDRESS</p>
                <p style={content_style}>192.168.15.81</p>
            </Box>
            <Box sx={{ borderRight: "1px solid gray", width: "20%" }}>
                <p style={title_style}>LOCATION</p>
                <p style={content_style}>192.168.15.81</p>
            </Box>
            <Box sx={{ borderRight: "1px solid gray", width: "20%" }}>
                <p style={title_style}>TIMEZONE</p>
                <p style={content_style}>192.168.15.81</p>
            </Box>
            <Box sx={{ width: "20%" }}>
                <p style={title_style}>ISP</p>
                <p style={content_style}>192.168.15.81</p>
            </Box>
        </Box>
    )
}
