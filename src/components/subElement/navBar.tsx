import {Link} from "react-router-dom";

export interface PropsNavBar {
    links : {
        name : string,
        url : string,
        tabsItems? : {
          name : string,
          url : string
        }[]
    }[]
}
export const NavBar = ({links} : PropsNavBar) => {
    return (
        <div className={"d-class"}>
            <h3><span>Picasso</span> design</h3>
            <nav>
                {
                    links.map((link) => (
                        <Link to={`${link.url}`} className={ link.tabsItems &&
                        link.tabsItems?.length > 0 ? "linksItem" : "link"}>
                            <span>{link.name}</span>
                            {link.tabsItems && link.tabsItems?.length > 0 ?
                                <div className={"d-Items"}>
                                    {
                                        link.tabsItems.map((tabsItem) => (
                                            <Link to={tabsItem.url} className={"d-item"}>
                                                {tabsItem.name}
                                            </Link>
                                        ))
                                    }
                                </div>
                                : ""
                            }
                            {link.tabsItems && ">"}
                        </Link>
                    ))
                }
            </nav>
        </div>
    );
};
