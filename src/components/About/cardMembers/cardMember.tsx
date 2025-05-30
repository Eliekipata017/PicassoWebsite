
interface PropsCardMember {
    name : string,
    post : string,
    src : string
}
export const CardMember = ({name, post, src} : PropsCardMember) => {
    return (
        <div className={"d-member"}>
            <span className={"d-badge post"}>{post}</span>
            <div className={"d-img"}>
                <img src={src} alt=""/>
            </div>
            <span className={"d-badge nom"}>{name}</span>
        </div>
    );
};
