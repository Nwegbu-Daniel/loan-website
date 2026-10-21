import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function HomeComp() {
  const [side, setSide] = useState(true)
  
  const [openStack, setOpenStack] = useState(null)


  return (
    <div className='h-[7000px] w-full  bg-yellow-200'>
      <div className='h-[120px] w-full bg-amber-500 flex items-center p-4.5 md: lg:p- sticky z-10 top-0'>
        <div
          className='h-[100px] w-[50%] md:w-[20%] lg:w-[20%] bg-blue-600 z-10 left-[2%] lg:absolute md:absolute md:mr-[0%] lg:ml-[0%]'
          style={{ clipPath: 'polygon(0 0, 100% 0%, 54% 100%, 0% 100%)' }}
        ></div>
        <div className='lg:h-[100px] md:h-[100px] w-0 md:w-[100%] lg:w-[70%] md:ml-30 lg:ml-35 bg-purple-400 '>
            <div className='lg:h-[40px] md:h-[40px] bg-pink-600 border-b-2 border-black'>

            </div>
            <div className='lg:h-[60px] md:h-[60px] bg-blue-300 flex justify-center items-center gap-3'>
                <div className='lg:h-[50px] md:h-[50px] w-[60%] bg-green-500 ml-20'>
                  <ul className='flex justify-between items-center h-[50px] w-full gap-1'>
                    <ol className='h-[30px] w-[20%] bg-mauve-600 flex justify-center items-center text-amber-50'>HOME</ol>
                    <ol className='h-[30px] w-[20%] bg-green-900 flex justify-center items-center text-amber-50'>ABOUT</ol>
                    <ol className='h-[30px] w-[20%] bg-black flex justify-center items-center text-amber-50'>SERVICES</ol>
                    <ol className='h-[30px] w-[20%] bg-blue-600 flex justify-center items-center text-amber-50'>PAGES</ol>
                    <ol className='h-[30px] w-[20%] bg-green-600 flex justify-center items-center text-amber-50'>CONTACT</ol>
                    <ol className='h-[30px] w-[20%] bg-red-600 flex justify-center items-center text-amber-50'>BLOG</ol>
                  </ul>
                </div>
                <div className='lg:h-[50px] md:h-[50px] w-[30%] bg-yellow-500 ml-6 flex'>
                  <ul className='flex items-center h-[50px] w-full gap-3 '>
                    <ol className='h-[50px] w-[50px] rounded-full bg-amber-800 flex justify-center items-center text-amber-50 text-[10px]'>MENU 1</ol>
                    <ol className='h-[50px] w-[50px] rounded-full bg-amber-300 flex justify-center items-center text-amber-50 text-[10px]'>MENU 1</ol>
                  </ul>
                  
                </div>
            </div>

        </div>

        <div className='h-[100px] md:h-[100px] lg:h-[100px] w-[90%] lg:w-[20%] bg-red-600 absolute lg:static md:static flex justify-center'>
          <div className='h-[50px] w-full bg-amber-400  justify-center items-center text-amber-50 hidden md:flex lg:flex md:mt-5 lg:mt-5'>REQUEST A CALL</div>  
          <button  onClick={() => setSide(false)} className='left-30 relative md:hidden lg:hidden'>⚙️</button>
            
          <div className={`h-[800px] w-[400px] bg-green-400 top-0 z-10 ml-[-20px] absolute transition-all duration-300 md:hidden lg:hidden flex-col mt-[-10px] ${
              side ? 'left-[400px] ' : 'left-0 '}`}>
                 <div className='h-[50px] w-full bg-black flex items-center'>
                    <button onClick={()=> setSide(true)} className='flex justify-center items-center bg-amber-300 w-[50px] h-[40px] ml-75'>⚙️</button>
                    </div>
                    <ul className='flex-col h-[480px] w-full gap-2 mt-[50] justify-start'>
                    <ol className='h-[80px] w-full bg-cyan-500'>HOME</ol>
                    <ol className='h-[80px] w-full bg-fuchsia-700'>CONTACT</ol>
                    <ol className='h-[80px] w-full bg-amber-200'>ABOUT</ol>
                    <ol className='h-[80px] w-full bg-amber-900'>SERVICE</ol>
                    <ol className='h-[80px] w-full bg-lime-400'>PAGES</ol>
                    <ol className='h-[80px] w-full bg-orange-300'>BLOG</ol>

                    </ul>
                    <div className='h-[250px] bg-blue-600 flex mt-[-50]'> 
                        <div className='h-[100px] w-full bg-red-300 mt-3 text-2xl'>CONTACT</div>
                    </div>
          </div>
        </div>
      </div>


      <div className='h-[800px] md:h-[500px] lg:h-[500px] w-full bg-blue-400 '> 
          <div className='h-[800px] w-full md:flex lg:flex'>
            <div className='h-[800px] md:h-[500px] lg:h-[500px] w-full md:w-[50%] lg:w-[50%] bg-cyan-500  lg:static md:static'>
              <div className='h-[100px] w-full bg-red-300  text-3xl flex justify-center items-center '>INVEST WITH CONFIDENCE, HARVEST WITH REWARDS</div>
              <div> need a loan? WE GOT YOU COVERED!</div>
              <div className='h-[100px] w-full bg-amber-300 mt-3 text-2xl flex justify-center items-center '>At CherishKash we offer you the best financial solutions!</div>
              <button className='h-[70px] w-[200px] rounded-full  bg-green-500 text-2xl flex justify-center items-center mt-10 ml-2'>REQUEST A CALL</button>
              
            </div>
            <div className='h-[300px] md:h-[500px] lg:h-[500px] w-full md:w-[50%] lg:w-[50%] bg-fuchsia-500 text-7xl  lg:static md:static  mt-[-370px] lg:mt-[0px] '>LARGE IMAGE HERE</div>
          </div>
            
      </div>


      <div className='h-[600px] w-full bg-purple-300 grid mt-10 md:flex lg:flex'>
        <div className='h-[300px] md:h-[600px] lg:h-[600px] mt-2 md:mt-0 lg:mt-0 w-full md:w-[50%] lg:w-[50%] bg-red-600 text-7xl flex items-center'> LARGE IMAGE HERE</div>
        <div className='h-[300px] md:h-[600px] lg:h-[600px] w-full md:w-[50%] lg:w-[50%] bg-amber-700'> 
          <div className='h-[50px] w-full text-3xl ml-2'>ABOUT US </div>
          <div className='ml-2'>fast loans no too much drama all you need is your NIN</div>
          <button className='h-[70px] w-[200px] rounded-full  bg-amber-50 mt-5'>About Us</button>
        </div>
      </div>


      <div className='h-[1100px] md:h-[800px] lg:h-[800px] w-full bg-emerald-300'>
        <div className='h-[200px] w-full bg-blue-500 flex'>
          <div className='h-[50px] w-[100%] md:w-[60%] lg:w-[60%]  mt-5'><div className='text-cyan-400 ml-2'>FEATURED SERVICES</div>  <div className='text-4xl w-[50%] ml-2'>mind blowing loan terms</div></div>
          <div className='h-[0px] md:h-[50px] lg:h-[50px]  md:w-[40%] lg:w-[40%] text-xl flex gap-2  justify-center items-center mt-5'>
            <button className='hidden md:block lg:block md:h-[40px] lg:h-[40px]  md:w-[100px] lg:w-[100px] rounded-full bg-red-300 text-white'>prev</button>
            <button className='hidden md:block lg:block md:h-[40px] lg:h-[40px]  md:w-[100px] lg:w-[100px] bg-green-500 rounded-full text-white'>next</button>
          </div>
        </div>
        <div className='h-[400px] w-full bg-red-400'>
          <Swiper
        slidesPerView={1}
        spaceBetween={25}
        centeredSlides={false}
        loop={true}
        speed={800}
        breakpoints={{
          768: {
            slidesPerView: 2.1,
          },
          1024: {
            slidesPerView: 2.1,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='h-[300px] w-[90%] bg-blue-500 flex absolute top-0 mt-[50px] z-10'>QUICK LOANS <div className='h-[50px] md:h-[70px] lg:h-[70px] w-[15%] bg-red-500 mt-[-25px]  md:mt-[-50px] lg:mt-[-25px] ml-[150px] md:ml-[280px]  '></div></div></SwiperSlide>
        <SwiperSlide><div className='h-[300px] w-[90%] bg-green-500 flex absolute top-0 mt-[50px] z-10'>LOW INTEREST RATE <div className='h-[50px] md:h-[70px] lg:h-[70px] w-[15%] bg-red-500 mt-[-25px]  md:mt-[-50px] lg:mt-[-25px] ml-[90px] md:ml-[380px] lg:ml-[230px] '></div></div></SwiperSlide>
        <SwiperSlide><div className='h-[300px] w-[90%] bg-yellow-500 flex absolute top-0 mt-[50px] z-10'>CONVINIENT PAYMENT <div className='h-[50px] md:h-[70px] lg:h-[70px] w-[15%] bg-red-500 mt-[-25px]  md:mt-[-50px] lg:mt-[-25px] ml-[70px] md:ml-[230px] lg:ml-[230px] '></div></div></SwiperSlide>
        
      </Swiper>
        </div>
        <div className='h-[450px] md:h-[150px] lg:h-[150px] w-[80%] bg-gray-300 flex justify-center items-center mt-5 md:absolute lg:absolute md:mt-[120px] lg:mt-[120px] ml-[10%]'>
          <div className='text-xl text-gray-600'>© 2023 Your Company. All rights reserved.</div>
        </div>
      </div>
  <div className='h-[1500px] md:h-[900px] lg:h-[900px] w-full bg-lime-500'>
    <div className='h-[700px] w-full bg-amber-300'> 
      <div className='h-[150px] w-full bg-red-500'></div>
      <div className='h-[1300px] md:h-[700px] lg:h-[700px] w-full bg-blue-900'>
        <div className='h-[370px] md:h-[180px] lg:h-[180px] w-full bg-green-500 flex justify-center items-center'>
          <div className='h-[350px] md:h-[170px] lg:h-[170px] md:w-[50%] lg:w-[50%] w-full bg-amber-950  justify-center items-center md:p-2 lg:p-2 p-2'> <div className='text-white font-bold top-0 md:ml-[40%] lg:ml-[40%] ml-[35%]'>our loan Service</div>
            <ul className='h-[290px] md:h-[130px] lg:h-[130px] md:w-full lg:w-full w-full bg-amber-300 grid grid-cols-2 md:flex lg:flex justify-center items-center gap-1 '>
            <li className='md:h-[40px] lg:h-[40px] md:w-[100px] lg:w-[150px] w-[150px] rounded-full bg-white ml-4 md:ml-0 lg:ml-0  flex justify-center items-center'>Service 1</li>
            <li className='md:h-[40px] lg:h-[40px] md:w-[100px] lg:w-[150px] w-[150px] rounded-full bg-white mr-3 md:mr-0 lg:mr-0  flex justify-center items-center'>Service 2</li>
            <li className='md:h-[40px] lg:h-[40px] md:w-[100px] lg:w-[150px] w-[150px] rounded-full bg-white ml-4  md:ml-0 lg:ml-0 flex justify-center items-center'>Service 3</li>
            <li className='md:h-[40px] lg:h-[40px] md:w-[100px] lg:w-[150px] w-[150px] rounded-full bg-white mr-3 md:mr-0 lg:mr-0  flex justify-center items-center'>Service 4</li>
            <li className='md:h-[40px] lg:h-[40px] md:w-[100px] lg:w-[150px] w-[150px] rounded-full bg-white ml-30 md:ml-0 lg:ml-0 flex justify-center items-center mt-[-10px] md:mt-0 lg:mt-0'>Service 5</li>


          </ul>
          </div>
          
        </div>
        <div className='h-[900px] md:h-[500px] lg:h-[500px] w-full bg-yellow-500 md:flex lg:flex'> 
          <div className='h-[220px] md:h-[500px] lg:h-[500px] w-full md:w-[50%] lg:w-[50%] bg-amber-50 flex justify-center items-center text-4xl'>image here</div>
          <div className='h-[250px] md:h-[500px] lg:h-[500px] w-full  md:w-[50%] lg:w-[50%] bg-red-300 hidden md:grid lg:grid'>
            
            <div className='h-0 md:h-[250px] lg:h-[250px] w-0 md:w-full lg:w-full md:mt-[-10px] lg:mt-[-2px] bg-blue-700 flex justify-center items-center text-4xl'>image here</div>
            <div className='h-0 md:h-[250px] lg:h-[250px] w-0 md:w-full lg:w-full md:flex lg:flex bg-emerald-100 '>
              <div className='h-0 md:h-[250px] lg:h-[250px] w-0 md:w-[50%] bg-cyan-400 flex justify-center items-center text-4xl  '>image here</div>
              <div className='h-0 md:h-[250px] lg:h-[250px] w-0 md:w-[50%] bg-red-700 flex justify-center items-center text-4xl '>image here </div>
            </div>
          </div>
          <div className='h-[220px] w-full md:w-0 lg:w-0 bg-lime-600 flex justify-center items-center text-4xl  md:hidden lg:hidden'> image here </div>
          <div className='h-[220px] w-full md:w-0 lg:w-0 bg-purple-600 flex justify-center items-center text-4xl  md:hidden lg:hidden'> image here </div>
          <div className='h-[220px] w-full md:w-0 lg:w-0 bg-blue-500 flex justify-center items-center text-4xl  md:hidden lg:hidden'> image here </div>

        </div>
       </div>
      </div>
   
    </div>
    <div className='h-[1350px] md:h-[850px] lg:h-[850px] w-full bg-cyan-800 md:flex lg:flex'>
      <div className='h-[680px] w-full md:w-[50%] lg:[50%] bg-red-200 '>
        <div className="text-4xl"> our work process</div>
        <div className="text-3xl">Strategy is the key to success</div>
        <div className="grid md:flex lg:flex h-[150px] bg-yellow-200 md:mt-5 lg:mt-5">
          <div className="h-[40px] md:h-[80px] lg:h-[80px] w-[50%] md:w-[20%] lg:w-[20%] bg-blue-400 flex justify-center items-center text-4xl ml-[25%] md:ml-0 lg:ml-0">ICON HERE</div>
          <div className="h-[100px] md:h-[150px] lg:h-[170px] w-full md:w-[80%] lg:[80%] bg-green-300 grid"> 
            <span className='h-[5px] w-full'>BEST IMPLIMENTATION</span>
            <span className='h-[10px] w-full'>We offer easy soft payable loans come and get yours here blah blah</span>
          </div>
        </div>
       <div className="grid md:flex lg:flex h-[150px] bg-yellow-200 md:mt-5 lg:mt-5">
          <div className="h-[40px] md:h-[80px] lg:h-[80px] w-[50%] md:w-[20%] lg:w-[20%] bg-blue-400 flex justify-center items-center text-4xl ml-[25%] md:ml-0 lg:ml-0">ICON HERE</div>
          <div className="h-[100px] md:h-[150px] lg:h-[170px] w-full md:w-[80%] lg:[80%] bg-green-500 grid"> 
            <span className='h-[5px] w-full'>BEST IMPLIMENTATION</span>
            <span className='h-[10px] w-full'>We offer easy soft payable loans come and get yours here blah blah</span>
          </div>
        </div>
        <div className="grid md:flex lg:flex h-[150px] bg-yellow-200 md:mt-5 lg:mt-5">
          <div className="h-[40px] md:h-[80px] lg:h-[80px] w-[50%] md:w-[20%] lg:w-[20%] bg-blue-400 flex justify-center items-center text-4xl ml-[25%] md:ml-0 lg:ml-0">ICON HERE</div>
          <div className="h-[100px] md:h-[150px] lg:h-[170px] w-full md:w-[80%] lg:[80%] bg-green-700 grid"> 
            <span className='h-[5px] w-full'>BEST IMPLIMENTATION</span>
            <span className='h-[10px] w-full'>We offer easy soft payable loans come and get yours here blah blah</span>
          </div>
        </div>
        <div className="grid md:flex lg:flex h-[172px] bg-yellow-200 md:mt-5 lg:mt-5">
          <div className="h-[40px] md:h-[80px] lg:h-[80px] w-[50%] md:w-[20%] lg:w-[20%] bg-blue-400 flex justify-center items-center text-4xl ml-[25%] md:ml-0 lg:ml-0">ICON HERE</div>
          <div className="h-[100px] md:h-[150px] lg:h-[175px] w-full md:w-[80%] lg:[80%] bg-green-900 grid"> 
            <span className='h-[5px] w-full'>BEST IMPLIMENTATION</span>
            <span className='h-[10px] w-full'>We offer easy soft payable loans come and get yours here blah blah</span>
          </div>
        </div>

      </div>
      <div className='bg-red-500 h-[630px] md:h-[780px] lg:h-[780px] w-full md:w-[50%] lg:w-[50%]'>
        <div className="md:h-[390px] lg:h-[390px] h-[390px] md:w-full lg:w-full w-0 bg-amber-200  justify-center items-center text-4xl hidden md:flex lg:flex"> IMAGE HERE</div>
        <div className="md:h-[390px] lg:h-[390px] h-[420px] md:w-full lg:w-full w-full bg-yellow-600   justify-center items-center text-4xl "> <div className='bg-gray-800 h-[420px] md:h-[390px] lg:h-[390px] flex  w-full justify-center items-center'>IMAGE HERE</div>
         
        </div>
         <div className='h-[80px] w-[260px] bg-green-100   mt-[10px] md:mt-[-100px] lg:mt-[-90px] md:ml-[50px] lg:ml-[20px] rounded-full flex gap-3 justify-center items-center'> 
          <div className='h-[80px] w-[80px] bg-amber-200 rounded-full md:ml-[-20px] lg:ml-[-10px] ml-[-20px] flex justify-center items-center text-[10px]'> ICON HERE </div>
          <div className='h-[80px] w-fit  grid'> <span className='text-2xl w-full mt-[10px]'>10K+</span>  <span className='text-[18px] mt-[-40px] flex justify-center items-center'>projects complete</span> </div>
        </div>
        
      </div>
    </div>
    <div className='h-[800px] md:h-[500px] lg:h-[500px] w-full bg-indigo-600 md:flex lg:flex '>
      <div className="h-[350px] md:h-[450px] lg:h-[450px] w-full md:w-[50%] lg:w-[50%] bg-emerald-600">
        <div className="grid">
          <span className='text-3xl w-full ml-2  mt-10 justify-center items-center'>ASK ANYTHING</span>
          <span className='text-2xl w-full ml-2  justify-center items-center'>you can contact us for any question</span>
        </div>
        <div className="h-[250px] w-full bg-red-400 flex flex-col justify-center ">
          <div>
            <span className='text-1xl w-full ml-2 flex justify-center items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, repellendus.</span>
            </div>
          <div className='md:flex lg:flex grid gap-2 ml-2 mt-2'>
            <div className="h-[70px] md:h-[80px] lg:h-[80px] w-[150px] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl bg-green-400 grid">
              <span className='text-2xl flex justify-center items-center'>10+</span>
              <span className='text-[13px] flex justify-center items-center ml-2 mt-[-5px]'>EXPERIENCE</span>
            </div>
            <div className="h-[70px] md:h-[80px] lg:h-[80px] w-[150px] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl bg-green-700 grid">
              <span  className=' text-2xl flex justify-center items-center'>50+</span>
              <span className='text-[13px] flex justify-center items-center ml-2 mt-[-5px]'> HAPPY CLIENTS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[350px] md:h-[450px] lg:h-[450px]  w-full md:w-[50%] lg:w-[50%] bg-amber-300">

        <div className=' w-[96%] md:w-[90%] lg:w-[46%] h-[600px] bg-purple-300 p-4 mt-10 absolute md:block lg:block z-0 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl ml-[2%] md:ml-[2%] lg:ml-[2%]'>
    <div className='w-full bg-blue-500'>
           <button
            onClick={() => setOpenStack(openStack === 1 ? null : 1)}
            className='h-[90px] w-full bg-red-500 flex justify-between items-center p-4 text-xl text-white'
            >
            <span>Flexible Loan Solutions</span>
            <span>{openStack === 1 ? '-' : '+'}</span>
          </button>
          {openStack === 1 && (
          <div className='w-full bg-amber-200 p-4'>
         Find a loan option that suits your needs. We offer clear terms and flexible repayment plans, subject to eligibility and approval.
        </div>
         )}
    </div>

  <div className='w-full bg-blue-500 mt-2'>
    <button
      onClick={() => setOpenStack(openStack === 2 ? null : 2)}
      className='h-[90px] w-full bg-green-600 flex justify-between items-center p-4 text-xl text-white'
    >
      <span>A Simple Application Process</span>
      <span>{openStack === 2 ? '-' : '+'}</span>
    </button>
    {openStack === 2 && (
      <div className='w-full bg-amber-200 p-4'>
         Apply by providing the required information and documents. Our team will review your application and guide you through the next steps.
      </div>
    )}
  </div>

  <div className='w-full bg-blue-500 mt-2'>
    <button
      onClick={() => setOpenStack(openStack === 3 ? null : 3)}
      className='h-[90px] w-full bg-blue-600 flex justify-between items-center p-4 text-xl text-white'
    >
      <span>Clear Rates and Terms</span>
      <span>{openStack === 3 ? '-' : '+'}</span>
    </button>
    {openStack === 3 && (
      <div className='w-full bg-amber-200 p-4'>
         Understand the costs before you borrow. We explain applicable interest, fees, repayment schedules, and loan conditions so you can make an informed decision.
      </div>
    )}
  </div>
   <div className='w-full bg-cyan-500 mt-2'>
    <button
      onClick={() => setOpenStack(openStack === 4 ? null : 4)}
      className='h-[90px] w-full bg-cyan-500 flex justify-between items-center p-4 text-xl text-white'
    >
      <span>Repayment Support</span>
      <span>{openStack === 4 ? '-' : '+'}</span>
    </button>
    {openStack === 4 && (
      <div className='w-full bg-amber-200 p-4'>
         We’re here to help you stay informed throughout your repayment period. Contact our support team with questions about your account or payment schedule.

      </div>
    )}
  </div>
</div>
      </div>
    </div>
    <div className='h-[600px] w-full bg-blue-900'>hey</div>
  </div>
  )
}

export default HomeComp
