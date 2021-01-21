import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import { SwipeableDrawer } from '@material-ui/core';


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url:'https://picsum.photos/200/300.jpg'
        },
        {
            name: 'Jeff bezos',
            url:'https://picsum.photos/200/300.webp'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    };

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})`}}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
