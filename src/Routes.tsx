import React from "react"
import { Route, Routes as Router } from "react-router-dom"
import { Home } from "./pages/Home"
interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <Router>
            <Route path="ipaddress/" element={<Home />} />
        </Router>
    )
}
