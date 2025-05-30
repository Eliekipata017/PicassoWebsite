import {NavBar} from "./subElement/navBar.tsx";
import {Button} from "./subElement/button.tsx";

interface HeaderProps {
    images : {
        src : string
    }[],
    titre? : string,
    slogan? : string,
    contentText : string,
    textButton : string
}

const Links  = [
    {
        name : "Accueil",
        url : "#"
    },
    {
        name : "A propos",
        url : "#"
    },
    {
        name : "Nos services",
        url : "#",
        tabsItems : [
            {
                name : "photograpgie",
                url : "#"
            },
            {
                name : "photograpgie",
                url : "#"
            },
            {
                name : "photograpgie",
                url : "#"
            }
        ]
    }
]

export const Header = ({ images, titre,slogan, contentText, textButton}: HeaderProps) => {
    return (
        <div className={"d-haeder"}>
            <NavBar links={Links} />
            {
                images.length > 1 ?
                    <div className={"d-carrousell"}>
                        {
                            images.map((img) => (
                                <div className={"d-item"}>
                                    <img src={img.src} alt="" />
                                </div>
                            ))
                        }
                        {
                            images.map(() => <div className={"round"}></div>)
                        }
                    </div>
                :
                    <div className={"d-img"}>
                        {
                            images.map((img) => <img src={img.src} alt=""/> )
                        }
                    </div>
            }
            <div className={"d-texts"}>
                {slogan && <h3>{slogan}</h3>}
                {titre && <h3>{titre}</h3>}
                {contentText}
                <Button url={"#"} name={textButton}/>
            </div>
        </div>
    );
};
