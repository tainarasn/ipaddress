import React from "react"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <div className="Home-Component">
            <div>
                {" "}
                Ícones feitos por{" "}
                <a href="https://www.freepik.com" title="Freepik">
                    {" "}
                    Freepik{" "}
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/br/" title="Flaticon">
                    www.flaticon.com'
                </a>
            </div>
        </div>
    )
}
