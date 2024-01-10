import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import Ul from './layer/Ul'
import Li from './layer/Li'

const Footer = () => {
  return (
    <>
    <footer className='bg-black'>
 <Container className="flex">
  <div className="left w-1/2">
       <div className="top">
        <Image src='/logo.svg' alt='logo'/>
       </div>
       <div className="text">
        <h3 className='text-white text-[36px] font-bold w-[405px] tracking-[-0.3px] pt-[82px]'>
        Let's go on vacation, Make your day
        </h3>
        <p className='text-white  text-sm  font-semibold pt-[50px] pb-8'>Terms & Conditions</p>

         
         <svg xmlns="http://www.w3.org/2000/svg" width="117" height="17" viewBox="0 0 117 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M101.689 0.275269H109.717C113.411 0.275269 116.406 2.49454 116.406 5.23121V11.1783C116.406 13.915 113.411 16.1343 109.717 16.1343H101.689C97.9955 16.1343 95 13.915 95 11.1783V5.23121C95 2.49454 97.9955 0.275269 101.689 0.275269ZM109.717 14.6476C112.299 14.6476 114.399 13.0915 114.399 11.1785V5.23134C114.399 3.31835 112.299 1.76218 109.717 1.76218H101.689C99.1072 1.76218 97.0067 3.31835 97.0067 5.23134V11.1785C97.0067 13.0915 99.1072 14.6476 101.689 14.6476H109.717Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M100.352 8.20486C100.352 6.01533 102.748 4.24011 105.703 4.24011C108.659 4.24011 111.055 6.01533 111.055 8.20486C111.055 10.3944 108.659 12.1696 105.703 12.1696C102.748 12.1696 100.352 10.3944 100.352 8.20486ZM102.358 8.2049C102.358 9.57076 103.859 10.6829 105.703 10.6829C107.547 10.6829 109.048 9.57076 109.048 8.2049C109.048 6.83805 107.547 5.72693 105.703 5.72693C103.859 5.72693 102.358 6.83805 102.358 8.2049Z" fill="white"/>
  <ellipse cx="111.456" cy="3.94261" rx="0.713146" ry="0.528303" fill="white"/>
  <path d="M66 2.4454C65.1075 2.74116 64.1565 2.93721 63.165 3.03239C64.185 2.57232 64.9635 1.84934 65.3295 0.977915C64.3785 1.40626 63.3285 1.70882 62.2095 1.87767C61.3065 1.15129 60.0195 0.701416 58.6155 0.701416C55.8915 0.701416 53.6985 2.37174 53.6985 4.41942C53.6985 4.71405 53.7315 4.99735 53.8125 5.26705C49.722 5.11633 46.1025 3.63525 43.671 1.37907C43.2465 1.93546 42.9975 2.57232 42.9975 3.2579C42.9975 4.54521 43.875 5.68633 45.183 6.34698C44.3925 6.33565 43.617 6.16227 42.96 5.88917C42.96 5.9005 42.96 5.91524 42.96 5.92997C42.96 7.73628 44.6655 9.23662 46.902 9.58225C46.5015 9.66497 46.065 9.70463 45.612 9.70463C45.297 9.70463 44.979 9.69103 44.6805 9.64117C45.318 11.1132 47.127 12.1954 49.278 12.2305C47.604 13.2198 45.4785 13.8159 43.1775 13.8159C42.774 13.8159 42.387 13.8023 42 13.7649C44.1795 14.8267 46.7625 15.4329 49.548 15.4329C58.602 15.4329 63.552 9.76696 63.552 4.8557C63.552 4.69139 63.5445 4.53274 63.534 4.37523C64.5105 3.85169 65.331 3.19784 66 2.4454Z" fill="white"/>
  <path d="M10.6266 2.56252H13V0.108674C12.5905 0.0752359 11.1823 0 9.54229 0C6.12032 0 3.77619 1.27772 3.77619 3.62611V5.78738H0V8.53059H3.77619V15.433H8.40597V8.53124H12.0294L12.6046 5.78802H8.40488V3.89812C8.40597 3.10525 8.7656 2.56252 10.6266 2.56252Z" fill="white"/>
</svg>
     
       </div>
  </div>
  <div className="right w-1/2    ">
    <div className="top flex gap-4  items-center justify-end">
      <p className='text-white  text-base  tracking-[-0.3px] '>Ready to explore?</p>
   
      <button className='bg-[#FFA343;] rounded-xl h-[60px] w-[232px]'>Get started</button>

</div>
      <div className="btm flex py-[87px]">
    
      <Ul className="flex-col">
      <h3 className='text-[#FBD784] text-lg  font-bold tracking-[6px]]'>Service</h3>
      <Li className="text-white   " ListInnerItem = "Email Marketing"/>
      <Li className="text-white  " ListInnerItem = "Campaigns"/>
      <Li className="text-white  " ListInnerItem = "Branding"/>
      <Li className="text-white  " ListInnerItem = "Offline"/>
      
      </Ul>
     
      <Ul className="mx-[84px] mr-[139px]">
      <h3 className='text-[#FBD784] text-lg  font-bold tracking-[6px]]'>About</h3>
      <Li className="text-white  " ListInnerItem = "Our Story"/>
      <Li className="text-white  " ListInnerItem = "Benefits"/>
      <Li className="text-white  " ListInnerItem = "Term"/>
      <Li className="text-white  " ListInnerItem = "Career"/>
     
      </Ul>
      
      <Ul>
      <h3 className='text-[#FBD784] text-lg  font-bold tracking-[6px]]'>Help</h3>
      <Li className="text-white  " ListInnerItem = "FAQ’S"/>
      <Li className="text-white  " ListInnerItem = "Contact us"/>
      </Ul>
      </div>
    
  </div>


                     
 </Container>
      
 <Container className="flex">
  
 <p className='text-white  mx-auto  pt-36'> Copyright 2023 QWERy</p>
 </Container>
    </footer>
    
    
    </>
  )
}

export default Footer