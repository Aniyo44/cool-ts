import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://glfcfqqhhippoyqabxpm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsZmNmcXFoaGlwcG95cWFieHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwODQ2NTEsImV4cCI6MjAwNDY2MDY1MX0.rK9qLQk3GLyi_y3tg5jm20vXBnbmXWibeUyr6BGUoaE");

import './index.css'

function App() {
  const [websites, setWebsites] = useState<any[]>([]);

  useEffect(() => {
    getWebsites();
  }, []);

  async function getWebsites() {
    try {
      const { data, error } = await supabase.from("websites").select();
      if (error) {
        throw error;
      }
      setWebsites(data || []);
    } catch (error) {
      console.error("Error fetching websites:", error);
    }
  }

  console.log(websites);

  return (
  <div className='min-h-screen flex justify-center max-w-full items-center flex-col bg-gradient-to-br  from-fuchsia-500 to-yellow-500 '>
   
    <div className='text-center'>
    <h1 className='text-7xl whitespace-pre-line text-white'>Explore <br></br>the Web's Hidden Gems!</h1>
    </div>
    
    <div className='mt-20'>
    <a href='#' target='_blank' className='text-5xl bg-gradient-to-tr from-blue-500 to-orange-500  rounded-3xl text-center p-3 text-white font-thin italic'>Dive In</a>
    </div>
    </div>
  )
}

export default App
