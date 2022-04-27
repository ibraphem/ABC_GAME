import {useState, useEffect, useCallback} from 'react';
import Hatch from './components/Hatch/Hatch';
import { HatchType, createCalendar } from './helpers';
// Styles
import { GlobalStyle, StyledApp } from './App.styles';
import Header from './components/header/Header';


const App: React.FC = () => {
  const [hatches, setHatches] = useState<HatchType[]>(createCalendar())
  const [selectedAlphabets, setSelectedAlphabets] = useState<string[]>([])
  const [theAlphabet, setTheAlphabet] = useState<string>("")


  const randomizeAlphabet = ():void => {
    const alphabets:string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let remainder = alphabets.filter(x => !selectedAlphabets.includes(x));
    let alphabet = remainder[Math.floor(Math.random()*remainder.length)];
  
    setTheAlphabet(alphabet)
    setSelectedAlphabets(() => [...selectedAlphabets, alphabet])
   
  
  }

  const handleClickHatch = ():void => {
    setHatches(prev => prev.map((hatch)=> hatch.nr === theAlphabet ? {...hatch, open: !hatch.open} : hatch))  
  }

  const restart =() => {
    setSelectedAlphabets([])
    setHatches(createCalendar())
  }

    useEffect(() => {
      // localStorage.setItem('calendar', JSON.stringify(hatches))
      randomizeAlphabet()
    }, [hatches])

    const isHatchEnabled = (nr: string): boolean => {

      if(nr === theAlphabet) return true;

      return false

    }


  return (
    <>
    <Header theAlphabet={theAlphabet} restart={restart} />


    <StyledApp>
      <GlobalStyle />
 
      {hatches.map((hatch) => (
        <Hatch key={hatch.nr} hatchData={hatch} handleClick={handleClickHatch} enabledCallback={isHatchEnabled} />
      ))}
      {/* <p>Start here</p> */}
    </StyledApp>
    </>
  );
};

export default App;
