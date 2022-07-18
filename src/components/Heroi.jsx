import React from "react";

export default function Heroi() {
  return(
    <>
        <div className="h-screen bg-[#11012C]">
        {/* Appbar */}
            <div className="flex items-center pt-[20px] md:pt-[77px] pl-[30px]  md:pl-[61.56px]">
                <div className='mr-[20px] md:mr-[45.56px]'>
                    <img src="/emojione_bicycle.png" alt="Bicycle Emoji" />
                </div>
                <div className="text-white mt-5">
                    <h1 className="font-[Raleway] font-[500] md:font-[700] text-[20px] md:text-[28px] leading-[33px] text-[#E4D5FF]">Cycle Band</h1>
                </div>
            </div>
            {/*  */}
            <div className="flex justify-center px-5  mt-[120px]  md:mt-[130px]  2xl:mt-[170px]">
                <div className="w-[701px] h-[363px] bg-[#670DFF] rounded-[50px] ">
                    <h1 className="text-center text-white font-[700] text-[20px] md:text-[28px] leading-[33px] mt-[100px]">Welcome to Cycle Band</h1>
                    <h1 className="text-center text-[#E4D5FF] mt-[30px] font-[500] text-[18px] leading-[21px] font-[Raleway]">Buy, sell, repair and talk to other Bicycle owners</h1>
                    <div className="flex justify-end mt-[60px] mr-[60px]">
                        <div className="w-[200px] md:w-[305px] h-[49px] bg-[#2A0072] rounded-[15px] flex items-center cursor-pointer">
                            <div className="pl-[15px] mr-[16px]">
                                <h1 className="font-[600] text-[19px] md:text-[28px] text-[#E4D5FF]">Get Started now</h1>
                            </div>
                            <div>
                                <img src="/arrow_forward.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
