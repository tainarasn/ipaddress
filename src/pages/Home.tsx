import { Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { Map } from "../components/Map"
import { Footer } from "../components/Footer"
import { BoxHeader } from "../components/BoxHeader"
import { fetchIP } from "../hooks/useIPAddressApi"
import { useFormik } from "formik"
import { LatLngExpression } from "leaflet"
import json from "../tools/api.json"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const [dataIp, setDataIp] = useState(json)
    const [origin, setOrigin] = useState<LatLngExpression>([0, 0])
    const formik = useFormik({
        initialValues: {
            ip: " ",
        },
        onSubmit: async (values) => {
            try {
                const ipData = await fetchIP(values.ip)
                // console.log(ipData.ip)
                setDataIp(ipData)
                setOrigin([ipData.location.lat, ipData.location.lng])
                console.log("Origem", origin)
            } catch (error) {
                console.error("Erro ao obter o IP:", error)
            }
        },
    })
    useEffect(() => {
        formik.handleSubmit()
    }, [])

    return (
        <Box sx={{ position: "relative", width: "100%", height: "100%", flexDirection: "column", alignItems: "center" }}>
            <form onSubmit={formik.handleSubmit}>
                <Header formik={formik} />
            </form>
            <BoxHeader data={dataIp && dataIp} />
            <Map search={origin} />
            <Footer />
        </Box>
    )
}
