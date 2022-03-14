import React, { Component } from 'react';
import './App.css';
import BasicButton from './component/BasicButton';
import * as S from './styles/App'

function func() {
  console.log('Olá!!');
}

class App extends Component {
  render() {
    return (
      <div >
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="App">
          <S.Container>
            <BasicButton text={'Primary Button'} dis={false} testid={'primaryButton'} func={func}/>
            <BasicButton text={'Primary Button'} dis={false} icon={'check'} testid={'primaryButtonIcon'} testidIcon={'check'} func={func}/>
            <BasicButton text={'Disabled Primary Button'} dis={true} testid={'primaryButtonDisabled'} func={func}/>
          </S.Container>
          <S.Container>
            <BasicButton text={'Secundary Button'} dis={false} variant={'Secundary'} testid={'secundaryButton'} func={func}/>
            <BasicButton text={'Secundary Button'} dis={false} variant={'Secundary'} icon={'refresh'} testid={'secundaryButtonIcon'} testidIcon={'refresh'} func={func}/>
            <BasicButton text={'Disabled Secundary Button'} dis={true} variant={'Secundary'} testid={'secundaryButtonDisabled'} func={func}/>
          </S.Container>
          <S.Box>
            <BasicButton text={'box 400x400'} dis={false} icon={'arrow_forward'} testid={'primaryButtonBox'} testidIcon={'arrow_forward'} func={func}/>
          </S.Box>
        </div>
      </div>
    );
  }
}

export default App;