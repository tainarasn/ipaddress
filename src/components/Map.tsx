import { Box } from "@mui/material"
import React, { useEffect, useRef } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { Marker } from "react-leaflet/Marker"
import L, { LatLngExpression } from "leaflet"

interface MapProps {
    search: LatLngExpression
}

export const Map: React.FC<MapProps> = ({ search }) => {
    const customIcon = new L.Icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        className: "marker-icon-custom", // Classe para estilização personalizada
    })
    const mapboxToken = "pk.eyJ1IjoibWF6M2tlZSIsImEiOiJjbHIya3Q3dGwxMDR3MmpuZWp5end1c3d0In0.eznBZKe0RcAF_-QiU6iacQ"
    const mapboxStyleId = "maz3kee/clr2lfr7q00v701qr8xk13a4b"
    // Referência para o MapContainer
    const mapRef = useRef<any>(null)

    // Função para atualizar o mapa completo
    const updateMap = (coordinates: LatLngExpression) => {
        if (mapRef.current) {
            // Atualiza o centro do mapa e o zoom
            mapRef.current.setView(coordinates, 12)
        }
    }

    useEffect(() => {
        // Chama a função para atualizar o mapa sempre que 'search' mudar
        updateMap(search)
    }, [search])
    return (
        <Box sx={{ position: "relative", width: "100%", height: "65%", zIndex: 0 }}>
            <MapContainer ref={mapRef} center={search} zoom={6} scrollWheelZoom={true} style={{ height: "100%" }}>
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/${mapboxStyleId}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
                    attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                />
                <Marker position={search} icon={customIcon} />
            </MapContainer>
        </Box>
    )
}
