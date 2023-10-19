"use client"
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Assembly from '../Tool/Assembly'
import CommodityExchange from '../Tool/CommodityExchange'
import Underwriting from '../Tool/Underwriting'
import { useDispatch, useSelector } from 'react-redux';
import { changeTool } from '@/store/slices/toolSlice';


export default function Tools() {
  const tool=useSelector((store)=>store.tool.value)
  const dispatch=useDispatch()
 
  return (
    
    <div className='space-y-4 xl:px-28 lg:px-16 sm:px-8 px-4 py-24' id='tools'>
        <div className='flex gap-2 items-center'>
            <div className='w-[7%] sm:w-[5%] md:w-[4%] lg:w-[3%] 2xl:w-[2.5%]'>
                <Image className='w-full' src={"/images/Data mining.svg"} height={0} width={0}/>
            </div>
            <div>
                <p className='text-3xl font-bold text-[#0141AC]'>
                    ابزارها
                </p>
            </div>
        </div>
        <div>
            <p className='text-[#777] text-xl my-8'>
                مجامع و رویدادها
            </p>
        </div>
        <div className='flex lg:flex-row flex-col gap-4 items-center'>
            <div className='lg:w-2/3 w-11/12'>
                <div className='flex sm:flex-row flex-col items-center gap-2'>
                <button onClick={()=>dispatch(changeTool(<Assembly/>))} className={tool.type.name === "Assembly" ? "flex gap-2 items-center justify-center border rounded-3xl  border-[#367AFF] bg-[#367AFF] text-white fill-white  py-2.5 sm:w-1/3 w-11/12":"flex gap-2 items-center justify-center border rounded-3xl text-[#0141AC] border-[#367AFF] fill-[#07A0E6]   py-2.5 sm:w-1/3 w-11/12"  } >
        <div>
          <div className='w-11/12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="" className=''>
                 <path d="M7.59375 1.6875C7.36997 1.6875 7.15536 1.77639 6.99713 1.93463C6.83889 2.09286 6.75 2.30747 6.75 2.53125V3.375H5.0625C3.20735 3.375 1.6875 4.89485 1.6875 6.75V21.9375C1.6875 23.7927 3.20735 25.3125 5.0625 25.3125H12.6562C12.88 25.3125 13.0946 25.2236 13.2529 25.0654C13.4111 24.9071 13.5 24.6925 13.5 24.4688C13.5 24.245 13.4111 24.0304 13.2529 23.8721C13.0946 23.7139 12.88 23.625 12.6562 23.625H5.0625C4.11303 23.625 3.375 22.887 3.375 21.9375V10.125H23.625V12.6562C23.625 12.88 23.7139 13.0946 23.8721 13.2529C24.0304 13.4111 24.245 13.5 24.4688 13.5C24.6925 13.5 24.9071 13.4111 25.0654 13.2529C25.2236 13.0946 25.3125 12.88 25.3125 12.6562V6.75C25.3125 4.89485 23.7927 3.375 21.9375 3.375H20.25V2.53125C20.25 2.30747 20.1611 2.09286 20.0029 1.93463C19.8446 1.77639 19.63 1.6875 19.4062 1.6875C19.1825 1.6875 18.9679 1.77639 18.8096 1.93463C18.6514 2.09286 18.5625 2.30747 18.5625 2.53125V3.375H14.3438V2.53125C14.3438 2.30747 14.2549 2.09286 14.0966 1.93463C13.9384 1.77639 13.7238 1.6875 13.5 1.6875C13.2762 1.6875 13.0616 1.77639 12.9034 1.93463C12.7451 2.09286 12.6562 2.30747 12.6562 2.53125V3.375H8.4375V2.53125C8.4375 2.30747 8.34861 2.09286 8.19037 1.93463C8.03214 1.77639 7.81753 1.6875 7.59375 1.6875ZM5.0625 5.0625H6.75V5.90625C6.75 6.13003 6.83889 6.34464 6.99713 6.50287C7.15536 6.66111 7.36997 6.75 7.59375 6.75C7.81753 6.75 8.03214 6.66111 8.19037 6.50287C8.34861 6.34464 8.4375 6.13003 8.4375 5.90625V5.0625H12.6562V5.90625C12.6562 6.13003 12.7451 6.34464 12.9034 6.50287C13.0616 6.66111 13.2762 6.75 13.5 6.75C13.7238 6.75 13.9384 6.66111 14.0966 6.50287C14.2549 6.34464 14.3438 6.13003 14.3438 5.90625V5.0625H18.5625V5.90625C18.5625 6.13003 18.6514 6.34464 18.8096 6.50287C18.9679 6.66111 19.1825 6.75 19.4062 6.75C19.63 6.75 19.8446 6.66111 20.0029 6.50287C20.1611 6.34464 20.25 6.13003 20.25 5.90625V5.0625H21.9375C22.887 5.0625 23.625 5.80053 23.625 6.75V8.4375H3.375V6.75C3.375 5.80053 4.11303 5.0625 5.0625 5.0625Z" />
                  <path d="M19.4062 13.5C16.1543 13.5 13.5 16.1543 13.5 19.4062C13.5 22.6582 16.1543 25.3125 19.4062 25.3125C22.6582 25.3125 25.3125 22.6582 25.3125 19.4062C25.3125 16.1543 22.6582 13.5 19.4062 13.5ZM19.4062 15.1875C21.7462 15.1875 23.625 17.0663 23.625 19.4062C23.625 21.7462 21.7462 23.625 19.4062 23.625C17.0663 23.625 15.1875 21.7462 15.1875 19.4062C15.1875 17.0663 17.0663 15.1875 19.4062 15.1875Z" />
                   <path d="M19.4062 16.875C19.1825 16.875 18.9679 16.9639 18.8096 17.1221C18.6514 17.2804 18.5625 17.495 18.5625 17.7188V19.4062C18.5625 19.63 18.6514 19.8446 18.8097 20.0028C18.9679 20.1611 19.1825 20.25 19.4062 20.25H21.0938C21.3175 20.25 21.5321 20.1611 21.6904 20.0029C21.8486 19.8446 21.9375 19.63 21.9375 19.4062C21.9375 19.1825 21.8486 18.9679 21.6904 18.8096C21.5321 18.6514 21.3175 18.5625 21.0938 18.5625H20.25V17.7188C20.25 17.495 20.1611 17.2804 20.0029 17.1221C19.8446 16.9639 19.63 16.875 19.4062 16.875Z" />
            </svg>
          </div>
        </div>
        <div className=' '>
          <p className='sm:text-xl    font-semibold'>
             مجامع
          </p>
        </div>
    </button>
    <button onClick={()=>dispatch(changeTool(<CommodityExchange/>))} className={tool.type.name === "CommodityExchange" ? "flex gap-2 items-center justify-center border rounded-3xl  border-[#367AFF] bg-[#367AFF] text-white fill-white  py-2.5 sm:w-1/3 w-11/12":"flex gap-2 items-center justify-center border rounded-3xl text-[#0141AC] border-[#367AFF] fill-[#07A0E6]   py-2.5 sm:w-1/3 w-11/12"  }>
        <div>
          <div className='w-11/12 '>
          <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="29" height="29" viewBox="0 0 29 29" fill="">
  <g clip-path="url(#clip0_303_5294)">
    <path d="M19.7354 8.56406C20.4296 8.90827 21.0217 9.42815 21.4527 10.072C21.8838 10.7159 22.1389 11.4614 22.1927 12.2344H21.2973C21.2112 12.2344 21.1269 12.259 21.0542 12.3052C20.9816 12.3514 20.9236 12.4174 20.8871 12.4953C20.8506 12.5733 20.8371 12.6601 20.8481 12.7455C20.8591 12.8309 20.8942 12.9113 20.9493 12.9775L23.2149 15.6962C23.2574 15.7472 23.3107 15.7883 23.3708 15.8164C23.4309 15.8446 23.4965 15.8592 23.5629 15.8592C23.6293 15.8592 23.6949 15.8446 23.755 15.8164C23.8152 15.7883 23.8684 15.7472 23.9109 15.6962L26.1765 12.9775C26.2317 12.9113 26.2668 12.8309 26.2778 12.7455C26.2888 12.6601 26.2753 12.5733 26.2387 12.4953C26.2022 12.4174 26.1442 12.3514 26.0716 12.3052C25.999 12.259 25.9146 12.2344 25.8285 12.2344H24.9019C24.7874 10.9966 24.215 9.84606 23.2969 9.00798C22.3788 8.16991 21.181 7.70461 19.9379 7.70313C19.8358 7.70303 19.7366 7.73746 19.6564 7.80083C19.5763 7.8642 19.5199 7.95279 19.4965 8.05222C19.473 8.15165 19.4839 8.25609 19.5272 8.34859C19.5706 8.44109 19.6439 8.51623 19.7354 8.5618V8.56406ZM24.016 12.6875C24.016 12.8077 24.0638 12.9229 24.1488 13.0079C24.2337 13.0929 24.349 13.1406 24.4692 13.1406H24.8611L23.5629 14.6985L22.2647 13.1406H22.6567C22.7769 13.1406 22.8921 13.0929 22.9771 13.0079C23.0621 12.9229 23.1098 12.8077 23.1098 12.6875V12.5552C23.1135 11.2833 22.6637 10.0517 21.841 9.08153C22.4972 9.42806 23.0464 9.94692 23.4296 10.5823C23.8128 11.2177 24.0156 11.9455 24.016 12.6875Z" fill=""/>
    <path d="M28.0938 17.6719H16.3125C16.1923 17.6719 16.0771 17.7196 15.9921 17.8046C15.9071 17.8896 15.8594 18.0048 15.8594 18.125V28.0938C15.8594 28.2139 15.9071 28.3292 15.9921 28.4142C16.0771 28.4991 16.1923 28.5469 16.3125 28.5469H28.0938C28.2139 28.5469 28.3292 28.4991 28.4142 28.4142C28.4991 28.3292 28.5469 28.2139 28.5469 28.0938V18.125C28.5469 18.0048 28.4991 17.8896 28.4142 17.8046C28.3292 17.7196 28.2139 17.6719 28.0938 17.6719ZM21.5234 18.5781H22.8828V19.9008L22.4859 19.5836C22.4056 19.5195 22.3059 19.4846 22.2031 19.4846C22.1004 19.4846 22.0007 19.5195 21.9204 19.5836L21.5234 19.9008V18.5781ZM27.6406 27.6406H16.7656V18.5781H20.6172V20.8438C20.6172 20.9291 20.6412 21.0128 20.6867 21.0851C20.7321 21.1574 20.7971 21.2153 20.874 21.2523C20.951 21.2893 21.0368 21.3038 21.1217 21.2941C21.2065 21.2845 21.2869 21.251 21.3535 21.1976L22.2031 20.5175L23.0527 21.1972C23.1194 21.2505 23.1997 21.284 23.2845 21.2937C23.3693 21.3034 23.4551 21.2889 23.532 21.252C23.609 21.215 23.6739 21.1571 23.7194 21.0849C23.7649 21.0127 23.789 20.9291 23.7891 20.8438V18.5781H27.6406V27.6406Z" fill=""/>
    <path d="M20.8438 24.0156H18.125C18.0048 24.0156 17.8896 24.0634 17.8046 24.1483C17.7196 24.2333 17.6719 24.3486 17.6719 24.4688C17.6719 24.5889 17.7196 24.7042 17.8046 24.7892C17.8896 24.8741 18.0048 24.9219 18.125 24.9219H20.8438C20.9639 24.9219 21.0792 24.8741 21.1642 24.7892C21.2491 24.7042 21.2969 24.5889 21.2969 24.4688C21.2969 24.3486 21.2491 24.2333 21.1642 24.1483C21.0792 24.0634 20.9639 24.0156 20.8438 24.0156Z" fill=""/>
    <path d="M20.8438 25.8281H18.125C18.0048 25.8281 17.8896 25.8759 17.8046 25.9608C17.7196 26.0458 17.6719 26.1611 17.6719 26.2812C17.6719 26.4014 17.7196 26.5167 17.8046 26.6017C17.8896 26.6866 18.0048 26.7344 18.125 26.7344H20.8438C20.9639 26.7344 21.0792 26.6866 21.1642 26.6017C21.2491 26.5167 21.2969 26.4014 21.2969 26.2812C21.2969 26.1611 21.2491 26.0458 21.1642 25.9608C21.0792 25.8759 20.9639 25.8281 20.8438 25.8281Z" fill=""/>
    <path d="M9.0625 0.453125C7.35973 0.453125 5.6952 0.958056 4.27939 1.90407C2.86359 2.85008 1.7601 4.19468 1.10848 5.76783C0.456855 7.34099 0.286361 9.07205 0.618556 10.7421C0.95075 12.4122 1.77071 13.9462 2.97476 15.1502C4.1788 16.3543 5.71284 17.1743 7.3829 17.5064C9.05295 17.8386 10.784 17.6681 12.3572 17.0165C13.9303 16.3649 15.2749 15.2614 16.2209 13.8456C17.1669 12.4298 17.6719 10.7653 17.6719 9.0625C17.6694 6.77992 16.7615 4.59156 15.1475 2.97753C13.5334 1.36351 11.3451 0.455644 9.0625 0.453125ZM9.0625 16.7656C7.53897 16.7656 6.04965 16.3138 4.78288 15.4674C3.5161 14.621 2.52878 13.4179 1.94574 12.0104C1.36271 10.6028 1.21017 9.05395 1.50739 7.55969C1.80462 6.06543 2.53827 4.69287 3.61557 3.61557C4.69287 2.53827 6.06544 1.80462 7.5597 1.50739C9.05396 1.21016 10.6028 1.36271 12.0104 1.94574C13.4179 2.52877 14.621 3.5161 15.4674 4.78287C16.3138 6.04965 16.7656 7.53897 16.7656 9.0625C16.7633 11.1048 15.951 13.0628 14.5069 14.5069C13.0628 15.951 11.1048 16.7633 9.0625 16.7656Z" fill=""/>
    <path d="M9.0625 2.26562C7.71821 2.26562 6.4041 2.66425 5.28636 3.41111C4.16862 4.15796 3.29745 5.21948 2.78301 6.46145C2.26857 7.70341 2.13397 9.07004 2.39623 10.3885C2.65849 11.707 3.30583 12.9181 4.25639 13.8686C5.20695 14.8192 6.41803 15.4665 7.7365 15.7288C9.05496 15.991 10.4216 15.8564 11.6636 15.342C12.9055 14.8276 13.967 13.9564 14.7139 12.8386C15.4607 11.7209 15.8594 10.4068 15.8594 9.0625C15.8573 7.26048 15.1406 5.53285 13.8664 4.25864C12.5921 2.98442 10.8645 2.26766 9.0625 2.26562ZM9.0625 14.9531C7.89745 14.9531 6.75855 14.6076 5.78985 13.9604C4.82114 13.3131 4.06612 12.3931 3.62028 11.3167C3.17443 10.2404 3.05777 9.05596 3.28506 7.9133C3.51236 6.77063 4.07338 5.72102 4.8972 4.8972C5.72102 4.07338 6.77063 3.51235 7.9133 3.28506C9.05597 3.05777 10.2404 3.17442 11.3167 3.62027C12.3931 4.06612 13.3131 4.82114 13.9604 5.78984C14.6076 6.75855 14.9531 7.89744 14.9531 9.0625C14.9513 10.6242 14.3301 12.1215 13.2258 13.2258C12.1215 14.3301 10.6242 14.9513 9.0625 14.9531Z" fill=""/>
    <path d="M9.96875 4.98438H9.51562V4.53125C9.51562 4.41107 9.46789 4.29582 9.38291 4.21084C9.29793 4.12586 9.18268 4.07812 9.0625 4.07812C8.94232 4.07812 8.82707 4.12586 8.74209 4.21084C8.65711 4.29582 8.60938 4.41107 8.60938 4.53125V4.98438H8.15625C7.79572 4.98438 7.44996 5.12759 7.19503 5.38253C6.94009 5.63746 6.79688 5.98322 6.79688 6.34375V8.15625C6.79688 8.51678 6.94009 8.86254 7.19503 9.11747C7.44996 9.37241 7.79572 9.51562 8.15625 9.51562H8.60938V12.2344H8.15625C8.03607 12.2344 7.92082 12.1866 7.83584 12.1017C7.75086 12.0167 7.70312 11.9014 7.70312 11.7812V10.875C7.70312 10.7548 7.65539 10.6396 7.57041 10.5546C7.48543 10.4696 7.37018 10.4219 7.25 10.4219C7.12982 10.4219 7.01457 10.4696 6.92959 10.5546C6.84461 10.6396 6.79688 10.7548 6.79688 10.875V11.7812C6.79688 12.1418 6.94009 12.4875 7.19503 12.7425C7.44996 12.9974 7.79572 13.1406 8.15625 13.1406H8.60938V13.5938C8.60938 13.7139 8.65711 13.8292 8.74209 13.9142C8.82707 13.9991 8.94232 14.0469 9.0625 14.0469C9.18268 14.0469 9.29793 13.9991 9.38291 13.9142C9.46789 13.8292 9.51562 13.7139 9.51562 13.5938V13.1406H9.96875C10.3293 13.1406 10.675 12.9974 10.93 12.7425C11.1849 12.4875 11.3281 12.1418 11.3281 11.7812V9.96875C11.3281 9.60822 11.1849 9.26246 10.93 9.00753C10.675 8.75259 10.3293 8.60938 9.96875 8.60938H9.51562V5.89062H9.96875C10.0889 5.89062 10.2042 5.93836 10.2892 6.02334C10.3741 6.10832 10.4219 6.22357 10.4219 6.34375V7.25C10.4219 7.37018 10.4696 7.48543 10.5546 7.57041C10.6396 7.65539 10.7548 7.70312 10.875 7.70312C10.9952 7.70312 11.1104 7.65539 11.1954 7.57041C11.2804 7.48543 11.3281 7.37018 11.3281 7.25V6.34375C11.3281 5.98322 11.1849 5.63746 10.93 5.38253C10.675 5.12759 10.3293 4.98438 9.96875 4.98438ZM8.60938 8.60938H8.15625C8.03607 8.60938 7.92082 8.56164 7.83584 8.47666C7.75086 8.39168 7.70312 8.27643 7.70312 8.15625V6.34375C7.70312 6.22357 7.75086 6.10832 7.83584 6.02334C7.92082 5.93836 8.03607 5.89062 8.15625 5.89062H8.60938V8.60938ZM9.96875 9.51562C10.0889 9.51562 10.2042 9.56336 10.2892 9.64834C10.3741 9.73332 10.4219 9.84857 10.4219 9.96875V11.7812C10.4219 11.9014 10.3741 12.0167 10.2892 12.1017C10.2042 12.1866 10.0889 12.2344 9.96875 12.2344H9.51562V9.51562H9.96875Z" fill=""/>
    <path d="M12.8899 26.7819C12.1952 26.4378 11.6027 25.9176 11.1716 25.2732C10.7404 24.6289 10.4856 23.8828 10.4326 23.1093H11.328C11.4141 23.1094 11.4985 23.0849 11.5712 23.0387C11.6439 22.9925 11.7019 22.9266 11.7385 22.8486C11.7751 22.7706 11.7887 22.6838 11.7777 22.5983C11.7667 22.5129 11.7315 22.4324 11.6764 22.3662L9.41078 19.6474C9.36826 19.5964 9.31502 19.5553 9.25484 19.5271C9.19466 19.4989 9.12902 19.4843 9.06256 19.4843C8.9961 19.4843 8.93045 19.4989 8.87027 19.5271C8.81009 19.5553 8.75685 19.5964 8.71433 19.6474L6.44871 22.3662C6.3936 22.4324 6.35849 22.5128 6.34747 22.5982C6.33646 22.6836 6.35 22.7704 6.38652 22.8484C6.42303 22.9263 6.48101 22.9923 6.55365 23.0385C6.6263 23.0847 6.71061 23.1093 6.79671 23.1093H7.72289C7.83755 24.3472 8.40997 25.4977 9.32815 26.3357C10.2463 27.1738 11.4442 27.6391 12.6873 27.6406C12.7903 27.6417 12.8907 27.6078 12.9718 27.5443C13.0529 27.4808 13.1099 27.3915 13.1335 27.2912C13.1571 27.191 13.1458 27.0857 13.1015 26.9927C13.0572 26.8997 12.9826 26.8245 12.8899 26.7796V26.7819ZM8.60921 22.6562C8.60921 22.536 8.56147 22.4208 8.47649 22.3358C8.39151 22.2508 8.27626 22.2031 8.15608 22.2031H7.76367L9.06233 20.6452L10.3605 22.2031H9.96858C9.8484 22.2031 9.73315 22.2508 9.64817 22.3358C9.56319 22.4208 9.51546 22.536 9.51546 22.6562V22.7885C9.51174 24.0604 9.96158 25.292 10.7842 26.2622C10.1281 25.9156 9.57894 25.3967 9.19571 24.7614C8.81248 24.126 8.60971 23.3982 8.60921 22.6562Z" fill=""/>
  </g>
  <defs>
    <clipPath id="clip0_303_5294">
      <rect width="29" height="29" fill="white"/>
    </clipPath>
  </defs>
</svg>
          </div>
        </div>
        <div className=''>
          <p className='sm:text-xl   font-semibold'>
            بورس کالا
          </p>
        </div>
    </button>
    <button onClick={()=>dispatch(changeTool(<Underwriting/>))} className={tool.type.name === "Underwriting" ? "flex gap-2 items-center justify-center border rounded-3xl  border-[#367AFF] bg-[#367AFF] text-white fill-white  py-2.5 sm:w-1/3 w-11/12":"flex gap-2 items-center justify-center border rounded-3xl text-[#0141AC] border-[#367AFF] fill-[#07A0E6]   py-2.5 sm:w-1/3 w-11/12"  }>
        <div>
          <div className='w-11/12'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="">
  <g clip-path="url(#clip0_303_5241)">
    <path d="M6.08852 23.9356C6.18753 24.2607 6.38818 24.5455 6.66101 24.7481C6.93385 24.9508 7.26447 25.0606 7.60432 25.0614C7.75831 25.0615 7.91152 25.0396 8.05932 24.9964L18.3605 21.8946L20.2143 21.6528C20.4205 21.6262 20.6193 21.5592 20.7995 21.4556C20.9797 21.3521 21.1378 21.214 21.2646 21.0493C21.3913 20.8846 21.4844 20.6965 21.5384 20.4958C21.5924 20.2951 21.6063 20.0857 21.5793 19.8796L20.6017 12.4176L23.6801 7.69599L24.4393 6.54939L24.8033 5.97999C25.0588 5.58901 25.1485 5.11255 25.0527 4.65543C24.9569 4.19831 24.6834 3.79797 24.2924 3.54249C23.9014 3.28701 23.425 3.19731 22.9679 3.29312C22.5107 3.38893 22.1104 3.66241 21.8549 4.05339L21.4805 4.62799L20.7317 5.77199L19.8919 7.05639L19.2653 2.28539C19.2384 2.07948 19.1712 1.8809 19.0675 1.70098C18.9638 1.52106 18.8256 1.36334 18.661 1.23682C18.4963 1.1103 18.3083 1.01746 18.1078 0.963617C17.9072 0.909769 17.698 0.895965 17.4921 0.922992L6.55132 2.36079C6.1533 2.41219 5.7899 2.61353 5.53527 2.92373C5.28064 3.23392 5.15397 3.62959 5.18112 4.02999L2.03512 4.97639C1.6339 5.09722 1.29706 5.3724 1.09864 5.74146C0.900213 6.11052 0.856433 6.54327 0.97692 6.94459L6.08852 23.9356ZM21.9199 5.37939L22.7415 5.91499L23.5605 6.45059L23.2381 6.94459L21.5975 5.87339L21.9199 5.37939ZM22.5075 4.47719C22.6499 4.25929 22.873 4.10688 23.1278 4.05349C23.3826 4.0001 23.6481 4.0501 23.866 4.19249C24.0839 4.33489 24.2363 4.55801 24.2897 4.81278C24.3431 5.06755 24.2931 5.33309 24.1507 5.55099L23.9895 5.79799L22.3593 4.72419L22.5075 4.47719ZM21.1711 6.52599L21.9927 7.06159L22.8117 7.59719L17.8067 15.262L16.9851 14.7264L16.1661 14.1908L21.1711 6.52599ZM15.1911 17.0066L15.3471 16.5074C15.6086 16.575 15.8406 16.7266 16.0075 16.939L15.6123 17.2822C15.5697 17.3209 15.5154 17.3444 15.458 17.349C15.4006 17.3535 15.3433 17.3389 15.2951 17.3073C15.2469 17.2758 15.2105 17.2292 15.1917 17.1747C15.1729 17.1203 15.1727 17.0612 15.1911 17.0066ZM16.5951 16.4268C16.3333 16.1039 15.9769 15.8711 15.5759 15.7612L15.8359 14.911L17.2633 15.8444L16.5951 16.4268ZM6.11972 3.43979C6.18406 3.35616 6.26425 3.28601 6.3557 3.23337C6.44715 3.18073 6.54808 3.14662 6.65272 3.13299L17.5935 1.69779C17.629 1.69521 17.6646 1.69521 17.7001 1.69779C17.8919 1.70169 18.076 1.77408 18.219 1.90188C18.3621 2.02968 18.4547 2.20445 18.4801 2.39459L19.2393 8.05999L17.2477 11.1046L13.3321 11.6246C13.2287 11.6311 13.1321 11.6785 13.0636 11.7563C12.9951 11.8341 12.9603 11.9359 12.9668 12.0393C12.9734 12.1427 13.0207 12.2393 13.0985 12.3078C13.1763 12.3763 13.2781 12.4111 13.3815 12.4046H13.4335L16.6861 11.96L15.3003 14.0842C15.2999 14.0929 15.2999 14.1015 15.3003 14.1102C15.2904 14.1265 15.2825 14.144 15.2769 14.1622L15.0351 14.9422L9.49192 15.6884C9.4407 15.6918 9.39066 15.7053 9.34465 15.728C9.29864 15.7508 9.25756 15.7824 9.22376 15.821C9.18996 15.8596 9.1641 15.9045 9.14766 15.9532C9.13121 16.0018 9.12451 16.0532 9.12792 16.1044C9.13133 16.1556 9.1448 16.2056 9.16756 16.2517C9.19031 16.2977 9.2219 16.3387 9.26053 16.3725C9.29916 16.4063 9.34407 16.4322 9.39269 16.4487C9.44132 16.4651 9.4927 16.4718 9.54392 16.4684H9.59332L14.7595 15.7924L14.4527 16.7856C14.3859 17.0013 14.3911 17.2329 14.4676 17.4454C14.544 17.6579 14.6876 17.8397 14.8765 17.9634C15.0456 18.0748 15.2435 18.1344 15.4459 18.135C15.6969 18.1334 15.9389 18.041 16.1271 17.875L18.1759 16.1018L18.1967 16.0784C18.2126 16.0637 18.2266 16.0471 18.2383 16.029L19.9335 13.429L20.7993 19.981C20.8133 20.0854 20.8065 20.1915 20.7793 20.2932C20.752 20.395 20.705 20.4903 20.6407 20.5738C20.5785 20.6564 20.5005 20.7259 20.4113 20.7781C20.322 20.8303 20.2232 20.8643 20.1207 20.878L9.16952 22.3158C9.06521 22.3293 8.95926 22.3221 8.85772 22.2947C8.75619 22.2672 8.66105 22.22 8.57776 22.1558C8.49446 22.0916 8.42463 22.0116 8.37226 21.9204C8.31988 21.8291 8.28599 21.7285 8.27252 21.6242L5.96112 4.03259C5.93347 3.82179 5.9905 3.60862 6.11972 3.43979ZM2.26132 5.71999L5.27732 4.81259L7.49772 21.7256C7.54793 22.1045 7.73352 22.4525 8.02025 22.7053C8.30698 22.9581 8.67547 23.0987 9.05772 23.101C9.12734 23.101 9.19687 23.0958 9.26572 23.0854L13.5505 22.5238L7.83052 24.245C7.62814 24.3057 7.40994 24.2837 7.22376 24.1838C7.03758 24.0839 6.89861 23.9142 6.83732 23.712L1.72312 6.72099C1.6927 6.61993 1.68249 6.51386 1.69308 6.40885C1.70367 6.30384 1.73484 6.20194 1.78482 6.10898C1.8348 6.01602 1.90261 5.93382 1.98437 5.86708C2.06613 5.80033 2.16024 5.75035 2.26132 5.71999ZM10.1237 5.30399C10.1104 5.20162 10.1383 5.09815 10.2011 5.01628C10.264 4.9344 10.3568 4.88079 10.4591 4.86719L16.6991 4.04559C16.7503 4.03893 16.8024 4.04243 16.8522 4.05588C16.9021 4.06932 16.9488 4.09246 16.9897 4.12397C17.0307 4.15548 17.065 4.19474 17.0907 4.2395C17.1165 4.28427 17.1332 4.33368 17.1398 4.38489C17.1465 4.43611 17.143 4.48813 17.1295 4.538C17.1161 4.58786 17.0929 4.63459 17.0614 4.67551C17.0299 4.71644 16.9907 4.75075 16.9459 4.7765C16.9011 4.80225 16.8517 4.81893 16.8005 4.82559L10.5605 5.64459H10.5111C10.4163 5.64417 10.3248 5.60945 10.2536 5.54684C10.1824 5.48424 10.1363 5.39797 10.1237 5.30399ZM8.23612 9.11559C8.22959 9.06432 8.23332 9.01226 8.24709 8.96244C8.26086 8.91262 8.2844 8.86603 8.31633 8.82539C8.34827 8.78474 8.38796 8.75085 8.43311 8.72569C8.47826 8.70052 8.52796 8.68458 8.57932 8.67879L17.1593 7.53999C17.2628 7.52655 17.3673 7.55474 17.4499 7.61837C17.5326 7.682 17.5866 7.77586 17.6 7.87929C17.6135 7.98273 17.5853 8.08727 17.5216 8.16991C17.458 8.25256 17.3642 8.30654 17.2607 8.31999L8.67292 9.45359H8.62352C8.52909 9.45326 8.43795 9.4189 8.3668 9.35682C8.29565 9.29475 8.24925 9.2091 8.23612 9.11559ZM11.1507 12.298C11.158 12.3491 11.1551 12.4011 11.1422 12.4511C11.1293 12.501 11.1065 12.5479 11.0753 12.589C11.0441 12.6302 11.0051 12.6647 10.9605 12.6906C10.9158 12.7165 10.8665 12.7333 10.8153 12.74L9.13312 12.961H9.08372C8.98028 12.9679 8.87835 12.9334 8.80033 12.8651C8.72232 12.7969 8.67462 12.7004 8.66772 12.597C8.66082 12.4936 8.6953 12.3916 8.76356 12.3136C8.83183 12.2356 8.92829 12.1879 9.03172 12.181L10.7139 11.96C10.7648 11.9534 10.8165 11.957 10.866 11.9704C10.9155 11.9839 10.9619 12.007 11.0025 12.0384C11.043 12.0697 11.077 12.1088 11.1025 12.1534C11.1279 12.198 11.1443 12.2471 11.1507 12.298ZM9.61932 19.63C9.60603 19.5276 9.63388 19.4242 9.69675 19.3423C9.75962 19.2604 9.85239 19.2068 9.95472 19.1932L12.9473 18.8006C12.9985 18.7938 13.0506 18.7971 13.1005 18.8104C13.1505 18.8237 13.1973 18.8467 13.2383 18.878C13.2794 18.9094 13.3138 18.9486 13.3397 18.9933C13.3656 19.038 13.3825 19.0874 13.3893 19.1386C13.3961 19.1898 13.3928 19.2419 13.3795 19.2918C13.3662 19.3417 13.3432 19.3885 13.3119 19.4296C13.2805 19.4706 13.2413 19.5051 13.1966 19.531C13.1519 19.5569 13.1025 19.5738 13.0513 19.5806L10.0535 19.9654H10.0041C9.91038 19.9651 9.81989 19.931 9.74923 19.8694C9.67856 19.8078 9.63244 19.7228 9.61932 19.63Z" fill=""/>
  </g>
  <defs>
    <clipPath id="clip0_303_5241">
      <rect width="26" height="26" fill="white"/>
    </clipPath>
  </defs>
</svg>
          </div>
        </div>
        <div className=''>
          <p className='sm:text-xl    font-semibold'>
             پذیره نویسی
          </p>
        </div>
    </button>
                </div>
                {tool}
            </div>
            <div className='md:w-1/2 lg:w-1/3 sm:w-2/3 w-5/6 lg:mt-0 mt-8 sm:px-0 p-4'>
                <div className='bgReport space-y-8  xl:py-24 py-16 mx-4 xl:mx-16 flex flex-col items-center justify-center rounded-2xl shadow-md shadow-[#9a9a9a40]'>
                    <div className='xl:w-1/2 w-3/5'>
                        <Image className='w-full' src={"/images/Capa_5.svg"} height={0} width={0} alt='clock'/>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-[#0141AC]'>
                            ما بهت خبر میدیم
                        </p>

                    </div>
                    <div>
                        <button className='bg-[#367AFF] hover:bg-[#256cf8] rounded-2xl px-6 py-2 text-white font-semibold '>
                            رایگان فعال کن
                        </button>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}
