import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className='my-20 md:my-10 px-6 md:px-10'>
                <hr />
            </div>
            <div className="faq-section grid grid-cols-12 mx-auto my-20 md:my-36">
                <div className='col-span-1 md:col-span-2'></div>
                <div className="col-span-10 md:col-span-8">
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 text-black bg-cyan-50">
                        <div className="collapse-title text-xl font-medium">
                            How <strong><i>React JS</i></strong> Works ?
                        </div>
                        <div className="collapse-content">
                            <p>When <strong><i>React</i></strong> JS run behind the scene it copied instance of main Browser DOM and created its own DOM and which called Virtual DOM. It's compare to main to DOM and only update where the changes have been made.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 text-black bg-cyan-50">
                        <div className="collapse-title text-xl font-medium">
                            What is the difference between <strong><i>State</i></strong> and <strong><i>Props</i></strong> ?
                        </div>
                        <div className="collapse-content">
                            <p>1. Props are read-only on the other hand, State can be changed asynchronous.</p>
                            <p>2. Props are immutable but state is mutable.</p>
                            <p>3. Props can be accessed by the children component. But, state can not be accessed by the children components.</p>
                            <p>4. Props makes components reuseable. But state cannot make components reuseable.</p>
                            <p>5. Stateless components can have props. But stateless components cannot have props.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 text-black bg-cyan-50">
                        <div className="collapse-title text-xl font-medium">
                            What are the case of <strong><i>useEffect</i></strong> ?
                        </div>
                        <div className="collapse-content">
                            <p>1. Fetch API Data.</p>
                            <p>2. Validating input field.</p>
                            <p>3. Start a timer in website.</p>
                            <p>4. Live filtering.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 md:col-span-2'></div>
            </div>
        </div>
    );
};

export default Faq;