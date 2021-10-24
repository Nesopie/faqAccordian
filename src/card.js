import woman from './images/illustration-woman-online-mobile.svg'
import shadow from './images/bg-pattern-mobile.svg';

const CardItem = (props) => {
    return (
        <div className="itemContainer">
            <div className="itemTitle">
                {props.title}
            </div>
            <div className="itemDesc">
                {props.desc}
            </div>
        </div>
    );
}

const CardContainer = (props) => {
    const cardItems = [
        {
            title: "How many team members can I invite?",
            desc: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
        },
        {
            title: "What is the maximum file upload size?",
            desc: "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            title: "How do I reset my password?",
            desc: "Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you."
        },
        {
            title: "Can I cancel my subscription?",
            desc: "Yes! Send us a message and we’ll process your request no questions asked."
        },
        {
            title: "Do you provide additional support?",
            desc: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        }
    ];

    return (
        <div className="container">
            <div className="imgContainer">
                <img src={woman} alt="woman" className="cardIcon"/>
            </div>
            <div className="cardContainer">
                {cardItems.map((cardItem) =>
                    <CardItem title={cardItem.title} desc={cardItem.desc}/>
                )}
            </div>
        </div>
    )
}

export default CardContainer;
