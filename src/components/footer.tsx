import {Link} from "react-router-dom";

interface PropsFooter {
    title : {
      name : string,
      links : {
          name : string,
          url : string
      }[]
    }[]
}
export const Footer = ({title} : PropsFooter) => {
    return (
        <div className={"d-card-footer"}>
            {
                title.map((item) => (
                    <div className={"d-footer-links"}>
                        <h4>{item.name}</h4>
                        <div className={"d-links-list"}>
                            {
                                item.links.map((link) => (
                                    <Link to={link.url} className={"d-links-list"}>{link.name}</Link>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
