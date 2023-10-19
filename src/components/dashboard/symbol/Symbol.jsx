import React from 'react'
import Candle from './Candle'
import Line from './Line'
import SymbolInformation from './SymbolInformation'

export default function Symbol() {
  return (
    <div className='flex flex-col '>
        <div className='flex justify-between gap-3 m-4'>
            <div className='space-y-4 w-3/5'>
                <SymbolInformation/>
            </div>
            <div className='space-y-4 w-2/5'>
                <Candle/>
                <Line/>
            </div>
        </div>
        <div className='flex flex-col space-y-4 justify-center'>
          <div className='flex justify-center items-center text-white bg-[#367AFF] rounded-3xl mx-4' >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M13.0253 10.3787C12.5721 10.5 12.3232 10.6596 11.9721 11.0489C11.404 11.6809 11.4551 10.4681 11.4551 24C11.4551 37.7553 11.3849 36.3574 12.087 37.0596C12.7572 37.7298 12.3934 37.6915 17.9849 37.6915H22.7976L22.9189 37.5383C23.0849 37.3404 23.0721 37.0723 22.8934 36.9064L22.7466 36.766L17.9657 36.7532L13.1785 36.734L12.9423 36.5872C12.8146 36.5043 12.6423 36.3319 12.5593 36.2043L12.4125 35.9681V24V12.0319L12.5593 11.7957C12.6423 11.6681 12.8146 11.4957 12.9423 11.4128L13.1785 11.266L19.0317 11.2468L24.8785 11.234L24.904 13.417L24.9232 15.6064L25.1019 15.9894C25.3189 16.4553 25.6444 16.8064 26.0721 17.0298L26.3912 17.2021L28.6764 17.2213L30.9551 17.2404V20.9298V24.6192L31.1019 24.7532C31.3125 24.9511 31.6125 24.9383 31.7785 24.7277C31.9125 24.5617 31.9125 24.5043 31.9125 20.5915V16.6277L28.7529 13.4681L25.5934 10.3085L19.4849 10.2957C14.2891 10.283 13.3189 10.2957 13.0253 10.3787ZM28.6189 16.3277C27.604 16.334 26.8891 16.3149 26.7359 16.2766C26.3976 16.1809 26.0147 15.8298 25.9253 15.5234C25.8742 15.3574 25.8487 14.6872 25.8487 13.5894V11.9043L28.0508 14.1064L30.2529 16.3085L28.6189 16.3277Z" fill="white"/>
                  <path d="M18.0714 14.9362C17.3182 15.1341 16.6288 15.5298 16.0799 16.0851C15.5373 16.6277 15.2501 17.0809 15.0203 17.7383C14.3884 19.5575 15.0203 21.5936 16.5522 22.6915C17.4522 23.3298 18.3012 23.5851 19.3671 23.5341C21.1927 23.4447 22.7182 22.283 23.331 20.5213C23.4905 20.0745 23.5097 19.9149 23.5097 19.2128C23.5161 18.4979 23.4969 18.3575 23.331 17.8468C22.8586 16.4107 21.6714 15.3064 20.2033 14.9362C19.5522 14.7702 18.7033 14.7702 18.0714 14.9362ZM18.6842 17.4958L18.665 19.2256L17.4522 19.9277C16.7884 20.3107 16.2139 20.649 16.182 20.6809C16.1501 20.7128 16.1884 20.8404 16.2714 20.9809C16.348 21.1213 16.3671 21.1724 16.3033 21.0958C16.0097 20.7511 15.6969 19.7681 15.6969 19.1809C15.6969 18.0958 16.3352 16.9277 17.2544 16.3149C17.5544 16.117 18.4097 15.7724 18.6203 15.766C18.6842 15.766 18.6969 16.1362 18.6842 17.4958ZM20.4522 16.0022C21.1863 16.2894 21.965 17.0234 22.2778 17.7192C22.5905 18.4149 22.6735 19.3022 22.4948 20.0107C22.3288 20.6617 22.0927 21.0639 21.5756 21.5809C20.8544 22.3022 20.1586 22.5958 19.1756 22.5958C18.3076 22.5958 17.4778 22.2958 16.8905 21.7596C16.6671 21.5553 16.6416 21.5043 16.7182 21.4532C16.7693 21.4149 17.4203 21.0383 18.1608 20.6107C19.0863 20.0809 19.5331 19.7873 19.5842 19.6787C19.6288 19.5766 19.6544 18.8873 19.6544 17.649V15.766L19.865 15.8107C19.9735 15.8298 20.2416 15.9128 20.4522 16.0022Z" fill="white"/>
                  <path d="M15.1277 26.1064C15.0574 26.1766 15 26.317 15 26.4255C15 26.534 15.0574 26.6744 15.1277 26.7447C15.2553 26.8723 15.3383 26.8723 21.6702 26.8723C28.0021 26.8723 28.0851 26.8723 28.2128 26.7447C28.366 26.5915 28.3787 26.317 28.2383 26.1191L28.1426 25.9787H21.6957C15.3383 25.9787 15.2553 25.9787 15.1277 26.1064Z" fill="white"/>
                  <path d="M32.148 26.7957C32.0522 26.8978 32.0395 27.1212 32.0395 28.6148V30.3127L30.3863 30.3318C28.8735 30.351 28.7203 30.3637 28.599 30.4723C28.4778 30.5872 28.465 30.6701 28.4522 31.9084L28.4331 33.2233L26.7607 33.2552C25.2671 33.2808 25.0756 33.2999 24.9735 33.402C24.8714 33.5042 24.8586 33.6893 24.8395 35.4191L24.8203 37.3276L24.9799 37.5063L25.1331 37.6914H30.6927H36.2458L36.3927 37.5446L36.5395 37.3978V32.1765C36.5395 27.1276 36.5331 26.9425 36.4182 26.8148C36.2969 26.6808 36.2458 26.6808 34.2735 26.6808C32.3969 26.6808 32.2437 26.6872 32.148 26.7957ZM35.6012 32.1893L35.6139 36.7659L34.2927 36.7531L32.965 36.734L32.9458 32.234C32.9395 29.7574 32.9458 27.6957 32.965 27.651C32.9841 27.5872 33.2905 27.5744 34.2863 27.5872L35.582 27.6063L35.6012 32.1893ZM32.0395 34.0212V36.7659H30.699H29.3586V34.0212V31.2765H30.699H32.0395V34.0212ZM28.4522 35.4701L28.4331 36.734L27.1118 36.7531L25.7841 36.7659V35.4893V34.2127H27.1246H28.465L28.4522 35.4701Z" fill="white"/>
                  <path d="M15.2246 29.6234C15.1033 29.7191 15.0586 29.8149 15.0586 29.9681C15.0586 30.1212 15.1033 30.217 15.2246 30.3127C15.3905 30.4468 15.4543 30.4468 18.3777 30.4468C21.3011 30.4468 21.365 30.4468 21.5309 30.3127C21.7607 30.134 21.7607 29.8021 21.5309 29.6234C21.365 29.4893 21.3011 29.4893 18.3777 29.4893C15.4543 29.4893 15.3905 29.4893 15.2246 29.6234Z" fill="white"/>
              </svg>
            </div>
            <div>
              <p className='font-bold text-lg'>
              بنیادی
              </p>
            </div>
          </div>
        
        </div>
    </div>
  )
}
