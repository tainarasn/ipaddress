import { Box, Button } from "@mui/material"
import React, { useState } from "react"
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet"
import { Marker } from "react-leaflet/Marker"
import L, { LatLng, LatLngExpression, LatLngTuple } from "leaflet"

interface MapProps {}

export const Map: React.FC<MapProps> = ({}) => {
    const mapboxToken = "pk.eyJ1IjoibWF6M2tlZSIsImEiOiJjbHIya3Q3dGwxMDR3MmpuZWp5end1c3d0In0.eznBZKe0RcAF_-QiU6iacQ"
    const mapboxStyleId = "maz3kee/clr2lfr7q00v701qr8xk13a4b"
    const [coordinates, setCoordinates] = useState<LatLngTuple[]>([])
    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                setCoordinates([...coordinates, [e.latlng.lat, e.latlng.lng]])
            },
        })
        return null
    }

    return (
        <Box sx={{ position: "relative", width: "100%", height: "65%", zIndex: 0 }}>
            <MapContainer center={[0, 0]} zoom={6} scrollWheelZoom={true} style={{ height: "100%" }}>
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/${mapboxStyleId}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
                    attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                />
                <Marker position={[0, 0]} />

                <MapClickHandler />
            </MapContainer>
        </Box>
    )
}
