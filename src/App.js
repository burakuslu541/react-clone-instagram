import React from 'react';
function App() {
  const ref = React.useRef();
  React.useEffect(() => {
    let images = ref.current?.querySelectorAll('img'),
     total = images.length,
     current = 0
     const imageSlider = () => {
      if(current > 0){
        images[current-1]?.classList.add('opacity-0');
      }else{
        images[total-1]?.classList.add('opacity-0');
      }
      images[current]?.classList.remove('opacity-0');
      if (current === total-1) {
        current = 0;
      }else{
        current++;
      }
    }
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center gap-x-8">
      <div className="w-[380px] h-[581px] bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] relative" >
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px] bg-white rounded-[20px] shadow-lg" ref={ref}>
          <img  className="absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"  src="https://instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png" alt="Instagram" />
          <img  className="absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"  src="https://instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png" alt="Instagram" />
          <img  className="absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"  src="https://instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png" alt="Instagram" />
          <img  className="absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"  src="https://instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png" alt="Instagram" />
        </div>
      </div>
      <div className="w-[350px] bg-white border px-[50px] pb-2 pt-6">
        <a href="https://www.instagram.com/" className="flex  justify-center">
          <img src='https://instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png' alt='Instagram' className=' h-[51px]' />
        </a>
        <form >
          <label className='block relative'>
            <input type="text" className='bg-zinc-50 border w-full h-[38px] outline-none rounded-sm focus:border-gray-400 px-2 peer' required/>
            <small className='absolute top-1/2 left-[9px] text-xs cursor-text pointer-event-none text-gray-400 -translate-y-1/2 transition-all peer-valid:scale[0.8333]'>Phone number, username or email</small>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
