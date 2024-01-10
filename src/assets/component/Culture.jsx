import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'

const Culture = () => {
  return (
    <>
    <section className='bg-black py-72'>
        <Container className="flex">

            <div className="left w-1/2 py-40">
                  <p className='text-[#FBD784] text-lg  font-bold tracking-[6px]'>INDONESIAN CULTURE</p>
                  <h2 className='text-white text-[64px] font-bold w-[663px]' >Our culture here is very friendly to people</h2>
                  <p className='text-white  text-sm  font-semibold w-[655px] leading-8'>known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with other tribes and become basic traits that are passed down by their ancestors.</p>
                  <p className='text-[#FBD784;] text-sm font-bold  py-16'>read more</p>
            </div>
            <div className="right w-1/2">
                <Image src=" /culture.jpg"/>

            </div>


        </Container>


    </section>
    
    
    </>
  )
}

export default Culture