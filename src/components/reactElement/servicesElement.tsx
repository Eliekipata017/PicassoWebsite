import lens from "../../assets/services/LeloPng.png"

interface TypeInterface {
    className? : string
}
export const Mission = ({className} : TypeInterface) => {
    return (
        <div className={`${className && className} d-Element`}>
            <div className={""}>

            </div>
            <div className={"d-image"}>
                <img src={lens} alt=""/>
            </div>
        </div>
    );
};
