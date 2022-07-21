import React from "react";

export default function Bicycle(props) {
  return(
    <>
      <div className={`h-[306px] md:w-[362px] ${props.bg} text-center p-10 text-white`}>
        <h1 className="font-[700] text-[28px] leading-[33px] mb-[20px]">{ props.title  }</h1>
        <p className="llnp">{ props.price  }</p>
        <p className="llnp">{ props.spec1}</p>
        <p className="llnp">{ props.spec2  }</p>
        <p className="llnp">{ props.spec3  }</p>
      </div>
    </>
  );
}
