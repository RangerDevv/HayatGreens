'use client';

import React, { useState } from 'react';

interface OverlayProps {
    overlayIndex: number;
    onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ overlayIndex, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#FFF8DA] px-6 pt-2 pb-4 rounded-xl shadow-lg relative w-[45%] min-h-[45%] border-green-700 border-2">
                {overlayIndex === 1 && <Body title='Sustainability Data' 
                        body={
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Metric
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Competitor
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Seimei Greens
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Difference
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            CO2 Emissions (kg CO2e per meal)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            2.5
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            1.2
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                                            -1.3
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Percentage of Electric Vehicles
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            20.3%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            60.7%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                                            +40.4%
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Renewable Energy Usage
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            30.4%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            80.2%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                                            +49.8%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Water Usage (liters per meal)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            150.0
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            90.8
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                                            -59.2
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Local Sourcing (% of ingredients)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            40.5%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            75.3%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                                            +34.8%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        } 

                        onClose={onClose}
                    />
                }
                {overlayIndex === 2 && <Body title='Sourcing and Cultivation' body={<p className="text-xl">
                    At Seimei Greens, we make sure to source and cultivate our
                    foods from vegan and vegetarian farms, ensuring that our
                    food is not cross contaminated with unwanted substances. We
                    pledge that our food is GMO free, providing our customers
                    with the fresh experience they deserve.
                    <br/>
                    <br/>
                    Our farms are located in the most optimal locations for
                    growth, ensuring that our food is grown in the most
                    sustainable way possible. Before arriving at our
                    kitchen, our quality control team rigorously inspects our
                    produce for any impurities through processes such as
                    mass spectrometry, a process that systematically identifies
                    chemical contaminants, and physical inspection to ensure no
                    food is rotten or spoiled. Any food that does not meet our
                    standards is immediately thrown out and used for compost or 
                    other eco-friendly purposes if in any way possible.
                </p>} onClose={onClose}/>}
                {overlayIndex === 3 && <Body title='Transporting our Produce' body={<p className="text-xl">
                    Our trucks take the most optimal paths, limiting their CO2
                    output while also making stops at donation centers if we are
                    ever overstocked. Although we cannot be 100% electric, we
                    opt for suppliers who can send our ingredients with more
                    efficient, electric vehicles.
                    <br/>
                    <br/>
                    Each one of our trucks is equipped with a GPS tracker that
                    allows us to monitor their location and ensure they are
                    both meeting the quota for food delivered while staying on
                    their designated route. Our software team has worked countless
                    hours to verify that our system is the more efficient possible.
                    In addition to efficiently, our routes dynamically change based
                    off of the needs of local food banks through information we gain
                    from our partnerships with numerous food banks across the country.
                    Our end goal is to make sure that your food gets on your place 
                    in an ethical and efficient manner.
                </p>} onClose={onClose}/>}
                {overlayIndex === 4 && <Body title='Preparation in the Kitchen' body={<p className="text-xl">
                    If you can think of a way to prepare food our chefs can do
                    it! These high-quality chefs are handpicked to deliver the
                    highest caliber of meals while also taking the time and
                    effort to cater to individual customers' needs. Our chefs
                    are also trained to not mix any non vegan ingredients with
                    vegan ones.
                    <br/>
                    <br/>
                    Many of our chefs are vegetarian or vegan themselves, so
                    they understand the importance of tailoring a meal to 
                    an individual. Our chefs are not afraid to experiment with
                    their dishes and tweak them suit any religious or personal
                    requirements. Our kitchen is also equipped to serve a variety
                    of meals, including gluten-free, nut-free, and
                    soy-free meals. We understand the dangers to those with allergies
                    or other dietary restrictions and take the necessary precautions
                    to ensure that our food is safe for everyone to eat under 
                    supervision from the FDA.
                </p>} onClose={onClose}/>}
                {overlayIndex === 5 && <Body title='The Final Plate' body={<p className="text-xl">
                    After our tedious process of cultivating, shipping, and
                    preparing your food, you as the customer finally get the
                    taste you deserve. Our waiters make sure to note any
                    preferences you may have, from cooking methods to custom
                    modifications.
                    <br/>
                    <br/>
                    Customers are free to leave feedback on the meals, waiters,
                    or chefs. We take all feedback seriously and use it to improve
                    our staff and service. At the end of the day, we want to make
                    you, the customer, happy, so any way that we can improve is a 
                    net benefit to all of us. As an added bonus, we donate a portion
                    of our tips to local vegetarian and vegan farms to help them
                    grow and expand their operations in a market that is often
                    dominated by meat and dairy products.
                </p>} onClose={onClose}/>}
            </div>
        </div>
    );
};

interface BodyProps {
    title: string;
    body: React.ReactNode;
    onClose: () => void;
}

const Body: React.FC<BodyProps> = ({ title, body, onClose}) => {
    return (
        <div className='h-full w-full flex flex-col justify-between p-4'>
            <div className='w-full h-16 flex flex-row justify-between items-center'>
                <h1 className="text-2xl font-semibold">{title}</h1>
                <div onClick={onClose} className="relative hover:cursor-pointer rounded-full p-2 flex items-center justify-center w-8 h-8">
                    <button className="text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>X</button>
                </div>
            </div>
            <hr className="border border-green-700 mb-2"/>
            <div className='h-full overflow-y-auto'>
                {body}
            </div>
        </div>
    )
}

export default Overlay;