import React, {useState, useEffect, useCallback} from 'react'
import Button from './Button';


const Fact = (props) => {
    const [fact, setFact] = useState('');

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((catFact) => {
            const newFact = catFact.fact;
            setFact(newFact)
        })
    }, []);

    const newFact = useCallback(() => {
        fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((catFact) => {
            const newFact = catFact.fact;
            setFact(newFact)
        })
    })

    return (
        <div className="fact-wrapper">
            <div className={`fact-container ${!props.cardFormatting && "list-view-fact"}`}>
                <span className="weight-500">Fact:</span> {fact}
            </div>
            {props.cardFormatting && <>            <hr />
            <div className="bttn-container">
                <Button bttnTitle="New Fact" generateNewFact={newFact}/>
            </div></>}

        </div>
    )
}

export default Fact