import React, { useEffect, useState } from 'react'

function App() {
  const[backendData,setBackendData] = useState({});
  const[isDarkMode,setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));
  const[searchInput,setSearchInput] = useState('octocat');
  const defaultBio = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
  

  
    const isoData = backendData.joined;
    const date = new Date(isoData);

    const formatted = date.toLocaleDateString('en-GB',{
      day:'2-digit',
      month:'short',
      year:'numeric'
    })
    
  


  
  const toggle = () =>{
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode)
  }
  useEffect(() => {
    fetch("/api/"+searchInput).then(response => response.json()). then(
      data => {
        console.log(data)
        setBackendData(data)
      }
      
     
      
    );
   
    
  },[])
  
  const handleChange = (e) =>{
    setSearchInput(e.target.value)
  }
  const handleSearch = () => {
    fetch("/api/" + searchInput).then(response => response.json()). then(
      data => {
        console.log(data)
        setBackendData(data)
      }
    );
  }
  return (
    <div>
      <div className='bg-f-light-greyblue dark:bg-f-light-blue-400 min-h-svh pt-[31px] px-[24px] md:px-[98px] lg:flex lg:flex-center lg:justify-center '>
        <div className='lg:max-w-[730px] '>
          <div className='flex justify-between items-center'>
           <p className={`font-bold text-[26px] ${isDarkMode ? 'text-white' : 'text-[#222731]'}`}>devfinder</p>
           {
            isDarkMode ? (
              <button onClick={toggle} className='group flex items-center justify-center gap-[16px] hover:cursor-pointer '>
           <p className='text-white group-hover:text-[#90A4D4] font-bold text-[13px] tracking-[2.5px]'>LIGHT</p>
           <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className='text-[#ffffff] group-hover:text-[#90A4D4]'>
           <g fill="currentColor" fillRule="nonzero">
            <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/></g></svg>
           </button>
            ) : (
              <button onClick={toggle} className='group flex items-center justify-center gap-[16px] hover:cursor-pointer'>
           <p className='text-[#697C9A] font-bold text-[13px] tracking-[2.5px] group-hover:text-[#222731]'>DARK</p>
           <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className='text-[#697C9A] group-hover:text-[#222731]'>
           
           <path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
            fill="currentColor" fillRule="nonzero"/></svg>
           </button>
            )
}

           

          </div>
          <div className='dark:bg-[#1E2A47] bg-white p-[7px] pl-[16px] mt-[36px] flex items-center justify-between  rounded-[15px] shadow-xl '>
            <div className='flex items-center gap-[8px] md:gap-[24px]'>
            <img src='./assets/icon-search.svg' className='w-[17px] h-auto '></img>
            <input onChange={handleChange} type='text' placeholder='Search GitHub username...' 
            className='placeholder-[#4B6A9B]  dark:placeholder-white dark:text-white  text-[#222731] font-normal placeholder:font-normal placeholder:text-[13px] placeholder:leading-[25px]  outline-none  '
          ></input>
            </div>
            
            <button onClick={handleSearch} className='bg-[#0079FF] hover:bg-[#60ABFF] hover:cursor-pointer rounded-[10px] px-[16px] py-[12.5px] text-white font-bold text-[16px]  '>search</button>
          </div>
          <div className='bg-white dark:bg-[#1E2A47] px-[24px] pt-[32px] pb-[48px] mt-[16px] rounded-[15px] shadow-xl lg:flex lg:gap-[32px]'>
            <img className='hidden lg:block h-[117px] w-auto rounded-[999px] ' src={backendData.avatar}></img>
            <div>
            <div className='flex gap-[19px]'>
              <img className='h-[70px] w-auto rounded-[999px] overflow-hidden lg:hidden' src={backendData.avatar}></img>
              <div className='lg:flex lg:w-full lg:justify-between '>
                <div >
                <p className='font-bold text-[16px] lg:text-[26px] dark:text-white text-[#2B3442]'>{backendData.name}</p>
                <p className='font-normal text-[13px] lg:text-[16px] text-[#0079FF]'>@{backendData.login}</p>
                </div>
                <p className='text-[#697C9A] dark:text-white lg:text-[15px]  font-normal text-[13px] mt-[6px]   '>Joined {formatted}</p>
              </div>
              
            </div>
            {
                backendData.bio ? <p className='mt-[24px] mb-[32px] font-normal text-[13px] md:text-[15px] leading-[25px] text-[#4B6A9B] dark:text-white'>{backendData.bio}</p> : <p className='mt-[24px] mb-[32px] font-regular text-[13px] md:text-[15px] leading-[25px] text-[#4B6A9B] dark:text-white '>{defaultBio}</p>
              }
              <div className='flex justify-evenly md:justify-start rounded-[10px] bg-[#F6F8FF] dark:bg-[#141D2F] px-[15px] md:px-[32px] pt-[18px] pb-[19px]'>
                <div className='text-center md:text-left flex-1 '>
                  <p className='text-[#4B6A9B] dark:text-white font-regular text-[11px] lg:text-[13px]'>Repos</p>
                  <p className='text-[#2B3442] dark:text-white font-bold text-[16px] lg:text-[22px]'>{backendData.repos}</p>
                </div>
                <div className='text-center md:text-left flex-1'>
                  <p className='text-[#4B6A9B] dark:text-white font-regular text-[11px] lg:text-[13px]'>Followers</p>
                  <p className='text-[#2B3442] dark:text-white font-bold text-[16px] lg:text-[22px]'>{backendData.followers}</p>
                </div>
                <div className='text-center md:text-left flex-1'>
                  <p className='text-[#4B6A9B] dark:text-white font-regular text-[11px] lg:text-[13px]'>Following</p>
                  <p className='text-[#2B3442] dark:text-white font-bold text-[16px] lg:text-[22px]'>{backendData.following}</p>
                </div>
              </div>
              <div className='flex flex-col md:grid grid-cols-2 gap-y-[16px] mt-[24px] '>
                {
                  backendData.location ? 
                  <div className=' flex gap-[19px] items-center '>
                  <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" fill="currentColor" className='text-[#4b6a9b] dark:text-white'/></svg>
                  <p className='font-normal text-[13px] lg:text-[15px] text-[#4B6A9B] dark:text-white'>{backendData.location}</p>
                </div>
                : <div className='opacity-50 flex gap-[19px] items-center '>
                <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" fill="currentColor" className='text-[#4b6a9b] dark:text-white'/></svg>
                <p className='font-normal text-[13px] lg:text-[15px] text-[#4B6A9B] dark:text-white'>Not Available</p>
              </div>
                }
                {
                  backendData.blog ? 
                  <div className=' flex gap-[13px] items-center cursor-pointer'>
                  <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" className='text-[#4b6a9b] dark:text-white'><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"/></g></svg>
                  <a className='font-normal text-[13px] lg:text-[15px] text-[#4B6A9B] dark:text-white hover:underline' href={backendData.blog} target='blank' >{backendData.blog}</a>
                  
                </div>
                : <div className='opacity-50 flex gap-[13px] items-center '>
                <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" className='text-[#4b6a9b] dark:text-white'><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"/></g></svg>
                <p className='font-normal text-[13px] lg:text-[15px] text-[#4B6A9B] dark:text-white'>Not Available</p>
              </div>
                }
                 {
                  backendData.twitter ? 
                  <div className=' flex gap-[13px] items-center '>
                  <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill="currentColor" className='text-[#4b6a9b] dark:text-white'/></svg>
                  <p className='font-normal text-[13px] lg:text-[15px] text-currentColor] dark:text-white'>{backendData.twitter}</p>
                </div>
                : <div className='opacity-50 flex gap-[13px] items-center '>
                <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill="currentColor" className='text-[#4b6a9b] dark:text-white' /></svg>
                <p className='font-normal text-[13px] lg:text-[15px] text-[#4B6A9B] dark:text-white'>Not Available</p>
              </div>
                }
                 {
                  backendData.company ? 
                  <div className=' flex gap-[13px] items-center '>
                  <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" className='text-[#4b6a9b] dark:text-white'><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/></g></svg>
                  <p className='font-normal text-[13px] lg:text-[15px] text-[#4B6A9B] dark:text-white'>{backendData.company}</p>
                </div>
                : <div className='opacity-50 flex gap-[13px] items-center '>
                <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" className='text-[#4b6a9b] dark:text-white'><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/></g></svg>
                <p className='font-normal text-[13px] lg:text-[15px] text-[#4B6A9B] dark:text-white'>Not Available</p>
              </div>
                }
              </div>
        </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App

