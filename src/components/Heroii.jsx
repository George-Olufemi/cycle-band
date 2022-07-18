import React from "react";

export default function Heroii() {
  return(
    <>
        <div className="h-auto bg-[#11012C] pt-[20px]  md:pt-[60px]">
        {/* Appbar */}
            <div className="sm:flex justify-between items-center px-3  md:px-[60px]">
                <div className="flex items-center">
                    <div className="mr-[20px] ml-5 md:ml-0">
                        <img src="/emojione_bicycle.png" alt="Bicycle Logo" />
                    </div>
                    <div className="mt-5">
                        <h1 className="font-[Raleway] font-[500] md:font-[700] text-[20px] md:text-[28px] leading-[33px] text-[#E4D5FF]">Cycle Band</h1>
                    </div>
                </div>
                {/*  */}
                <div className="hidden sm:block">
                    <div className="flex pt-8">
                        <div className="w-[200px] md:w-[212px] h-[49px] bg-[#2A0072] rounded-[5px] flex items-center cursor-pointer">
                            <div className="pl-[15px] mr-[9px] md:mr-[16px]">
                                <h1 className="font-[600] text-[19px] md:text-[18px] text-[#E4D5FF]">Get Started now</h1>
                            </div>
                            <div>
                                <img src="/arrow_forward.png" alt="Arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of Appbar */}
            {/*  */}
            <div className="md:flex">
                <div className="text-white mt-[100px] pl-[30px] md:pl-[110px] md:mr-20 mb-[60px]">
                    <h1 className="font-[700] text-[25px]  md:text-[30px] leading-[35px] ">Welcome to Cycle Band</h1>
                    <p className="font-[500] text-[18px]  md:text-[24px] leading-[24px] mt-[22px]">Buy, sell, repair and talk to other Bicycle owners</p>
                    {/* button */}
                    <div className="flex pt-8 mt-[90px] md:mt-[128px]">
                        <div className="w-[200px] md:w-[212px] h-[49px] bg-[#2A0072] rounded-[5px] flex items-center cursor-pointer">
                            <div className="pl-[15px] mr-[9px] md:mr-[16px]">
                                <h1 className="font-[600] text-[19px] md:text-[18px] text-[#E4D5FF]">Get Started now</h1>
                            </div>
                            <div>
                                <img src="/arrow_forward.png" alt="Arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-[700px]" src="/Bicycle ride together.png" alt="Bicycle ride together" />
                </div>
            </div>
        </div>
    </>
  );
}
