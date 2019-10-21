import React from 'react';
import { FontWeights, TextField, DatePicker, DayOfWeek } from 'office-ui-fabric-react';
// import { Text } from 'office-ui-fabric-react/lib/Text';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

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
