import React from 'react'
import { Link } from "react-router-dom";
import leptop from '../assests/mba15-midnight-gallery1-202306.jpg'
import { IoCubeOutline } from 'react-icons/io5';



export default function LeftSection() {
    return (
            <div className=' md:flex md:justify-between relative'>
                <div className=''>
                    <div className=' sticky top-[-56px]' >
                        <img src={leptop} className='mx-[5px] md:mx-14 md:w-[450px] md:mt-44' alt="" />
                        <button className='text-center text-blue-500 hover:underline underline-offset-2' type="button"> View gallery</button> <br /><br />
                        <IoCubeOutline className=' h-8  w-8 mx-[190px] md:mx-[260px] mb-3 mt-8' />
                        <span className=' text-sm font-semibold text-gray-600'>
                            Free delivery, or pick up available items at an Apple&nbsp;Store.
                        </span>
                        <br /> <br />
                        <div>Have questions about buying a Mac?</div>
                        <Link to="/" className=' text-blue-500 hover:underline underline-offset-2 font-semibold'>Chat with a Mac Specialist</Link>
                    </div>
                </div>
                
            </div>

    )
}