import React, { Component } from 'react';
import './App.css';
import BasicButton from './component/BasicButton';
import * as S from './styles/App'

class App extends Component {
  render() {
    return (
      <div >
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="App">
          <S.Container>
            <BasicButton text={'Primary Button'} dis={false} testid={'primaryButton'}/>
            <BasicButton text={'Primary Button'} dis={false} icon={'check'} testid={'primaryButtonIcon'} testidIcon={'check'}/>
            <BasicButton text={'Disabled Primary Button'} dis={true} testid={'primaryButtonDisabled'}/>
          </S.Container>
          <S.Container>
            <BasicButton text={'Secundary Button'} dis={false} variant={'Secundary'} testid={'secundaryButton'}/>
            <BasicButton text={'Secundary Button'} dis={false} variant={'Secundary'} icon={'refresh'} testid={'secundaryButtonIcon'} testidIcon={'refresh'}/>
            <BasicButton text={'Disabled Secundary Button'} dis={true} variant={'Secundary'} testid={'secundaryButtonDisabled'}/>
          </S.Container>
          <S.Box>
            <BasicButton text={'box 400x400'} dis={false} icon={'arrow_forward'} testid={'primaryButtonBox'} testidIcon={'arrow_forward'}/>
          </S.Box>
        </div>
      </div>
    );
  }
}

export default App;