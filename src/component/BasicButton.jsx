import React from 'react';
import * as S from './Styles/BasicButton'

function BasicButton(props) {
  const { text, dis, variant, icon, testid, testidIcon, func } = props

  return (
      <S.Button data-testid={testid} disabled={dis} Secundary={variant} onClick={func}>
        <p>{text}</p>
        <S.IconBox>
        </S.IconBox>
          {icon? <span  data-testid={testidIcon}className="material-icons">{icon}</span>: null}
      </S.Button>

  );
}

export default BasicButton;