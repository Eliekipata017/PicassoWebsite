import {Button} from "./subElement/button.tsx";

interface PropsCardInvite {
    text : string,
    textButton : string,
    url : string
}
export const CardInvite = ({text, textButton, url} : PropsCardInvite) => {
    return (
        <div className={"d-card-invite"}>
            <h3>{text}</h3>
            <Button url={url} name={textButton}/>
        </div>
    );
};
