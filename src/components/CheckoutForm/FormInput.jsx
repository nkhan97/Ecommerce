import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label  }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        
        render={({ name }) => <TextField {...name} label={label} required />}
        as={TextField}
        name={name}
        defaultValue=""
        control={control}
        fullWidth
     /> 
    </Grid>
  );
}


export default FormInput;