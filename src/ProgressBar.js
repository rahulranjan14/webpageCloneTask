
import React from 'react';
import { Progress } from 'reactstrap';

const Example = ({value=50, textvalue="50"}) => {

  
  return (
    <div>
      
      <div className="text-center">{textvalue}</div>
      <Progress value="50" className="mb-3" />
     
    </div>
  );
};

export default Example;