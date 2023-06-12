import Navbar from '../components/Navbar';
import '../styles/globals.css'
// import { QueryClientProvider, QueryClient } from 'react-query'
import { QueryClientProvider, QueryClient } from 'react-query';
import { useState } from 'react';

const queryClient = new QueryClient(); 

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(''); 
  return ( 
    <div style={{background: 'white', color:'black'}}>
      <Navbar setTheme={setTheme}></Navbar>
      <Component {...pageProps} />
    </div>
  )
}


// return ( 
//   <QueryClientProvider client={queryClient}>
//     <Navbar></Navbar>
//     <Component {...pageProps} />
//   </QueryClientProvider>
//   )