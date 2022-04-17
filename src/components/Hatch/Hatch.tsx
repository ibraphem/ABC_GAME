import React from 'react';
// Types
import { HatchType } from '../../helpers';
// Styles
import { Wrapper } from './Hatch.styles';

type HatchProps = {
  hatchData: HatchType
  handleClick: () => void
  enabledCallback: (nr: string) => boolean
}


const Hatch: React.FC<HatchProps> = ({hatchData: {nr, text, img, open, forImage}, handleClick, enabledCallback}) => (
  <Wrapper open={open} background={img} enabled={enabledCallback(nr)} onClick={handleClick}>
    <div className='front'><p>{nr}</p></div>
    <div className='back' style={{display:"flex", flexDirection:"column"}}>
      <p>{`${nr} for ${text}`}</p>
      <img src={forImage} />
    </div>
    
  </Wrapper>
);

export default React.memo(Hatch);
