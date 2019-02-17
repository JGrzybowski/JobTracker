import { initializeIcons } from '@uifabric/icons';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { List } from 'office-ui-fabric-react/lib/List';
import * as React from 'react';

class App extends React.Component {
  public render() {
    initializeIcons();

    return (
      <div className="App">
        <div className="ms-Grid">
          <div className="ms-md4">
            <List />
          </div>
          <div className="ms-md8">
            <DefaultButton
              text='See Button'
              primary={true}
              href='#/components/button'>
              I am a button.
            </DefaultButton>          
          </div>
        
        </div>
       
      </div>
    );
  }
}

export default App;
