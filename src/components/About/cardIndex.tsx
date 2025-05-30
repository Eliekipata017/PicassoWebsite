
interface PropsCardIndex {
    index : string,
    textContent : string
}

export const CardIndex = ({index, textContent} : PropsCardIndex) => {
    return (
        <div className={"d-card-index"}>
            <h3>{index}</h3>
            <p>{textContent}</p>
        </div>
    );
};
