import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import InputText from '../InputText/InputText';
import InputAnnotation from '../InputAnnotation/InputAnnotation';

const InputGroup = ({ ...props }) => {
  return (
    <div>
      <InputLabel {...props} />
      <InputText {...props} />
      <InputAnnotation {...props} />
    </div>
  );
};

export default InputGroup;
