import React from 'react';
import { TextField, DatePicker, DayOfWeek, PrimaryButton, FontWeights } from 'office-ui-fabric-react';
import { useHistory } from 'react-router';
import { Text } from 'office-ui-fabric-react/lib/Text';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const PersonalDataForm: React.FunctionComponent = () => {
  let history = useHistory();

  function _moveNextStep(): void {
      history.push('/initialWizard/chooseTemplate')
  }

  return (
      <>  
          <Text variant="xxLarge" styles={boldStyle}>
              Let's start with some basic information about you
          </Text>       
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <DatePicker label="Date of Birth" ariaLabel="Date of Birth" 
                      firstDayOfWeek={DayOfWeek.Monday} />
          <TextField label="Email" />
          <TextField label="Phone" />
          <PrimaryButton text="Next" onClick={_moveNextStep} />
      </>
  );
};
