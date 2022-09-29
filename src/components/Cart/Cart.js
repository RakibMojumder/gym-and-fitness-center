
import React, { useEffect, useState } from 'react';
import myImg from '../../img/images.png'
import { addToDb, getFromLocalStorage } from '../../utilities';
import Swal from 'sweetalert2'

const Cart = ({ exerciseTime }) => {

    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const storedSecond = getFromLocalStorage();
        if (storedSecond) {
            setBreakTime(storedSecond);
        };
    }, []);


    const handleBreakTime = (e) => {
        setBreakTime(e.target.value);
        addToDb(e.target.value)
    };

    const handleActivity = () => {
        console.log('hello')
        Swal.fire(
            'Good job!',
            'Your Activity Completed!',
            'success'
        )
    }

    return (
        <div>
            <div className="author-info">
                <div className='flex flex-col md:flex-row items-center pt-4 pb-6 my-4 border-b border-slate-500'>
                    <img src={myImg} alt="" className='h-16 w-16 rounded-full' />
                    <div className='ml-5 mt-4 md:mt-0 text-slate-300'>
                        <h1>Rakib Ahmed</h1>
                        <p>Madrid, Spain</p>
                    </div>
                </div>
                <div className="physical-info rounded-lg py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                    <div className='col-span-1 mx-auto lg:mx-0 shadow-lg shadow-cyan-500/50 flex justify-center items-center rounded-full h-[90px] w-[90px] text-center border-2 border-cyan-500'>
                        <div>
                            <p><span className='text-3xl text-cyan-500 italic font-semibold'>56</span> <span className='text-slate-300'>kg</span></p>
                            <p className='text-slate-100'>Weight</p>
                        </div>
                    </div>
                    <div className='col-span-1 mx-auto lg:mx-0 mt-5 md:mt-0 shadow-lg shadow-cyan-500/50 flex justify-center items-center rounded-full h-[90px] w-[90px] text-center border-2 border-cyan-500'>
                        <div>
                            <p className='text-3xl text-cyan-500 italic font-semibold'>5.3</p>
                            <p className='text-slate-100'>Height</p>
                        </div>
                    </div>
                    <div className='col-span-1 md:col-span-2 lg:col-span-1 mt-5 lg:mt-0 mx-auto lg:mx-0 shadow-lg shadow-cyan-500/50 flex justify-center items-center rounded-full h-[90px] w-[90px] text-center border-2 border-cyan-500'>
                        <div>
                            <p><span className='text-3xl text-cyan-500 italic font-semibold'>22</span> <span className='text-slate-300 text-sm'>years</span></p>
                            <p className='text-slate-100'>Age</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="added-break-section mt-10">
                <h1 className='mb-2'>Add A Break</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between shadow-lg shadow-cyan-700/50 py-5 rounded-md px-2 drop-shadow-2xl'>

                    <div className='text-center'>
                        <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="10">10s</button>
                    </div>

                    <div className='text-center'>
                        <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="20">20s</button>
                    </div>

                    <div className='text-center mt-3 md:mt-0'>
                        <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="30">30s</button>
                    </div>

                    <div className='text-center mt-3 lg:mt-0'>
                        <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="40">40s</button>
                    </div>

                    <div className='text-center mt-3 lg:mt-0'>
                        <button onClick={(e) => handleBreakTime(e)} className='h-11 w-11 text-slate-100 border-2 border-cyan-400 text-md font-semibold shadow-lg shadow-cyan-600/50 rounded-full focus:bg-cyan-400' value="50">50s</button>
                    </div>
                </div>
            </div>

            <div className="exercise-details mt-10">
                <h1 className='mb-3'>Exercise Details</h1>
                <div className='flex flex-col md:flex-row items-center md:justify-between bg-slate-200 p-2 rounded-md'>
                    <span className='font-semibold text-black'>Exercise Time</span>
                    <span className='text-slate-500'><span className='text-cyan-500 font-bold'>{exerciseTime}</span> second</span>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between bg-slate-200 p-2 mt-5 rounded-md'>
                    <span className='font-semibold text-black'>Break Time</span>
                    <span className='text-slate-500'><span className='text-cyan-500 font-bold'>{breakTime}</span> second</span>
                </div>

                <button onClick={handleActivity} className='bg-green-500 rounded-md text-white w-full py-2 text-md mt-10'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;