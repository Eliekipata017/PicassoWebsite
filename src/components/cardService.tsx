import {ReactElement} from "react";
import {Button} from "./subElement/button.tsx";

interface TypeCardService {
    icone : ReactElement,
    titre : string,
    textContent : string,
    link : string
}

export const CardService = ({icone, titre, textContent, link}: TypeCardService) => {

    return (
        <div className={"d-card-service"}>
            <div className={"d-icone"}>
                {icone}
            </div>
            <h3>{titre}</h3>
            <p>{textContent}</p>
            <Button url={link} name={"En savoir plus"}/>
        </div>
    );
};
