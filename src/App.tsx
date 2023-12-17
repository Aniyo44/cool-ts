import { useEffect, useState } from "react";
import './index.css';
import websitesData from "./data";

function App() {
  const [randomWebsite, setRandomWebsite] = useState<string | undefined>(undefined);

  useEffect(() => {

    // Select a random website initially
    selectRandomWebsite();
  }, []);

  const selectRandomWebsite = () => {
    const randomIndex = Math.floor(Math.random() * websitesData.length);
    setRandomWebsite(websitesData[randomIndex]);
  };

  const handleDiveInClick = () => {
    // Select a new random website when the user clicks "Dive In"
    selectRandomWebsite();
  };

  return (
    <div className='min-h-screen flex justify-center max-w-full items-center flex-col bg-gradient-to-br  from-fuchsia-500 to-yellow-500 '>
      <div className='text-center'>
        <h1 className='text-7xl whitespace-pre-line text-white'>Explore <br />the Web's Hidden Gems!</h1>
      </div>
      <div className='mt-20'>
        <a href={randomWebsite} target='_blank' rel='noopener noreferrer' onClick={handleDiveInClick} className='text-5xl bg-gradient-to-tr from-blue-500 to-orange-500 rounded-3xl text-center p-3 text-white font-thin italic'>Dive In</a>
      </div>
    </div>
  )
}

export default App;
