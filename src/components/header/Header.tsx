import {useEffect} from 'react';
import { StyledHeader } from './Header.styles';

type HeaderTypeProps = {
    theAlphabet: string
    restart: () => void
}

const Header: React.FC<HeaderTypeProps> = ({theAlphabet, restart}) => {
    console.log(theAlphabet);
    
    return (
        <StyledHeader>
            {theAlphabet  ? <p>Find The Letter <b>"{theAlphabet}"</b></p> :
            (<div>
            <p>Hooray!!! You've Identify All the Alphabets. </p>
            <button className='button' onClick={restart}>Try Again</button>
            </div>
            )
            
            }
        </StyledHeader>
    );
};

export default Header;