import React, {useState,useEffect} from 'react';
import './RulesPage.scss';
import Rule from "./RuleItem/RuleItem";
import { faImages, faLifeRing, faAward } from '@fortawesome/free-solid-svg-icons';
import {Transition} from "react-transition-group";

const rules = [
    {'title': 'Goal', 'img':{faImages},'description': 'You have 3 minutes to mark as many slightly different "pixels" as you can spot. There is exactly 5 transformed pixels at each painting.'},
    {'title': 'Difficulty', 'img':{faLifeRing}, 'description': 'Feel free to use hint if you need, but notice that each used hint will subtract 5 from your total score. You always can go to the next image.'},
    {'title': 'Score', 'img':{faAward}, 'description': 'You will get 1 point for each spotted pixel. Find all "pixels" at current image and your points will be doubled.'}
];

const RulesPage = () => {
    const [showElements,setShowElements] = useState({
        elementsAreVisible: false
    });

    const transitionDelay = 0;

    useEffect(() => {
        setShowElements({elementsAreVisible: true})
    }, []);

    return (
        <Transition in={showElements.elementsAreVisible}
                    timeout={100}>
            {(state) => (
                <div className="rulesContainer">
                    {rules.map((rule,index) => (
                        <Rule key={rule.title}
                              heading={rule.title}
                              text={rule.description}
                              image={rule.img} style={{transition: `all .5s ${transitionDelay + index/3}s`,transform: state === 'entered' ? 'translateY(0)' : 'translateY(100%)',opacity: state === 'entered' ? 1 : 0}}/>)
                    )}
                </div>
            )}
        </Transition>
    );
};

export default RulesPage;
