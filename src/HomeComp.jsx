import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import officeWoman from './assets/photos/office woman.jpg';
import officeBackground from './assets/photos/images.bg.jpg';
import teamworkPhoto from './assets/photos/High five teamwork and working together with a team or group of colleagues standing together in their corporate office motivation success and achievement through unity solidarity and trust _ Premium….jpg';
import dataScienceMeeting from './assets/photos/Act 1_ Create - The People.jpg';
import customerServicePhoto from './assets/photos/Customer service cute guy in grey suit with computer and headset smiling and showing good gesture _ Premium AI-generated image.jpg';
import smilingLaptopPhoto from './assets/photos/Beautiful image smiling and sitting in front of laptop.jpg';
import professionalMan from './assets/photos/AI created Realistic Professional man.jpg';
import Business from './assets/photos/Business.jpg';
import lowRates from './assets/photos/lowRate.jpg';
import easypay from './assets/photos/easyPay.jpg';
import fastmoney from './assets/photos/fastMoney.jpg';
import image10 from './assets/photos/image10.jpg';
import image11 from './assets/photos/image11.jpg';
import image12 from './assets/photos/image12.jpg';
import image13 from './assets/photos/image13.jpg';
import image20 from './assets/photos/image20.jpg';
import image21 from './assets/photos/image21.jpg';
import image22 from './assets/photos/image22.jpg';
import image23 from './assets/photos/image23.jpg';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faFacebook, faInstagram, faX, faLinkedinIn, faWhatsapp, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


library.add(fas, far, fab);

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';



function HomeComp() {
  const [side, setSide] = useState(true)
  
  const [openStack, setOpenStack] = useState(null)
  const swiperRef = useRef(null)
  const teamSwiperRef = useRef(null)


  return (
    <div className='h-[17000px] w-full  bg-yellow-200'>
      <div className='h-[120px] w-full bg-gray-400 flex items-center p-4.5 md: lg:p- sticky z-10 top-0'>
        <div
          className='h-[100px] w-[50%] md:w-[20%] lg:w-[20%] bg-blue-600 md:bg-blue-800 lg:bg-blue-800 z-10 left-[2%] lg:absolute md:absolute md:mr-[0%] lg:ml-[0%]'
          style={{ clipPath: 'polygon(0 0, 100% 0%, 54% 100%, 0% 100%)' }}
        ></div>
        <div className='lg:h-[100px] md:h-[100px] w-0 md:w-[100%] lg:w-[70%] md:ml-30 lg:ml-35 bg-purple-400 '>
            <div className=' hidden md:flex lg:flex lg:h-[40px] md:h-[40px]  '>
                <div className='h-[40px] w-full bg-amber-400 flex justify-end items-center text-[15px] text-lg font-bold  border-b-1 border-black gap-2'>
                  <div className='h-[30px] w-[30px]  rounded-full flex justify-center items-center cursor-pointer'> <FontAwesomeIcon icon={['fab', 'facebook']} className='hover:text-blue-500 text-2xl ' /></div>
                  <div className='h-[30px] w-[30px]  rounded-full flex justify-center items-center cursor-pointer'> <FontAwesomeIcon icon={['fab', 'instagram']} className='hover:text-blue-500 text-2xl' /></div>
                  <div className='h-[30px] w-[30px]  rounded-full flex justify-center items-center cursor-pointer'> <FontAwesomeIcon icon={['fab', 'twitter']} className='hover:text-blue-500 text-2xl' /></div>
                  <div className='h-[30px] w-[30px]  rounded-full mr-5 flex justify-center items-center cursor-pointer'> <FontAwesomeIcon icon={['fab', 'linkedin']} className='hover:text-blue-500 text-2xl' /></div>
                </div>
            </div>
            <div className='lg:h-[60px] md:h-[60px] w-full bg-amber-400 flex justify-center items-center gap-3'>
                <div className='lg:h-[50px] md:h-[50px] w-[80%]  ml-18 p-2 '>
                  <ul className='flex justify-between  h-[50px] w-full gap-1'>
                    <ol className='h-[30px] w-[20%] flex justify-center items-center text-amber-50 text-[15px] text-lg font-bold cursor-pointer hover:text-blue-800'>HOME</ol>
                    <ol className='h-[30px] w-[20%] flex justify-center items-center text-amber-50 text-[15px] text-lg font-bold cursor-pointer hover:text-blue-800'>ABOUT</ol>
                    <ol className='h-[30px] w-[20%] flex justify-center items-center text-amber-50 text-[15px] text-lg font-bold cursor-pointer hover:text-blue-800'>SERVICES</ol>
                    <ol className='h-[30px] w-[25%] flex justify-center items-center text-amber-50 text-[15px] text-lg font-bold cursor-pointer hover:text-blue-800'>PRODUCTS</ol>
                    <ol className='h-[30px] w-[25%] flex justify-center items-center text-amber-50 text-[15px] text-lg font-bold cursor-pointer hover:text-blue-800'>CALCULATOR</ol>
                    <ol className='h-[30px] w-[20%] flex justify-center items-center text-amber-50 text-[15px] text-lg font-bold cursor-pointer hover:text-blue-800'>FAQs</ol>
                    <ol className='h-[30px] w-[20%] flex justify-center items-center text-amber-50 text-[15px] text-lg font-bold cursor-pointer hover:text-blue-800'>CONTACT</ol>

                  </ul>
                </div>
                {/* <div className='lg:h-[60px] md:h-[50px] w-[20%] bg-yellow-500 ml-10 flex justify-center items-center'>
                  <ul className='flex items-center h-[50px] w-full gap-3 '>
                    <ol className='h-[50px] w-[50px] rounded-full bg-amber-800 flex justify-center items-center text-amber-50 text-[10px] '>MENU 1</ol>
                    <ol className='h-[50px] w-[120px] rounded-full bg-green-500 flex justify-center items-center text-amber-50 text-[10px]'>MENU 1</ol>
                  </ul>
                  
                </div> */}
            </div>

        </div>

        <div className='h-[100px] md:h-[100px] lg:h-[100px] w-[90%] lg:w-[20%] bg-blue-800 absolute lg:static md:static flex justify-center'>
          <div className='h-[60px] w-[190px] bg-amber-400  justify-center items-center text-amber-50 hidden md:flex lg:flex md:mt-5 lg:mt-6 rounded-[190px]'> <span className='h-[60px] w-[100px]   flex justify-center items-center mr-2 text-lg font-bold'>Get Started</span>  <span className='text-lg font-bold flex items-center justify-center'> <FontAwesomeIcon icon="arrow-right-long" className='text-white text-2xl' /></span> </div>  
          <button type="button" aria-label="Open menu" onClick={() => setSide(false)} className='left-30 relative md:hidden lg:hidden'><FontAwesomeIcon icon="gear" /></button>
            
          <div className={`h-[800px] w-[400px] bg-green-400 top-0 z-10 ml-[-20px] absolute transition-all duration-300 md:hidden lg:hidden flex-col mt-[-10px] ${
              side ? 'left-[400px] ' : 'left-0 '}`}>
                 <div className='h-[50px] w-full bg-white flex items-center'>
                    <button onClick={()=> setSide(true)} className='flex justify-center items-center bg-amber-300 w-[50px] h-[40px] ml-75'><FontAwesomeIcon icon="gear" /></button>
                    </div>
   
                    <ul className='flex-col h-[480px] w-full gap-2 mt-[50] justify-start'>
                    <ol className='h-[80px] w-full bg-cyan-500 flex items-center p-2'>HOME</ol>
                    <ol className='h-[80px] w-full bg-fuchsia-700 flex items-center p-2'>CONTACT</ol>
                    <ol className='h-[80px] w-full bg-amber-200 flex items-center p-2'>ABOUT</ol>
                    <ol className='h-[80px] w-full bg-amber-900 flex items-center p-2'>SERVICE</ol>
                    <ol className='h-[80px] w-full bg-lime-400 flex items-center p-2'>LOAN PRODUCTS</ol>
                    <ol className='h-[80px] w-full bg-orange-300 flex items-center p-2'>BLOG</ol>

                    </ul>
                    <div className='h-[250px] bg-blue-600 flex mt-[-50]'> 
                        <div className='h-[100px] w-full bg-red-300 mt-3 text-2xl'>CONTACT</div>
                    </div>
          </div>
        </div>
      </div>


      <div className='h-[800px] md:h-[500px] lg:h-[500px] w-full bg-blue-400 '> 
          <div className='h-[800px] w-full md:flex lg:flex '>
            <div className='h-[800px] md:h-[500px] lg:h-[500px] w-full md:w-[50%] lg:w-[50%] bg-white lg:static md:static'>
              <div className='h-[100px] w-full bg-white  text-3xl grid md:flex lg:flex justify-center items-center '><span className='text-3xl font-bold text-blue-500'>Smart Financial Solutions.</span> <span className='text-2xl font-bold ml-2 text-amber-400 mt-[-30px] md:mt-0 lg:mt-0'>A Better Tomorrow</span> </div>
              
              <div className='h-[150px] w-full  mt-3 flex justify-center items-center p-1 '> <span className='text-[15px] md:text-[20px] lg:text-[20px]'> At CherishKash, we believe financial convenience should be accessible to everyone. Explore a smarter way to manage your financial needs.</span></div>
              <div className='h-[55px] w-full   mt-3 text-[15px] md:text-[20px] lg:text-[20px] flex justify-center items-center font-bold text-blue-800 mt-[-20px]'>Your needs. Your goals. Our commitment.</div>
              <button className='h-[70px] w-[210px] rounded-full  bg-blue-800 text-2xl flex justify-center items-center mt-6 md:mt-10 lg:mt-10 ml-2 cursor-pointer'><span className='h-[60px] w-[60px] bg-amber-400 rounded-full flex justify-center items-center ml-2'><FontAwesomeIcon icon="phone" className='text-white text-4xl' /></span>  <span className='text-lg font-bold'>REQUEST A CALL</span></button>
              
            </div>
            <div className='h-[300px] md:h-[500px] lg:h-[500px] w-full md:w-[50%] lg:w-[50%] bg-white  lg:static md:static  mt-[-370px] lg:mt-[0px] md:p-2 lg:p-2 '><img src={Business} alt="" className="h-full w-full object-cover rounded-2xl" /></div>
          </div>
            
      </div>


      <div className='h-[600px] w-full bg-purple-300 grid mt-10 md:flex lg:flex'>
        <div className='h-[300px] md:h-[600px] lg:h-[600px] mt-0 md:mt-0 lg:mt-0 w-full md:w-[50%] lg:w-[50%] bg-red-600 text-7xl flex items-center'><img src={smilingLaptopPhoto} alt="" className="h-full w-full object-cover" /></div>
        <div className='h-[600px] md:h-[600px] lg:h-[600px] w-full md:w-[50%] lg:w-[50%] bg-gray-400 p-4'> 
          <div className='h-[270px] md:h-[450px] lg:h-[450px] w-full   bg-blue-800 md:flex lg:flex justify-center items-center p-4'> 
            <ul className='grid grid-cols-3 md:grid lg:grid'>
              <li className='h-[70px] md:h-[100px] lg:h-[100px] w-[120px] md:w-[180px] lg:w-[180px] bg-amber-400 rounded-2xl flex  flex-col justify-center items-center text-[12px] md:text-[15px] lg:text-[15px]  font-bold text-lg text-white '> <span><FontAwesomeIcon icon='user' className='text-3xl'/></span>  <span className='cursor-default'>create an Account</span> </li>
              <li className='h-[70px] md:h-[100px] lg:h-[100px] w-[80px] md:w-[80px] lg:w-[80px]  flex justify-center items-center ml-[10px] md:ml-10 lg:ml-12 '> <FontAwesomeIcon icon="arrow-right-long" className='text-white text-4xl md:text-6xl lg:text-6xl' /></li>
              <li className='h-[70px] md:h-[100px] lg:h-[100px] w-[120px] md:w-[180px] lg:w-[180px] bg-amber-400 rounded-2xl flex flex-col justify-center items-center text-[11px] md:text-[15px] lg:text-[15px] font-bold ml-[-10px] md:ml-0 lg:ml-0 text-white'> <span><FontAwesomeIcon icon='file-lines' className='text-3xl' /></span> <span className='cursor-default'>Submit an application</span></li>
              <li className=' h-[70px] md:h-[100px] lg:h-[100px] w-[50px] md:w-[80px] lg:w-[80px] hidden md:flex lg:flex justify-center items-center ml-[25%] mt-5'> <FontAwesomeIcon icon="arrow-up-long" className='text-white text-6xl' /></li>
              <li className=' h-[70px] w-[120px] md:hidden lg:hidden flex justify-center items-center'><FontAwesomeIcon icon="arrow-up-long" className='text-white text-4xl' /></li>
              <li className='h-[50px] w-[100px]  rounded-2xl  md:hidden lg:hidden'></li>
              <li className='h-[70px] w-[120px]  rounded-2xl hidden md:flex lg:flex text-[12px]  justify-center items-center'></li>
              <li className='h-[70px] w-[120px] flex justify-center items-center md:hidden lg:hidden'><FontAwesomeIcon icon="arrow-down-long" className='text-white text-4xl' /></li>
            

              <li className=' h-[70px] md:h-[100px] lg:h-[100px] w-[50px] md:w-[80px] lg:w-[80px] hidden md:flex lg:flex  justify-center items-center mt-5 ml-[25%]' ><FontAwesomeIcon icon="arrow-down-long" className='text-white text-6xl ' /></li>
              <li className='h-[70px] md:h-[100px] lg:h-[100px] w-[120px] md:w-[180px] lg:w-[180px] bg-amber-400 rounded-2xl hidden md:flex lg:flex md:flex-col lg:flex-col justify-center items-center mt-5 text-white'> <span><FontAwesomeIcon icon='magnifying-glass' className='text-3xl'/></span> <span className='cursor-default'>Receive your funds</span></li>
              <li className='h-[70px] w-[120px] bg-amber-400 rounded-2xl  md:hidden lg:hidden text-[12px] font-bold flex flex-col justify-center items-center text-white'><span><FontAwesomeIcon icon='magnifying-glass' className='text-3xl' /></span> <span className='cursor-default'>Receive your funds</span></li>

              <li className=' h-[70px] w-[80px] md:hidden lg:hidden flex justify-center items-center ml-[10px]'><FontAwesomeIcon icon="arrow-left-long" className='text-white text-4xl' /></li>

              <li className='h-[70px] w-[120px] bg-amber-400 rounded-2xl  md:hidden lg:hidden ml-[-10px] flex flex-col justify-center items-center text-[12px] font-bold text-white'> <span><FontAwesomeIcon icon='circle-check' className='text-3xl' /></span> <span className='cursor-default'>Wait for approval</span></li>
              <li className=' h-[70px] md:h-[100px] lg:h-[100px] w-[120px] md:w-[80px] lg:w-[80px] md:flex lg:flex hidden justify-center items-center ml-[-10px] md:ml-[25%]  mt-5'><FontAwesomeIcon icon="arrow-left-long" className='text-white text-6xl' /></li>
              <li className='h-[70px] md:h-[100px] lg:h-[100px] w-[130px] md:w-[180px] lg:w-[180px] bg-amber-400 rounded-2xl hidden  md:flex lg:flex md:flex-col lg:flex-col ml-[0px]  justify-center items-center text-[12px] font-bold mt-5 text-white'> <span><FontAwesomeIcon icon='circle-check' className='text-3xl' /></span> <span className='cursor-default'>Wait for approval</span></li>




            </ul>
          </div>
        
          <button className='h-[70px] w-[200px] rounded-full  bg-amber-50 mt-4 lg:mt-5'>About Us</button>
        </div>
      </div>


      <div className='relative isolate h-[1100px] md:h-[800px] lg:h-[800px] w-full bg-gray-400 mt-30'>
        <div className='h-[200px] w-full bg-blue-800 flex'>
          <div className='h-[50px] w-[100%] md:w-[60%] lg:w-[60%]  mt-5'><div className='text-cyan-400 ml-2'>FEATURED SERVICES</div>  <div className='text-4xl w-[50%] ml-2'>mind blowing loan terms</div></div>
          <div className='h-[0px] md:h-[50px] lg:h-[50px]  md:w-[40%] lg:w-[40%] text-xl flex gap-2  justify-center items-center mt-5'>
            <button onClick={() => swiperRef.current?.slidePrev()} className='hidden md:block lg:block md:h-[40px] lg:h-[40px]  md:w-[100px] lg:w-[100px] rounded-full bg-red-300 text-white'>prev</button>
            <button onClick={() => swiperRef.current?.slideNext()} className='hidden md:block lg:block md:h-[40px] lg:h-[40px]  md:w-[100px] lg:w-[100px] bg-green-500 rounded-full text-white'>next</button>
          </div>
        </div>
        <div className='relative z-20 h-[400px] w-full bg-gray-400'>
          <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper }}
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
        <SwiperSlide>
          <div className='relative z-20 mt-[50px] h-[300px] w-[90%] -translate-y-6 bg-red-500'>
            <div className='absolute inset-0 overflow-hidden'>
               <img src={fastmoney} alt="" className="h-full w-full object-cover" />

              <div className='h-full w-full bg-blue-500 flex justify-center items-center'>QUICK LOANS</div>
            </div>
            <div className='absolute right-4 top-0 z-30 h-[50px] w-[15%] -translate-y-8 bg-red-500 md:h-[70px] lg:h-[70px]'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className='relative z-20 mt-[50px] h-[300px] w-[90%] -translate-y-6 bg-green-500'>
          <div className='absolute inset-0 overflow-hidden'>
            <img src={lowRates} alt="" className="h-full w-full object-cover" />
          </div>
          <div className='absolute right-4 top-0 z-30 h-[50px] w-[15%] bg-red-500 md:h-[70px] lg:h-[70px] -translate-y-8'></div>
        </div></SwiperSlide>
        <SwiperSlide>
          <div className='relative z-20 mt-[50px] h-[300px] w-[90%] -translate-y-6 bg-yellow-500'>
            <div className='absolute inset-0 overflow-hidden'>
               <img src={easypay} alt="" className="h-full w-full object-cover" />
              <div className='h-full w-full bg-yellow-500 flex justify-center items-center'>CONVENIENT PAYMENT</div>
            </div>
            <div className='absolute right-4 top-0 z-30 h-[50px] w-[15%] -translate-y-8 bg-red-500 md:h-[70px] lg:h-[70px]'></div>
          </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
        <div className='relative z-0 h-[450px] md:h-[150px] lg:h-[150px] w-[80%] bg-amber-400 flex justify-center items-center mt-5 md:absolute lg:absolute md:mt-[120px] lg:mt-[120px] ml-[10%]'>
          <div className='text-xl text-gray-600'>© 2023 Your Company. All rights reserved.</div>
        </div>
      </div>
  <div className='h-[1800px] md:h-[900px] lg:h-[900px] w-full bg-white'>
    <div className='h-[2500px] w-full bg-amber-300'> 
      <div className='h-[150px] w-full bg-gray-400 mt-[-2px]'></div>
      <div className='h-[1300px] md:h-[700px] lg:h-[700px] w-full bg-white'>
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
        <div className='h-[1100px] md:h-[500px] lg:h-[500px] w-full bg-white md:flex lg:flex gap-3 justify-center items-center mt-[-30px] md:mt-0 lg:mt-0'> 
          <div className='h-[250px] md:h-[220px] lg:h-[220px] md:h-[480px] lg:h-[480px] w-full md:w-[48%] lg:w-[48%] mt-[60px] md:mt-0 lg:mt-0 flex justify-center items-center '><img src={image10} alt=""  className="h-full w-full object-cover rounded-2xl" /></div>
          <div className='h-[250px] md:h-[480px] lg:h-[480px] w-full  md:w-[48%] lg:w-[48%]  hidden md:grid lg:grid'>
            
            <div className='h-0 md:h-[240px] lg:h-[230px] w-0 md:w-full lg:w-full md:mt-[-10px] lg:mt-[-2px]  flex justify-center items-center text-4xl'><img src={image11} alt=""  className="h-full w-full object-cover rounded-2xl" /></div>
            <div className='h-0 md:h-[240px] lg:h-[230px] w-0 md:w-full lg:w-full md:flex lg:flex  gap-2 '>
              <div className='h-0 md:h-[230px] lg:h-[230px] w-0 md:w-[50%] lg:w-[50%]   flex justify-center items-center  mt-[10px] '><img src={image12} alt=""  className="h-full w-full object-cover rounded-2xl" /></div>
              <div className='h-0 md:h-[230px] lg:h-[230px] w-0 md:w-[50%] lg:w-[50%] flex justify-center items-center  mt-[10px] '> <img src={image13} alt=""  className="h-full w-full object-cover rounded-2xl" /> </div>
            </div>
          </div>
          <div className='h-[250px] w-full mt-[20px]  md:w-0 lg:w-0 flex justify-center items-center text-4xl  md:hidden lg:hidden'> <img src={image12} alt=""  className="h-full w-full object-cover rounded-2xl" /> </div>
          <div className='h-[250px] w-full mt-[20px] md:w-0 lg:w-0  flex justify-center items-center text-4xl  md:hidden lg:hidden'> <img src={image13} alt=""  className="h-full w-full object-cover rounded-2xl" /> </div>
          <div className='h-[250px] w-full mt-[20px] md:w-0 lg:w-0  flex justify-center items-center text-4xl  md:hidden lg:hidden'> <img src={image11} alt=""  className="h-full w-full object-cover rounded-2xl" /> </div>

        </div>
       </div>
      </div>
   
    </div>
    <div className='h-[1700px] md:h-[850px] lg:h-[950px] w-full bg-gray-400 md:flex lg:flex md:p-4 lg:p-5'>
      <div className='h-[880px] w-full md:w-[50%] lg:[50%] bg-white mt-10 md:mt-0 lg:mt-0 p-6'>
        <div className=" h-[100px] w-full text-4xl   items-center grid"> 
          <span className=" h-[50px] w-full text-3xl">our work process</span>
           <span className=" h-[50px] w-full text-3xl">Strategy is the key to success</span>
        </div>
       
        <div className="grid md:flex lg:flex h-[150px] bg-white mt-5 md:mt-5 lg:mt-5">
          <div className="h-[40px] md:h-[160px] lg:h-[160px] w-[20%] md:w-[10%] lg:w-[10%] bg-amber-400 flex justify-center items-center text-4xl ml-[40%] md:ml-0 lg:ml-0 mt-1 md:mt-2 lg:mt-2"><FontAwesomeIcon icon="shield" className='text-white' /></div>
          <div className="h-[112px] md:h-[160px] lg:h-[160px] w-full md:w-[90%] lg:[90%] bg-gray-400 grid mt-2 p-2 rounded-tr-2xl rounded-br-2xl"> 
            <span className='h-[5px] w-full'>BEST IMPLIMENTATION</span>
            <span className='h-[10px] w-full'>We offer easy soft payable loans come and get yours here blah blah</span>
          </div>
        </div>
       <div className="grid md:flex lg:flex h-[150px] bg-white mt-5 md:mt-5 lg:mt-5">
          <div className="h-[40px] md:h-[160px] lg:h-[160px] w-[70px] md:w-[10%] lg:w-[10%] bg-amber-400 flex justify-center items-center text-4xl ml-[40%] md:ml-0 lg:ml-0 mt-1 md:mt-2 lg:mt-2 "><FontAwesomeIcon icon="bolt" className='text-white' /></div>
          <div className="h-[112px] md:h-[160px] lg:h-[160px] w-full md:w-[90%] lg:[90%] bg-gray-400 grid mt-2 p-2  rounded-tr-2xl rounded-br-2xl "> 
            <span className='h-[5px] w-full'>BEST IMPLIMENTATION</span>
            <span className='h-[10px] w-full'>We offer easy soft payable loans come and get yours here blah blah</span>
          </div>
        </div>
        <div className="grid md:flex lg:flex h-[150px] bg-white mt-5 md:mt-5 lg:mt-5 justify-center items-center">
          <div className="h-[40px] md:h-[160px] lg:h-[160px] w-[70px] md:w-[10%] lg:w-[10%] bg-amber-400 flex justify-center items-center text-4xl ml-[40%] md:ml-0 lg:ml-0 mt-1 md:mt-2 lg:mt-6 "><FontAwesomeIcon icon="handshake" className='text-white' /></div>
          <div className="h-[112px] md:h-[160px] lg:h-[160px] w-full md:w-[90%] lg:[90%] bg-gray-400 grid mt-2 md:mt-5 lg:mt-6 p-2  rounded-tr-2xl rounded-br-2xl "> 
            <span className='h-[5px] w-full '>BEST IMPLIMENTATION</span>
            <span className='h-[10px] w-full '>We offer easy soft payable loans come and get yours here blah blah</span>
          </div>
        </div>
        <div className="grid md:flex lg:flex h-[160px] bg-white mt-5 md:mt-5 lg:mt-5">
          <div className="h-[40px] md:h-[160px] lg:h-[160px] w-[70px] md:w-[10%] lg:w-[10%] bg-amber-400 flex justify-center items-center text-4xl ml-[40%] md:ml-0 lg:ml-0 mt-1 md:mt-2 lg:mt-2 "><FontAwesomeIcon icon="lock" className='text-white' /></div>
          <div className="h-[112px] md:h-[160px] lg:h-[160px] w-full md:w-[90%] lg:[90%] bg-gray-400 grid mt-2 p-2  rounded-tr-2xl rounded-br-2xl"> 
            <span className='h-[5px] w-full'>BEST IMPLIMENTATION</span>
            <span className='h-[10px] w-full'>We offer easy soft payable loans come and get yours here blah blah</span>
          </div>
        </div>

      </div>
      <div className='bg-white h-[800px] md:h-[780px] lg:h-[980px] w-full md:w-[50%] lg:w-[50%] grid md:p-4 lg:p-5'>
        <div className="md:h-[470px] lg:h-[470px] h-[450px] md:w-full lg:w-full w-0   justify-center items-center text-4xl hidden md:flex lg:block"> <img src={image21} alt=""  className="h-full w-full object-cover rounded-2xl" /> </div>
        <div className="md:h-[470px] lg:h-[470px] h-[450px] md:w-full lg:min-w-full w-full mt-[10px]"> <img src={officeWoman} alt=""  className="h-full w-full object-cover  rounded-2xl" /> </div>
         <div className='h-[80px] w-[260px] bg-green-100 mt-[-160px] md:mt-[-100px] lg:mt-[-130px] md:ml-[50px] lg:ml-[20px] rounded-full flex gap-3 justify-center items-center'> 
          <div className='h-[80px] w-[80px] bg-amber-200 rounded-full md:ml-[-20px] lg:ml-[-10px] ml-[-20px] flex justify-center items-center text-[10px]'> ICON HERE </div>
          <div className='h-[80px] w-fit  grid'> <span className='text-2xl w-full mt-[10px]'>10K+</span>  <span className='text-[18px] mt-[-40px] flex justify-center items-center'>projects complete</span> </div>
        </div>
        
      </div>
    </div>
    <div className='h-[800px] md:h-[500px] lg:h-[500px] w-full bg-indigo-600 md:flex lg:flex mt-40'>
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

        <div className=' w-[96%] md:w-[90%] lg:w-[46%] h-[550px] md:h-[550px] lg:h-[550px] bg-purple-300 p-4 mt-10 absolute md:block lg:block z-0 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl ml-[2%] md:ml-[2%] lg:ml-[2%]'>
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
      <div className='w-full bg-amber-200 p-4 '>
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
    <div className='h-[2000px] md:h-[1000px] lg:h-[1000px] w-full bg-blue-900'>
      <div className='h-[200px] md:h-[150px] lg:h-[150px] bg-emerald-200 '></div>
      <div className='h-[200px] w-full bg-emerald-400 flex flex-col gap-2 p-1'>
        <span className='w-full h-[50px] bg-amber-300 text-2xl flex justify-center items-center'>OUR TEAM</span>
        <span className='w-ful h-[50px] md:h-[50px] lg:h-[50px]  text-4xl flex justify-center items-center'>Leading the way in</span>
        <span className='w-full md:w-[30%] lg:w-[30%] h-[50px] md:ml-[35%] text-4xl  flex justify-center items-center mt-[-10px]'> business transformation</span>
      </div>

      <div className='h-[1500px] md:h-[500px] lg:h-[500px] w-full bg-gray-400 grid md:flex lg:flex md:justify-center md:items-center lg:justify-center  lg:items-center'>
        <div className="group relative h-[350px] md:h-[400px] lg:h-[400px] w-full md:w-[20%] lg:w-[20%] bg-red-400 flex justify-center ">
          <div className="h-[320px] md:h-[380px] lg:h-[380px] w-[90%] md:w-[95%] lg:w-[95%] bg-indigo-300 flex justify-center items-center"><img src={image22} alt="Team member" className="h-full w-full object-cover" /></div>
          <div className="h-[250px] w-[80px] md:w-[60px] lg:w-[60px] bg-amber-200 absolute ml-[63%] md:ml-53 lg:ml-43 mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-300">
            <ul className='h-[200px] grid w-full gap-2 p-2'>
              <li className='h-[50px] w-full  flex justify-center items-center bg-cyan-400'>F</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-red-600'>I</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-amber-800'>X</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-green-300'>L</li>
            </ul>
          </div>
        </div>
        <div className="group relative h-[350px] md:h-[400px] lg:h-[400px] w-full md:w-[20%] lg:w-[20%] bg-cyan-200 md:mt-[5%] lg:mt-[5%] flex justify-center">
          <div className="h-[320px] md:h-[380px] lg:h-[380px] w-[90%] md:w-[95%] lg:w-95% bg-indigo-300 flex justify-center items-center"><img src={professionalMan} alt="Team member" className="h-full w-full object-cover" /></div>
          <div className="h-[250px] w-[80px] md:w-[60px] lg:w-[60px] bg-amber-200 absolute ml-[63%] md:ml-43 lg:ml-43 mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <ul className='h-[200px] grid w-full gap-2 p-2'>
              <li className='h-[50px] w-full flex justify-center items-center bg-cyan-400 '>F</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-red-600'>I</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-amber-800'>X</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-green-300'>L</li>
            </ul>
          </div>
        </div>
        <div className="group relative h-[350px] md:h-[400px] lg:h-[400px] w-full md:w-[20%] lg:w-[20%] bg-purple-400 flex justify-center">
          <div className="h-[320px] md:h-[380px] lg:h-[380px] w-[90%] md:w-[95%] lg:w-[95%] bg-indigo-300 flex justify-center items-center"><img src={smilingLaptopPhoto} alt="Team member working at a laptop" className="h-full w-full object-cover" /></div>
          <div className="h-[250px] w-[80px] md:w-[60px] lg:w-[60px] bg-amber-200 absolute ml-[63%] md:ml-43 lg:ml-43 mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <ul className='h-[200px] grid w-full gap-2 p-2'>
              <li className='h-[50px] w-full flex justify-center items-center bg-cyan-400 '>F</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-red-600'>I</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-amber-800'>X</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-green-300'>L</li>
            </ul>
          </div>
        </div>
        <div className="group relative h-[350px] md:h-[400px] lg:h-[400px] w-full md:w-[20%] lg:w-[20%] bg-green-600 md:mt-[5%] lg:mt-[5%] flex justify-center">
          <div className="h-[320px] md:h-[380px] lg:h-[380px] w-[90%] md:w-[95%] lg:w-[95%] bg-indigo-300 flex justify-center items-center"><img src={customerServicePhoto} alt="Customer service team member" className="h-full w-full object-cover" /></div>
          <div className="h-[250px] w-[80px] md:w-[60px] lg:w-[60px] bg-amber-200 absolute ml-[63%] md:ml-43 lg:ml-43 mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <ul className='h-[200px] grid w-full gap-2 p-2'>
              <li className='h-[50px] w-full flex justify-center items-center bg-cyan-400 '>F</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-red-600'>I</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-amber-800'>X</li>
              <li className='h-[50px] w-full flex justify-center items-center bg-green-300'>L</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="h-[430px] md:h-[500px] lg:h-[500px] w-full bg-fuchsia-800">
      <div className='relative h-[400px] w-full bg-amber-300 flex justify-center items-center text-4xl'>
        <Swiper
        onSwiper={(swiper) => { teamSwiperRef.current = swiper }}
        cssMode={true}
        navigation={false}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        loop={true}
         breakpoints={{
          768: {
            slidesPerView: 2,
            
          },
          1024: {
            slidesPerView: 2,
          
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide > 
          <div className='h-[380px] w-full bg-blue-700 flex flex-col justify-center items-center md:flex-row lg:flex-row'>
            <div className="h-[250px] w-[50%] md:w-[40%] lg:w-[40%] bg-green-400"></div>
            <div className="h-[120px] md:h-[250px] lg:h-[250px] w-full md:w-[60%] lg:w-[60%] bg-red-400"></div>
          </div> 
        </SwiperSlide>

        <SwiperSlide > 
          <div className='h-[380px] w-[98%] bg-blue-700 flex flex-col justify-center items-center md:flex-row lg:flex-row'>
            <div className="h-[250px] w-[50%] md:w-[40%] lg:w-[40%] bg-yellow-400"></div>
            <div className="h-[120px] md:h-[250px] lg:h-[250px] w-full md:w-[60%] lg:w-[60%] bg-green-400"></div>
          </div> 
        </SwiperSlide>

        <SwiperSlide > 
          <div className='h-[380px] w-[98%] bg-blue-700 flex flex-col justify-center items-center md:flex-row lg:flex-row'>
             <div className="h-[250px] w-[50%] md:w-[40%] lg:w-[40%] bg-purple-400"></div>
            <div className="h-[120px] md:h-[250px] lg:h-[250px] w-full md:w-[60%] lg:w-[60%] bg-amber-400"></div>
          </div> 
          </SwiperSlide>
        <SwiperSlide > 
          <div className='h-[380px] w-[98%] bg-blue-700 flex flex-col justify-center items-center md:flex-row lg:flex-row'>
             <div className="h-[250px] w-[50%] md:w-[40%] lg:w-[40%] bg-purple-400"></div>
            <div className="h-[120px] md:h-[250px] lg:h-[250px] w-full md:w-[60%] lg:w-[60%] bg-amber-400"></div>
          </div> 
          </SwiperSlide>
        <SwiperSlide > 
          <div className='h-[380px] w-[98%] bg-blue-700 flex flex-col justify-center items-center md:flex-row lg:flex-row'>
             <div className="h-[250px] w-[50%] md:w-[40%] lg:w-[40%] bg-purple-400"></div>
            <div className="h-[120px] md:h-[250px] lg:h-[250px] w-full md:w-[60%] lg:w-[60%] bg-amber-400"></div>
          </div> 
        </SwiperSlide>
        <SwiperSlide > 
        <div className='h-[380px] w-[98%] bg-blue-700 flex flex-col justify-center items-center md:flex-row lg:flex-row'>
           <div className="h-[250px] w-[50%] md:w-[40%] lg:w-[40%] bg-purple-400"></div>
            <div className="h-[120px] md:h-[250px] lg:h-[250px] w-full md:w-[60%] lg:w-[60%] bg-amber-400"></div>
        </div> 
        </SwiperSlide>
        <SwiperSlide > 
          <div className='h-[380px] w-[98%] bg-blue-700 flex flex-col justify-center items-center md:flex-row lg:flex-row'>
             <div className="h-[250px] w-[50%] md:w-[40%] lg:w-[40%] bg-purple-400"></div>
            <div className="h-[120px] md:h-[250px] lg:h-[250px] w-full md:w-[60%] lg:w-[60%] bg-amber-400"></div>
            </div> 
          </SwiperSlide>
        <SwiperSlide > 
          <div className='h-[380px] w-[98%] bg-blue-700 flex flex-col justify-center items-center md:flex-row lg:flex-row'>
             <div className="h-[250px] w-[50%] md:w-[40%] lg:w-[40%] bg-purple-400"></div>
             <div className="h-[120px] md:h-[250px] lg:h-[250px] w-full md:w-[60%] lg:w-[60%] bg-amber-400"></div>
            </div> 
          </SwiperSlide>
        <SwiperSlide > 
          <div className='h-[380px] w-[98%] bg-blue-700 flex flex-col justify-center items-center md:flex-row lg:flex-row'>
             <div className="h-[250px] w-[50%] md:w-[40%] lg:w-[40%] bg-purple-400"></div>
            <div className="h-[120px] md:h-[250px] lg:h-[250px] w-full md:w-[60%] lg:w-[60%] bg-amber-400"></div>
            </div> 
          </SwiperSlide>
      </Swiper>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => teamSwiperRef.current?.slidePrev()}
        className='hidden md:flex absolute left-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl shadow-lg lg:left-8'
      >
        &#8592;
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => teamSwiperRef.current?.slideNext()}
        className='hidden md:flex absolute right-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl shadow-lg lg:right-8'
      >
        &#8594;
      </button>
      </div>
     
    </div>

    <div className='h-[1500px] w-full bg-green-200'>
      <div className="h-[120px] w-full bg-amber-800 flex flex-col mb-2">
        <span className='text-2xl w-full flex justify-center'>NEW BLOGS</span>
        <span className='text-4xl w-[90%] flex justify-center ml-13' >Building better Businesses Together</span>
        
      </div>
      <div className="h-[1300px] md:h-[400px] lg:h-[400px] w-full bg-cyan-400 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-3 md:p-2 lg:p-2">
        <div className="h-[400px] md:h-[350px] lg:h-[350px] w-[90%] md:w-1/3 lg:w-1/3 bg-red-500 mt-1 md:mt-0 lg:mt-0">
          <div className="h-[50%] w-full bg-amber-300 flex justify-center items-center"><img src={teamworkPhoto} alt="Colleagues working together as a team" className="h-full w-full object-cover" /></div>
          <div className="h-[50%] w-full bg-fuchsia-400 relative">
            <div className="h-[50px] w-[80px] bg-red-700 absolute mt-[-35px] ml-[250px] md:ml-[300px] lg:ml-[300px] flex justify-center items-center"> june 12</div>
            <div className=" flex h-[50px] w-full bg-amber-50">
              <button className="w-1/2 flex justify-center items-center">By Admin</button>
              <button className="w-1/2 flex justify-center items-center">Comments</button>
            </div>
            <div className="h-[80px] w-full bg-amber-600 flex justify-center items-center text-[20px] p-2"><span>Leading the way in business transformation </span></div>
            <div className="flex">
              <div className="w-1/2 flex justify-center items-center ">arrow</div>
              <button className="w-1/2 flex  justify-center items-center "> Read More</button>
            </div>

          </div>
        </div>
        <div className="h-[400px] md:h-[350px] lg:h-[350px] w-[90%] md:w-1/3 lg:w-1/3 bg-green-600">
          <div className="h-[50%] w-full bg-amber-300 flex justify-center items-center"><img src={dataScienceMeeting} alt="Team meeting around data and technology" className="h-full w-full object-cover" /></div>
          <div className="h-[50%] w-full bg-fuchsia-400">
               <div className="h-[50px] w-[80px] bg-red-700 absolute mt-[-35px] ml-[250px] md:ml-[300px] lg:ml-[300px] flex justify-center items-center"> june 12</div>
            <div className=" flex h-[50px] w-full bg-amber-50">
               <button className="w-1/2 flex justify-center items-center">By Admin</button>
              <button className="w-1/2 flex justify-center items-center">Comments</button>
            </div>
            <div className="h-[80px] w-full bg-amber-600 flex justify-center items-center text-[20px] p-2"><span>Leading the way in business transformation </span></div>
            <div className="flex">
              <button className="w-1/2 flex justify-center items-center">arrow</button>
              <button className="w-1/2 flex justify-center items-center"> Read More</button>
            </div>
          </div>
        </div>
        <div className="h-[400px] md:h-[350px] lg:h-[350px] w-[90%] md:w-1/3 lg:w-1/3 bg-blue-900">
          <div className="h-[50%] w-full bg-amber-300 flex justify-center items-center"><img src={officeBackground} alt="Professional office environment" className="h-full w-full object-cover" /></div>
          <div className="h-[50%] w-full bg-fuchsia-400 relative">
               <div className="h-[50px] w-[80px] bg-red-700 absolute mt-[-35px] ml-[250px] md:ml-[300px] lg:ml-[300px] flex justify-center items-center"> june 12</div>
            <div className=" flex h-[50px] w-full bg-amber-50">
               <button className="w-1/2 flex justify-center items-center">By Admin</button>
              <button className="w-1/2 flex justify-center items-center">Comments</button>
            </div>
            <div className="h-[80px] w-full bg-amber-600 flex justify-center items-center text-[20px] p-2"><span>Leading the way in business transformation </span></div>
            <div className="flex">
              <button className="w-1/2 flex justify-center items-center">arrow</button>
              <button className="w-1/2 flex justify-center items-center"> Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block md:block bg-red-400 h-[750px] w-full p-2">
          <div className='h-[730px] w-full bg-amber-50'>

          </div>
      </div>
    </div>

  </div>
  )
}

export default HomeComp
