import {Button} from "./subElement/button.tsx";

interface TypeCardBody {
    titre : string,
    textContent : string,
    reactElement : string,
    knowMore : string
    url : string
}
export const CardBody = ({titre,textContent,reactElement,knowMore,url} : TypeCardBody) => {
    return (
        <div className={"d-card-body"}>
            <div className={"d-side-text"}>
                <h4>{titre}</h4>
                <p>
                    {textContent}
                </p>
                <Button url={url} name={knowMore} />
            </div>
            <div className={"d-Element"}>
                {reactElement}
            </div>
        </div>
    );
};
