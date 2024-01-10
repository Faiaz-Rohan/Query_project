import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import Ul from './layer/Ul'
import Li from './layer/Li'


const Navbar = () => {
  return (
  <>
   <nav className=' absolute w-full top-7'>
    <Container className={" flex justify-between items-center"}>
             <div className="logo">
                <Image src="logo.svg" alt=" logo.svg"/>

             </div>
             <div className="menu">
                <Ul className="flex gap-[60px]">
                    <Li className="text-white  hover:text-black " ListInnerItem = "Home"/>
                    <Li className="text-white  hover:text-black " ListInnerItem = "About us"/>
                    <Li className="text-white  hover:text-black " ListInnerItem = "Information"/>
                    <Li className="text-white  hover:text-black " ListInnerItem = "Culture"/>
                    <Li className="text-white  hover:text-black " ListInnerItem = "Contact Us"/>
                    
                </Ul>
             </div>
    </Container>

   </nav>
   <section className="bg-[url(/banner.jpg)] bg-cover bg-center bg-no-repeat  py-64">
    <Container >

        <p className='text-[18px] fort-bond leading-normal text-[#FFC178;]  tracking-[7px] '>explore the Nature Beauty</p>
               <h1 className='text-8xl font-bold leading-[108px] text-white py-9 open-sans'>Discover Wonderful Indonesia</h1>
    </Container>
   </section>
  </>
  )
}

export default Navbar