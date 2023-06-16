import React from 'react'
import { Link } from "react-router-dom";
import { BiBookmark } from 'react-icons/bi';
import Memory from './details/Memory';
import Storage from './details/Storage';
import PowerAdapter from './details/PowerAdapter';
import FinalCutPro from './Pre-installed-Software/FinalCutPro';
import LogicPro from './Pre-installed-Software/LogicPro';



export default function RightSection() {
  return (
    <div className=' mt-[10px] md:mt-[200px] md:text-start'>
      <h1 className=' text-[32px] md:text-[40px] font-[650]'>Customise your 15-inch <br /> MacBook Air - Midnight</h1>
      <p className=' text-start text-[14px] mx-6 md:m-0 leading-8 mt-3'>Apple M2 chip with 8-core CPU, 10-core GPU, 16-core Neural Engine <br />
        16GB unified memory <br />
        2TB SSD storage <br />
        38.91 cm (15.3-inch) Liquid Retina display with True Tone³ <br />
        1080p FaceTime HD camera <br />
        MagSafe 3 charging port <br />
        Two Thunderbolt / USB 4 ports <br />
        70W USB-C Power Adapter <br />
        Backlit Magic Keyboard with Touch ID - US English <br /></p>
      <div className=' bg-slate-400 h-[1px] w-[100%] md:w-[500px] mt-16'></div>
      <div className='text-start mx-[18px] md:mx-[0]'>
        <p className=' text-[20px] mt-3 font-semibold '>Memory</p>
        <Link to="/" className=' text-[19px] text-blue-500 text-2xl font-semibold hover:underline underline-offset-2'>How much storage is right for you?</Link>
        <Memory />
        <p className=' text-[20px] mt-5 font-semibold '>Storage</p>
        <Link to="/" className='text-[19px] text-blue-500 text-2xl font-semibold hover:underline underline-offset-2'>Which power adapter is right for you?</Link>
        <Storage />
        <p className=' text-[20px] mt-5  font-semibold'>Power Adapter</p>
        <Link to="/" className='text-[19px] text-blue-500 text-2xl font-semibold hover:underline underline-offset-2'>How much storage is right for you?</Link>
        <PowerAdapter />
        <div className=' text-[24px] font-semibold mt-10'>Pre-installed Software</div>
        <p className=' text-[20px] mt-5 font-semibold'>Final Cut Pro</p>
        <Link to="/" className='text-[19px] mt-5  text-blue-500 font-semibold hover:underline underline-offset-2 '>Learn more</Link>
          <FinalCutPro />
        <p className=' text-[20px] mt-5 font-semibold'>Logic Pro</p>
        <Link to="/" className='text-[19px] mt-5  text-blue-500 font-semibold hover:underline underline-offset-2'>Learn more</Link>
          <LogicPro/>
      </div>
      <div className=' mx-[18px] md:mx-0 h-[210px] text-start md:h-[165px] w-[92%] md:w-[500px] bg-slate-50 mt-6 '>
        <p className='p-[30px] '><span className=' font-[14px], font-semibold'>Need a moment?</span> <br />
          Keep all your selections by saving this device to Your Saves, <br /> then come back anytime and pick up right where you left off. <br /><Link to="/" className=' text-blue-800 flex mt-3 gap-1'> <BiBookmark className=' mt-1' /> Save for later</Link></p>
      </div>
    </div>
  )
}
