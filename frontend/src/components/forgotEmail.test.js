import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Login from '../pages/log-in'; // Import Login using the relative path
import PasswordRecovery from '../pages/account-recovery-password';
import AccountIDRecovery from '../pages/account-recovery-accountid';
import YourAccountID from '../pages/account-recovery-your-account-id';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  it('navigates to account recovery page when "Forgot email or password?" link is clicked', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Login />
        <PasswordRecovery/>
      </MemoryRouter>
    );

    // Find the anchor element by its text content
    const forgotPasswordLink = getByText('Forgot email or password?');

    // Simulate a click on the anchor element
    fireEvent.click(forgotPasswordLink);

    // Check if the router navigates to the expected URL
    await screen.findByText('Trouble signing in?');
  });

  it('navigates to Email Recovery page when "I dont know my email" link is clicked', async () => {
    const { getByText } = render(
      <MemoryRouter>
        
        <PasswordRecovery/>
        <AccountIDRecovery/>
      </MemoryRouter>
    );

    // Find the anchor element by its text content
    const forgotEmailLink = getByText("I don't know my email");


    // Simulate a click on the anchor element
    fireEvent.click(forgotEmailLink);

    // Check if the router navigates to the expected URL
    await screen.findByText('Fill the information below to find your Account ID');

  });

  it('Displays correct email after verifying first name, last name, and phone number', async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);
    const { getByText, getByPlaceholderText, findByText } = render(
      <MemoryRouter>
        <AccountIDRecovery />
        
      </MemoryRouter>
    );
  
    // Find input elements by their placeholders
    const firstNameInput = getByPlaceholderText('first name');
    const lastNameInput = getByPlaceholderText('last name');
    const phoneNumberInput = getByPlaceholderText('phone number');
  
    // Find the "Next" button by its text content
    const nextButton = getByText('Next');
  
    // Simulate user input
    fireEvent.change(firstNameInput, { target: { value: 'Jason' } });
    fireEvent.change(lastNameInput, { target: { value: 'Kaufman' } });
    fireEvent.change(phoneNumberInput, { target: { value: '5107500656' } });
  
    // Simulate a click on the "Next" button
    fireEvent.click(nextButton);



    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(
        '../account-recovery/your-account-id',
        { state: { userEmail: 'jKaufman@gmail.com' } }
      );
    });
  });

});