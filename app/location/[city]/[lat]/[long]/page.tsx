'use client'

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

function WeatherPage({ params: { city, lat, long } }: Props) {


    
    console.log("props", city, lat, long)
  return (
      <div className='min-h-screen w-screen overflow-x-hidden bg-[#0E100F] relative'>
        <div className="blurItem bg-yellow-800 blur-3xl w-40 h-56 rounded-full absolute top-0 left-0"></div>
        <div className="blurItem bg-blue-600 blur-3xl w-60 h-60 rounded-full absolute right-0 top-14"></div>
        <div className="blurItem bg-purple-600 blur-3xl w-56 h-60 rounded-full absolute bottom-0 left-28"></div>
          
          <div className="relative z-10">
               <h1 className='text-white'>Weather Page</h1>
          </div>
       
    </div>
  )
}

export default WeatherPage