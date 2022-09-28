import React from 'react';

const Cart = () => {
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
                    <button className='h-10 w-10 text-md bg-white font-semibold border rounded-full'>10s</button>
                    <button className='h-10 w-10 text-md bg-white font-semibold border rounded-full'>20s</button>
                    <button className='h-10 w-10 text-md bg-white font-semibold border rounded-full'>30s</button>
                    <button className='h-10 w-10 text-md bg-white font-semibold border rounded-full'>40s</button>
                    <button className='h-10 w-10 text-md bg-white font-semibold border rounded-full'>50s</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;