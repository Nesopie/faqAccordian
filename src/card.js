import woman from './images/illustration-woman-online-mobile.svg'
import shadow from './images/bg-pattern-mobile.svg';
import arrow from './images/icon-arrow-down.svg';
import uniqid from 'uniqid';
import { useState, useEffect } from 'react';

const CardItem = (props) => {
    return (
        <div className="itemContainer" onClick={props.handleChange}>
            <div className="titleWrapper">
                <div className="itemTitle">
                    {props.title}
                </div>
                <div className="arrow">
                    <img src={arrow} alt="arrow"></img>
                </div>
            </div>
            <div className="itemDesc">
                {props.desc}
            </div>
            <hr></hr>
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

    let [open, setOpen] = useState(false);
    let [displayIndex, setDisplayIndex] = useState(null);

    function handleChange(e) {
        let title = e.target;
        let index = getIndex(title);
        if((index === displayIndex) || (displayIndex === null) || (index !== displayIndex && !open))
            setOpen(!open);
        console.log(index, displayIndex);
        setDisplayIndex(index);
    }

    useEffect(() => {
        let cards = document.querySelectorAll(".itemContainer");
        console.log(displayIndex, open);
        console.log("-----------");
        if(!displayIndex && displayIndex !== 0) {
            return;
        }else {
            for(let i = 0; i < cards.length; i++) {
                let title = cards[i].firstChild;
                let desc = title.nextSibling;
                let arrow = title.lastChild;
                if(i === displayIndex && !open) {
                    title.setAttribute("style","font-weight: 400");
                    desc.setAttribute("style", "display: none");
                }else if(i === displayIndex && open) {
                    title.setAttribute("style","font-weight: 700");
                    desc.setAttribute("style","display: inline");
                    arrow.setAttribute("style","transform: rotateX(180deg)");
                }else if(i !== displayIndex && open) {
                    desc.setAttribute("style","display: none");
                }
            }
        }
    },[displayIndex,open]);

    function getIndex(node) {
        let i = 0;
        while((node = node.previousSibling) != null) {
            i++;
        }
        return i;
    }

    return (
        <div className="container">
            <div className="imgContainer">
                <img src={woman} alt="woman" className="cardIcon"/>
                <img src={shadow} alt="shdow" className="cardIcon2"/>
            </div>
            <div className="wrapper">
                <div className="faq">FAQ</div>
                <div className="cardContainer">
                    {cardItems.map((cardItem) =>
                        <CardItem title={cardItem.title} desc={cardItem.desc} handleChange={handleChange} key={uniqid()}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardContainer;
