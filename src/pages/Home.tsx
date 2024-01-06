import { Box } from "@mui/material"
import React from "react"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <p style={{ color: "#fff" }}>OPAPO</p>
            <div>
                {" "}
                Ícones feitos por{" "}
                <a href="https://www.freepik.com" title="Freepik">
                    {" "}
                    Freepik{" "}
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/br/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
        </Box>
    )
}
