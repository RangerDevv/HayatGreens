'use client';

import React, { useState } from 'react';

interface OverlayProps {
    overlayIndex: number;
    onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ overlayIndex, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#FFF8DA] p-6 pt-2 rounded-xl shadow-lg relative min-w-[50%] min-h-[55%] border-green-700 border-2">
                {overlayIndex === 1 && <Body title='Sustainability Data Table' body={<></>} onClose={onClose}/>}
                {overlayIndex === 2 && <Body title='Sourcing and Cultivation' body={<p className="text-lg">text</p>} onClose={onClose}/>}
                {overlayIndex === 3 && <Body title='Transporting our Produce' body={<p className="text-lg">text</p>} onClose={onClose}/>}
                {overlayIndex === 4 && <Body title='Preparation in the Kitchen' body={<p className="text-lg">text</p>} onClose={onClose}/>}
                {overlayIndex === 5 && <Body title='The Final Plate' body={<p className="text-lg">text</p>} onClose={onClose}/>}
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
        <>
            <div className='w-full h-20 flex flex-row justify-between items-center'>
                <h1 className="text-3xl font-bold">{title}</h1>
                <div onClick={onClose} className="relative hover:cursor-pointer rounded-full p-2 flex items-center justify-center w-10 h-10">
                    <button className="text-gray-500 hover:text-gray-700 text-2xl" onClick={onClose}>X</button>
                </div>
            </div>
            <hr className="border border-green-700 mb-3 -mt-3"/>
            {body}
        </>
    )
}

export default Overlay;