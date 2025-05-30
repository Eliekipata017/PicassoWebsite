import {CardMember} from "./cardMembers/cardMember.tsx";

interface PropsMembers {
    agents : {
        src : string,
        post : string,
        name : string
    }[]
}
export const CardMembers = ({agents} : PropsMembers) => {
    return (
        <div className={"d-card-members"}>
            {
                agents.map((agent) => (
                    <CardMember src={agent.src} name={agent.name} post={agent.post} />
                ))
            }
            <div className={"d-arrows"}>
                {
                    agents.map(() => (
                        <div className={"d-arrow"}></div>
                    ))
                }
            </div>
        </div>
    );
};
