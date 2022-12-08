import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// render 함수
/* 
  DOM에 컴포넌트를 랜더링하는 함수
  -> 인자로, 랜더링 할 리액트 컴포넌트 들어감 
*/
test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
});

test('when + btn is clicked, counter increase 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('1');
});
test('when - btn is clicked, counter decrease 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(-1);
});

test('on/off btn has blue background', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');

  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});

test('when on/off btn clicked, plus-btn and minus-btn has prevent their press or not', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');
  fireEvent.click(buttonElement);
  const plusButtonElement = screen.getByTestId('plus-button');
  const minusButtonElement = screen.getByTestId('minus-button');

  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
});
