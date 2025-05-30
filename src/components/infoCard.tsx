interface TypeInfoCard {
    titre : string,
    textContent : string
}

export const InfoCard = ({titre, textContent}: TypeInfoCard) => {
    return (
        <div className={"d-card-info"}>
            <h3>{titre}</h3>
            <p>{textContent}</p>
        </div>
    );
};
