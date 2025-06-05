import {Header} from "../../components/header.tsx";
import {CardBody} from "../../components/cardBody.tsx";
import {InfoCard} from "../../components/infoCard.tsx";
import {Footer} from "../../components/footer.tsx";
import {Encre} from "../../components/encre.tsx";
import photo1 from  "../../assets/photoHeader/photographie.jpeg"
import lens from "../../assets/services/LeloPng.png"
import {ServicesElement} from "../../components/reactElement/servicesElement.tsx";
import {FormReserve} from "../../components/formReserve.tsx";

export const Photographie = () => {
    const textButton = "Continuer sur whatsapp"
    const contentText = "Un design fort. Une stratégie claire. Un impact réel. Donnez à votre marque la force qu’elle mérite. Nous transformons vos ambitions en résultats concrets. Rejoignez-nous pour créer ensemble ce qui marquera les esprits."
    const titre = "Photographie"
    const images = [
        {
            src : photo1
        }
    ];
    const cardBodies = [
        {
            title : "Photographie",
            textContent : (<>

                <p>
                    Offrir des services de photographie, de vidéographie et de création de
                    contenu qui valorisent l’image de nos clients de manière authentique, créative et impactante.
                    Nous avons pour mission de capturer les instants forts, raconter des histoires visuelles
                    puissantes et
                    produire des contenus engageants qui répondent aux besoins de communication des particuliers.
                </p>
                <p>
                    De la première ébauche à la dernière touche, chaque projet est une collaboration sur mesure,
                    pensée pour révéler l’essence de votre marque. Nous vous aidons à capter l’attention, à
                    marquer les esprits, et à bâtir une communication qui vous ressemble vraiment.
                </p>
            </>),
            reactElement: <ServicesElement photo={lens}/>,
            knowMore: "",
            url: "#"
        }
    ]

    const cardInfo = [
        {
            titre: "Des services créatifs pour révéler votre potentiel",
            textContent: 'Nos valeurs sont le moteur de votre réussite. En les incarnant à chaque étape, nous créons des bases solides qui propulsent votre entreprise vers de nouveaux sommets, en mettant l\'accent sur l\'authenticité, la confiance et l\'innovation.',
        }
    ]


    return (
        <div className={"d-container"}>
            <Header images={images} contentText={contentText} textButton={textButton}
                    titre={titre}/>
            <div className={"d-content-all"}>
                <InfoCard titre={cardInfo[0].titre} textContent={cardInfo[0].textContent}/>
                <div className={"--hr"}></div>
                <div className={"d-card-bodies"}>
                    {
                        cardBodies.map((cardBody) =>
                            <CardBody titre={cardBody.title} textContent={cardBody.textContent}
                                      reactElement={cardBody.reactElement} knowMore={cardBody.knowMore}
                                      url={cardBody.url}/>)
                    }
                </div>
                <div className={"--hr"}></div>

                <div className={"d-form"}>
                    <FormReserve/>
                </div>
                <Footer/>
            </div>
            <Encre/>
        </div>
    );
};
