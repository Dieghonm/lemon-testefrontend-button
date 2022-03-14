import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('teste da aplicação toda', () => {

  it('Testa o botão simples', () => {
    render(<App />);
    const testNormalButton = screen.getByTestId('primaryButton');
    // expect(testNormalButton).toHaveStyle('color: #FFFFFF')
    expect(testNormalButton).toBeInTheDOM()
    expect(testNormalButton).toHaveTextContent('Primary Button')
    expect(testNormalButton).toBeEnabled()
  });

  it('testa se o botão Normal Button possui um icone', () => {
    render(<App />);
    const testNormalButton = screen.getByTestId('primaryButtonIcon');
    const testNormalButtonIcon = screen.getByTestId('check');

    expect(testNormalButton).toHaveTextContent('Primary Button')
    expect(testNormalButton).toBeEnabled()
    expect(testNormalButton).toBeInTheDOM()
    expect(testNormalButtonIcon).toBeInTheDOM()
  })

  it('testa se o botão Disabled primary Button esta desabilitado', () => {
    render(<App />);
    const buttonDisabled = screen.getByTestId('primaryButtonDisabled');

    expect(buttonDisabled).toHaveTextContent('Disabled Primary Button')
    expect(buttonDisabled).toBeDisabled()
  })
});
