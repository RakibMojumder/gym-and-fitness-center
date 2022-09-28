import React from 'react';

const Cart = () => {
    return (
        <div>
            <div className="author-info">
                <div className="physical-info rounded-lg py-3 flex justify-around bg-cyan-50">
                    <div>
                        <p><span className='text-2xl font-semibold'>56</span> <span className='text-slate-400'>kg</span></p>
                        <p className='text-slate-500'>Weight</p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>5.3</p>
                        <p className='text-slate-500'>Height</p>
                    </div>
                    <div>
                        <p><span className='text-2xl font-semibold'>22</span> <span className='text-slate-400'>years</span></p>
                        <p className='text-slate-500'>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;