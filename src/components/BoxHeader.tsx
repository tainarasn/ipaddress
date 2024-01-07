import { Box } from "@mui/material"
import React from "react"

interface BoxHeaderProps {
    data: any
}

const title_style = { fontSize: "0.7vw", letterSpacing: "0.15vw" }

const content_style = { fontSize: "1.5vw", color: "#fff" }

export const BoxHeader: React.FC<BoxHeaderProps> = ({ data }) => {
    console.log(data)
    return (
        <Box
            sx={{
                position: "absolute",
                top: "25vh",
                width: "70%",
                height: "fit-content",
                minHeight: "15%",
                zIndex: 1,
                bgcolor: "#545051",
                borderRadius: "1.5vw",
                flexDirection: "row",
                p: "2vw",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ borderRight: "1px solid gray", width: "20%" }}>
                <p style={title_style}>IP ADDRESS</p>
                <p style={content_style}>{data.ip}</p>
            </Box>
            <Box sx={{ borderRight: "1px solid gray", width: "30%" }}>
                <p style={title_style}>LOCATION</p>
                <p style={content_style}>
                    {data?.location?.city}
                    {data.location.region && ","} {data?.location?.region} {data.location.country && ","}{" "}
                    {data?.location?.country} {data.location.postalCode && "-"} {data?.location?.postalCode}
                </p>
            </Box>
            <Box sx={{ borderRight: "1px solid gray", width: "20%" }}>
                <p style={title_style}>TIMEZONE</p>
                <p style={content_style}>
                    {data.location.timezone && "UTC"}
                    {data?.location?.timezone}
                </p>
            </Box>
            <Box sx={{ width: "20%" }}>
                <p style={title_style}>ISP</p>
                <p style={content_style}>{data?.isp}</p>
            </Box>
        </Box>
    )
}
