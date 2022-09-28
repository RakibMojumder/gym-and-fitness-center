import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootball } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';



const Home = () => {

    const [exerciseTime, setExerciseTime] = useState(0);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch(`players.json`)
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
                <div className="players-section my-10 px-8 col-span-7 md:col-span-8 lg:col-span-9">
                    <div className="player-header">
                        <h1 className='uppercase text-cyan-500 text-4xl font-bold'><FontAwesomeIcon icon={faFootball}></FontAwesomeIcon> Super Sixers</h1>
                        <p className='my-6'>Our Best Players</p>
                    </div>
                    <div className="player grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                        {players.map(player => <Player
                            player={player}
                            key={player.id}
                            handleExTime={handleExTime}>
                        </Player>)}
                    </div>
                </div>
                <div className="activity-section col-span-5 md:col-span-4 lg:col-span-3 border px-5">
                    <Cart exerciseTime={exerciseTime}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;