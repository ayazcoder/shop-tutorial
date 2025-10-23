// import React, { useEffect, useState } from 'react'
// import Image from '../assets/images/slider1.jpg'
// import Slide2 from '../assets/images/slider2.jpg'

// const Home = () => {
//   const [selectedSpan, setSelectedSpan] = useState(0)
//   const backgroundImageStyle = {
//     backgroundImage: `url(${selectedSpan === 0 || selectedSpan === 2 ? Image : Slide2})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   }
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSelectedSpan((prev) => (prev + 1) % 4);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [])
//   const handleSpanClick = (index) => {
//     setSelectedSpan(index)
//   }
//   return (
//     <div className='' style={{ ...backgroundImageStyle, height: "calc(100vh - 80px)" }}>
//       <div className="absolute top-11/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//         <div className="flex justify-center items-center">
//           {[0, 1, 2, 3, 4].map((index) => {
//             return (
//               <span key={index} onClick={() => handleSpanClick(index)} className={` flex cursor-pointer items-center justify-center w-auto h-auto rounded-full ${selectedSpan === index ? 'border-2 border-color-primary m-2' : 'm-2'}`}>
//                 <span className={`inline-block w-2.5 h-2.5 rounded-full  ${selectedSpan === index ? 'bg-[#141F46]' : 'bg-white'} m-3`}></span>
//               </span>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import Image from '../assets/images/slider1.jpg'
import Image2 from '../assets/images/slider2.jpg'

const Home = () => {
  const [selectedSpan, setSelectedSpan] = useState(0);

  const bgStyle = {
    backgroundImage: `url(${selectedSpan === 0 || selectedSpan === 2 ? Image : Image2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('called')
      setSelectedSpan((prev) => (prev + 1) % 4);

    }, 3000);
    return () => clearInterval(interval);
  }, [])
  console.log('selectedSpan', selectedSpan);

  return (
    <div className='flex items-start justify-start' style={{ height: 'calc(100vh - 80px)', ...bgStyle }}>
      <div className="content flex flex-col gap-2  justify-center m-40 mt-52">
        <div className="flex items-center gap-4"> <hr className='h-1 w-[70px] bg-[#141F46]' /> <span className='text-xl uppercase font-light'>Trending 2025</span></div>
        <h2 className='uppercase text-6xl'>Interior design </h2>
        <p className="text-lg text-[#767676]">Consectetur adipisicing elit</p>
        <p className="text-lg text-[#767676]">Lorem ipsum dolor.</p>
        <button className='mt-8 cursor-pointer w-40 h-12 bg-[#141F46] text-white uppercase font-semibold'>Buy Now</button>
      </div>
      <div className=""></div>
      <div className="flex justify-center items-center absolute top-11/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        {
          [0, 1, 2, 3, 4].map((index) => {
            return (
              <span key={index} onClick={() => setSelectedSpan(index)} className={` flex cursor-pointer items-center justify-center w-auto h-auto rounded-full ${selectedSpan === index ? 'border-2 border-color-primary m-2' : 'm-2'}`}>
                <span className={`inline-block w-2.5 h-2.5 rounded-full  ${selectedSpan === index ? 'bg-[#141F46]' : 'bg-white'} m-3`}></span>
              </span>
            )
          })
        }
      </div>

    </div>
  )
}

export default Home
