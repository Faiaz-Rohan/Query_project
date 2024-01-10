import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'

const Have = () => {
  return (
    <>
    <section className='bg-black'>
    <Container className ="flex   py-80 ">
      <div className="left w-1/2">
        <Image src="/Have.jpg" alt=" have.jpg"/>
      </div>
      <div className="right w-1/2 py-11">
            
            <p className=' text-[#FBD784] text-lg  font-bold tracking-[6px]]'>EAST nUSA TENGGARA</p>
            <h2 className='text-white text-[64px] font-bold w-[496px] '>Have you enjoyed your holiday?</h2>
            <p className='text-white  text-sm  font-semibold'>You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.  The beautiful waters of Komodo will make you meet many travelers from other countries.</p>
            <p className='text-[#FBD784;] text-sm font-bold  py-16'>read more</p>
      </div>
    </Container>
    </section>
    </>
  )
}

export default Have
