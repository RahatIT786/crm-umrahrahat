import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'; 
import { pink } from '@mui/material/colors';

const DynamicCheckbox = ({
  label = 'Checkbox demo',    
  defaultChecked = false,     
  color = 'primary',        
  customColor = pink[600],   
  ...props                   
}) => {
  return (
    <FormControlLabel      
      control={
        <Checkbox
          {...props}         
          defaultChecked={defaultChecked} 
          color={color}    
          sx={{
            color: color === 'default' ? undefined : customColor,
            '&.Mui-checked': {
              color: customColor, 
            },
          }}
        />
      }
      label={label}           
    />
  );
};

export default DynamicCheckbox;

