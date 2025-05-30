import {Link} from "react-router-dom";

interface PropsButton{
    url : string,
    name : string
}
export const Button = ({url, name}: PropsButton) => {
    return (
        <Link to={url} className={"d-button"}>
            <span>{name}</span>
            <span>{"+++"}</span>
        </Link>
    );
};
