
import React, { useState } from 'react';


const Cart = ({ exerciseTime }) => {

    const [breakTime, setBreakTime] = useState(0);
    const handleBreakTime = (e) => {
        setBreakTime(e.target.value)
    }

    return (
        <div>
            <div className="author-info">
                <div className="physical-info rounded-lg py-3 flex justify-around">
                    <div className='border flex justify-center items-center rounded-full h-[90px] w-[90px] text-center border-cyan-500'>
                        <div>
                            <p><span className='text-3xl text-cyan-500 font-semibold'>56</span> <span className='text-slate-400'>kg</span></p>
                            <p className='text-slate-500'>Weight</p>
                        </div>
                    </div>
                    <div className='border flex justify-center items-center rounded-full h-[90px] w-[90px] text-center border-cyan-500'>
                        <div>
                            <p className='text-3xl text-cyan-500 font-semibold'>5.3</p>
                            <p className='text-slate-500'>Height</p>
                        </div>
                    </div>
                    <div className='border flex justify-center items-center rounded-full h-[90px] w-[90px] text-center border-cyan-500'>
                        <div>
                            <p><span className='text-3xl text-cyan-500 font-semibold'>22</span> <span className='text-slate-400 text-sm'>years</span></p>
                            <p className='text-slate-500'>Age</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="added-break-section">
                <h1>Add A Break</h1>
                <div className='flex justify-between bg-slate-200 py-3 px-2'>
                    <button onClick={(e) => handleBreakTime(e)} className='h-10 w-10 text-md bg-white font-semibold border rounded-full' value="10">10s</button>
                    <button onClick={(e) => handleBreakTime(e)} className='h-10 w-10 text-md bg-white font-semibold border rounded-full' value="20">20s</button>
                    <button onClick={(e) => handleBreakTime(e)} className='h-10 w-10 text-md bg-white font-semibold border rounded-full' value="30">30s</button>
                    <button onClick={(e) => handleBreakTime(e)} className='h-10 w-10 text-md bg-white font-semibold border rounded-full' value="40">40s</button>
                    <button onClick={(e) => handleBreakTime(e)} className='h-10 w-10 text-md bg-white font-semibold border rounded-full' value="50">50s</button>
                </div>
            </div>

            <div className="exercise-details mt-10">
                <h1 className='mb-3'>Exercise Details</h1>
                <div className='flex justify-between bg-slate-200 p-3 rounded-md'>
                    <span className='font-semibold text-black'>Exercise Time</span>
                    <span>{exerciseTime} second</span>
                </div>
                <div className='flex justify-between bg-slate-200 p-3 mt-5 rounded-md'>
                    <span className='font-semibold text-black'>Break Time</span>
                    <span>{breakTime} second</span>
                </div>

                <button className='bg-green-500 text-white w-full py-2 text-md mt-10'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;