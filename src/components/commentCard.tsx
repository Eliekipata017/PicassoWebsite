
interface TypeCommentCard {
    img : string,
    nom : string,
    comment : string
}
export const CommentCard = ({img, nom, comment} : TypeCommentCard) => {
    return (
        <div className={"d-comment"}>
            <div className={"img"}>
                <img src={img} />
            </div>
            <div className={"d-content"}>
                <p>
                    {comment}
                </p>
                <span>{nom}</span>
            </div>
        </div>
    );
};
