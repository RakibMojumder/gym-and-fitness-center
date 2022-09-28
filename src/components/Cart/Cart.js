
import React, { useState } from 'react';
import myImg from '../../img/my-img.jpg'


const Cart = ({ exerciseTime }) => {

    const [breakTime, setBreakTime] = useState(0);
    const handleBreakTime = (e) => {
        setBreakTime(e.target.value)
    }

    return (
        <div>
            <div className="author-info">
                <div className='flex items-center pt-4 pb-5 my-4 border-b border-slate-500'>
                    <img src={myImg} alt="" className='h-16 w-16 rounded-full' />
                    <div className='ml-5 text-slate-300'>
                        <h1>Rakib Ahmed</h1>
                        <p>Madrid, Spain</p>
                    </div>
                </div>
                <div className="physical-info rounded-lg py-3 flex justify-around">
                    <div className='shadow-lg shadow-cyan-600/50 flex justify-center items-center rounded-full h-[90px] w-[90px] text-center border-2 border-cyan-500'>
                        <div>
                            <p><span className='text-3xl text-cyan-500 font-semibold'>56</span> <span className='text-slate-300'>kg</span></p>
                            <p className='text-slate-100'>Weight</p>
                        </div>
                    </div>
                    <div className='shadow-lg shadow-cyan-600/50 flex justify-center items-center rounded-full h-[90px] w-[90px] text-center border-2 border-cyan-500'>
                        <div>
                            <p className='text-3xl text-cyan-500 font-semibold'>5.3</p>
                            <p className='text-slate-100'>Height</p>
                        </div>
                    </div>
                    <div className='shadow-lg shadow-cyan-600/50 flex justify-center items-center rounded-full h-[90px] w-[90px] text-center border-2 border-cyan-500'>
                        <div>
                            <p><span className='text-3xl text-cyan-500 font-semibold'>22</span> <span className='text-slate-300 text-sm'>years</span></p>
                            <p className='text-slate-100'>Age</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="added-break-section mt-10">
                <h1 className='mb-2'>Add A Break</h1>
                <div className='flex justify-between shadow-lg shadow-cyan-700/50 py-5 rounded-md px-2 drop-shadow-2xl'>
                    <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="10">10s</button>
                    <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="20">20s</button>
                    <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="30">30s</button>
                    <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="40">40s</button>
                    <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="50">50s</button>
                </div>
            </div>

            <div className="exercise-details mt-10">
                <h1 className='mb-3'>Exercise Details</h1>
                <div className='flex justify-between bg-slate-200 p-2 rounded-md'>
                    <span className='font-semibold text-black'>Exercise Time</span>
                    <span className='text-slate-500'>{exerciseTime} second</span>
                </div>
                <div className='flex justify-between bg-slate-200 p-2 mt-5 rounded-md'>
                    <span className='font-semibold text-black'>Break Time</span>
                    <span className='text-slate-500'>{breakTime} second</span>
                </div>

                <button className='bg-green-500 rounded-md text-white w-full py-2 text-md mt-10'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;