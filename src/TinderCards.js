import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import database from './firebase'



function TinderCards() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        // this is where code runs
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        return () => {
            // this is the cleanup..
            unsubscribe()
        }
        // Will run once when component loads and never again if [] is kept blank
    }, [])
    return (

        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (

                    <TinderCard className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>

                        </div>
                    </TinderCard>
                ))}
                <h1>You are all caught up</h1>
            </div>
        </div>
    )
}

export default TinderCards
