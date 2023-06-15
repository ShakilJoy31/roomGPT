import Navbar from '../components/Navbar';
import '../styles/globals.css'
import { useEffect, useState } from 'react';
import { UserStore } from '../userStore';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('white');
  const [color, setColor] = useState(theme);
  useEffect(()=>{
    const localStorageItem = JSON.parse(localStorage.getItem("color")); 
    setColor(localStorageItem); 
    // console.log(localStorageItem);
  },[theme])
  console.log(color); 
  console.log(theme); 
  return ( 
    <UserStore.Provider>
    <div style={{background: color || theme, color: (color || theme) == 'white' ? 'black' : 'white'}}>
      <Navbar setTheme={setTheme} theme={theme}></Navbar>
      <Component {...pageProps} />
    </div>
    </UserStore.Provider>
  )
}


// return ( 
//   <QueryClientProvider client={queryClient}>
//     <Navbar></Navbar>
//     <Component {...pageProps} />
//   </QueryClientProvider>
//   )