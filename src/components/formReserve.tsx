export const FormReserve = () => {
    return (
        <form action={""}>
            <div className={"row-double"}>
                <input type="text" placeholder={"Nom"}/>
                <input type="text" placeholder={"Prenom"}/>
            </div>
            <div className={"row-double"}>
                <input type="text" placeholder={"Email"}/>
                <input type="text" placeholder={"N° de telephone"}/>
            </div>
            <div className={"row"}>
                <select name="" id="">
                    <option value="">Selectionner votre activité</option>
                </select>
            </div>
            <div className={"row-double"}>
                <div className={"d-input"}>
                    <label htmlFor="">Date de debut</label>
                    <input type="date"/>
                </div>
                <div className={"d-input"}>
                    <label htmlFor="">Heure de debut</label>
                    <input type="date"/>
                </div>
            </div>
            <div className={"row-double"}>
                <div className={"d-input"}>
                    <label htmlFor="">Date de Fin</label>
                    <input type="date"/>
                </div>
                <div className={"d-input"}>
                    <label htmlFor="">Heure de fin</label>
                    <input type="date"/>
                </div>
            </div>
            <div className={"row"}>
                <input type={"text" } placeholder={"Lieu de production"}/>
            </div>
            <div className={"row"}>
                <textarea name="" placeholder={"Commentaire"}></textarea>
            </div>
            <input type="submit" />
        </form>
    );
};
