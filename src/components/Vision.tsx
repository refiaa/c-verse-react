import React from 'react';

const visionStatements = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    "commodo consequat. Duis aute irure dolor in reprehenderit",
    "in voluptate velit esse cillum dolore"
];

const Vision = () => (
    <section id='vision' className='md:py-32 py-20 border-y border-gray-700'>
        <div className='mt-8 px-10 text-center'>
            <h3 className='text-4xl font-bold text-highlight'>Our <span className="text-highlight">Vision</span></h3>
            <div className="mt-12 max-w-4xl mx-auto">
                <ul className="list-disc list-inside">
                    {visionStatements.map((statement, i) => (
                        <li key={i} className='text-lg leading-8 mb-4'>
                            {statement}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default Vision;
