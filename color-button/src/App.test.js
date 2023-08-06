import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCameWithSpaces } from './App';
test('button has correct initial color, and updates when clicked', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', {name:'Change to Midnight Blue'});
  
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});

  //click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: "MidnightBlue"})

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red')
});

test('Checkbox disables button on first click and enables on second click',() => {
  render(<App/>);
  // check that the button stats out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({backgroundColor: "gray"})

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({backgroundColor: "Midnight Blue"})
});

describe('spaces before camel-case capital letters', ()=>{
  test('Works for no inner capital letters',()=>{
    expect(replaceCameWithSpaces('Red')).toBe('Red');
  });
  test('Works for on inner capital letter', ()=>{
    expect(replaceCameWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })
  test('Works for multiple inner capital letters', () =>{
    expect(replaceCameWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})