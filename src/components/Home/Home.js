import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';



const Home = () => {

    const [exerciseTime, setExerciseTime] = useState(0);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch(`instrument.json`)
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);


    // Handle exercise time 
    const handleExTime = (time) => {
        setExerciseTime(prev => prev + time);
    };


    return (
        <div>
            <div className='home grid grid-cols-12 md:grid-cols-12'>
                <div className="players-section mt-20 mb-32 px-8 col-span-7 md:col-span-8 lg:col-span-9">
                    <div className="player-header">
                        <h1 className='uppercase text-cyan-500 text-4xl font-bold'>
                            <span className='mr-4 text-5xl'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span>
                            Gym And Fitness Center</h1>
                        <p className='my-6'>Our Best Facilities</p>
                    </div>
                    <div className="player grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                        {players.map(player => <Player
                            player={player}
                            key={player.id}
                            handleExTime={handleExTime}>
                        </Player>)}
                    </div>
                </div>
                <div className="activity-section col-span-5 md:col-span-4 lg:col-span-3 px-5 mt-20">
                    <Cart exerciseTime={exerciseTime}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;