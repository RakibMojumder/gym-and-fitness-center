import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


const Player = ({ player, handleExTime }) => {
    const { name, img, age, timeReq } = player;

    return (
        <div className='player border rounded-md'>
            <div className="player-img">
                <img src={img} alt="" className='h-[200px] w-full rounded-tl-md rounded-tr-md' />
            </div>
            <div className="player-details pt-5 pl-3">
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <p className='my-1'>Age: {age}</p>
                <p>Time Required: {timeReq}s</p>
            </div>
            <div className="add-btn mt-4">
                <button onClick={() => handleExTime(timeReq)} className='w-full text-white h-12 bg-cyan-600 rounded-bl-md rounded-br-md'>ADD TO CART
                    <span className='ml-3'><FontAwesomeIcon icon={faArrowRightLong} /></span>
                </button>
            </div>
        </div>
    );
};

export default Player;