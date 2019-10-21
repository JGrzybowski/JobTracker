import React from 'react';
import { TextField, DatePicker, DayOfWeek } from 'office-ui-fabric-react';

export const PersonalDataForm: React.FunctionComponent = () => {
  return (
      <div>      
      <TextField label="First Name" />
      <TextField label="Last Name" />
      <DatePicker label="Date of Birth" ariaLabel="Date of Birth" 
                  firstDayOfWeek={DayOfWeek.Monday} />
      <TextField label="Email" />
      <TextField label="Phone" />
      </div>
  );
};
