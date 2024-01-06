import { colors } from "./colors"

export const inputStyle = { height: 45 }
export const textStyle = { fontFamily: "MalgunGothic2", justifyContent: "center", fontsize: "4vw", textAlign: "left" }
export const textField = {
    "& .MuiInputBase-root": {
        backgroundColor: "#fff",

        borderRadius: "0.8vw",
    },

    "& .MuiInputLabel-root ": {
        color: "white",
        fontSize: "1vw",
    },
    "& .MuiInputBase-root-MuiOutlinedInput-root": { color: "black" },

    "& .MuiOutlinedInput-input": {
        height: "0.6vw",
    },
}
