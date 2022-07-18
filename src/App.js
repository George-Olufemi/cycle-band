import React from 'react';
import Bicycle from './components/Bicycle';
//import Heroi from './components/Heroi';
import Heroii from './components/Heroii';
import Slider from './components/Slider';

function App() {
  return (
    <>
      {/* <Heroi /> */}
      <Heroii />
      <Slider />
      <div className="md:flex">
        <Bicycle 
          bg="bg-[#2A0072]"
          title="Tee Bike"
          price="$100 - $200"
          spec1="Cheap"
          spec2="Antique"
          spec3="Not Egronomic"
        />
        <Bicycle 
          bg="bg-[#670DFF]"
          title="Gear Bike"
          price="$250 - $400"
          spec1="Cool"
          spec2="Speed"
          spec3="Egronomic"
        />
        <Bicycle 
          bg="bg-[#11012C]"
          title="Hiking Bike #001"
          price="$400 - $500"
          spec1="Not Classy"
          spec2="Unique"
          spec3="Rocky"
        />
        <Bicycle 
          bg="bg-[#2A0072]"
          title="Sports Bike"
          price="$500 - $900"
          spec1="Elegant"
          spec2="Speed"
          spec3="Egronomic"
        />
      </div>
    </>
  );
}

export default App;