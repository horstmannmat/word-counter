import { render, fireEvent, screen, within, getByText} from '@testing-library/react';
import App from './App';

test('tests 3 words of 3 chars each', () => {
  render(<App />);
  const inputField =  screen.getByTestId('count-input-field');
  fireEvent.change(inputField, {target: {value: 'cat dog pig'}});
  const countButton =  screen.getByTestId('count-button');
  fireEvent.click(countButton);
  const resultText =  screen.getByTestId('count-result-text');

  const wordValue = 3;
  const charValue = 9;

  const expectText = `You Have ${wordValue} words and ${charValue} characteres`;
  expect(resultText.textContent).toEqual(expectText);
});

test('tests when nothing has changed and Display error message', () => {
  const dom = render(<App />);
  const countButton =  screen.getByTestId('count-button');
  fireEvent.click(countButton);
  const resultText =  screen.getByTestId('count-result-text');

  const wordValue = 0;
  const charValue = 0;
  const errorMessage =  document.querySelector('.MuiFormHelperText-root');
  expect(errorMessage?.textContent).toEqual('Input is Required');

  const expectText = `You Have ${wordValue} words and ${charValue} characteres`;
  expect(resultText.textContent).toEqual(expectText);
});

test('tests when only number is inserted', () => {
  render(<App />);
  const inputField =  screen.getByTestId('count-input-field');
  fireEvent.change(inputField, {target: {value: '1234 1254 1564'}});
  const countButton =  screen.getByTestId('count-button');
  fireEvent.click(countButton);
  const resultText =  screen.getByTestId('count-result-text');

  const wordValue = 0;
  const charValue = 12;

  const expectText = `You Have ${wordValue} words and ${charValue} characteres`;
  expect(resultText.textContent).toEqual(expectText);
});

test('tests when only pontuation are inserted', () => {
  render(<App />);
  const inputField =  screen.getByTestId('count-input-field');
  fireEvent.change(inputField, {target: {value: '... !!! ;;; ???'}});
  const countButton =  screen.getByTestId('count-button');
  fireEvent.click(countButton);
  const resultText =  screen.getByTestId('count-result-text');

  const wordValue = 0;
  const charValue = 12;

  const expectText = `You Have ${wordValue} words and ${charValue} characteres`;
  expect(resultText.textContent).toEqual(expectText);
});

test('tests when some cyrilic words are inserted', () => {
  render(<App />);
  const inputField =  screen.getByTestId('count-input-field');
  fireEvent.change(inputField, {target: {value: 'Кошка Собака свинья'}});
  const countButton =  screen.getByTestId('count-button');
  fireEvent.click(countButton);
  const resultText =  screen.getByTestId('count-result-text');

  const wordValue = 3;
  const charValue = 17;

  const expectText = `You Have ${wordValue} words and ${charValue} characteres`;
  expect(resultText.textContent).toEqual(expectText);
});

test('tests when some arabic words are inserted', () => {
  render(<App />);
  const inputField =  screen.getByTestId('count-input-field');
  fireEvent.change(inputField, {target: {value: 'خنزير قطة كلب'}});
  const countButton =  screen.getByTestId('count-button');
  fireEvent.click(countButton);
  const resultText =  screen.getByTestId('count-result-text');

  const wordValue = 3;
  const charValue = 11;

  const expectText = `You Have ${wordValue} words and ${charValue} characteres`;
  expect(resultText.textContent).toEqual(expectText);
});

test('tests when some German words are inserted', () => {
  render(<App />);
  const inputField =  screen.getByTestId('count-input-field');
  fireEvent.change(inputField, {target: {value: 'heiße tür'}});
  const countButton =  screen.getByTestId('count-button');
  fireEvent.click(countButton);
  const resultText =  screen.getByTestId('count-result-text');

  const wordValue = 2;
  const charValue = 8;

  const expectText = `You Have ${wordValue} words and ${charValue} characteres`;
  expect(resultText.textContent).toEqual(expectText);
});

test('tests when some Japanese words are inserted', () => {
  render(<App />);
  const inputField =  screen.getByTestId('count-input-field');
  fireEvent.change(inputField, {target: {value: '猫 犬 豚'}});
  const countButton =  screen.getByTestId('count-button');
  fireEvent.click(countButton);
  const resultText =  screen.getByTestId('count-result-text');

  const wordValue = 3;
  const charValue = 3;

  const expectText = `You Have ${wordValue} words and ${charValue} characteres`;
  expect(resultText.textContent).toEqual(expectText);
});
