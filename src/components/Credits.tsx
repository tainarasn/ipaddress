import React from "react"

interface CreditsProps {}

export const Credits: React.FC<CreditsProps> = ({}) => {
    return (
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
    )
}
