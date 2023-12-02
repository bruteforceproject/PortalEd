import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import PasswordRecovery from '../pages/account-recovery-password';
import Verify from '../pages/account-recovery-verify';
import Login from '../pages/log-in';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
// Define a wrapper component for your test
const TestWrapper = ({ children }) => {
  const location = useLocation();
  location.state = { userPhone: '5107500656' }; // Set the desired value for userPhone
  return children;
};
it('navigates to account recovery page when "Forgot email or password?" link is clicked', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Login />
        <PasswordRecovery />
      </MemoryRouter>
    );

    // Find the anchor element by its text content
    const forgotPasswordLink = getByText('Forgot email or password?');

    // Simulate a click on the anchor element
    fireEvent.click(forgotPasswordLink);

    // Check if the router navigates to the expected URL
    await screen.findByText('Trouble signing in?');
  });
describe('', () => {
  it('navigates to Phone Number Verify page after verifying valid email to send SMS verification text', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <TestWrapper>
          <PasswordRecovery />
          <Verify />
        </TestWrapper>
      </MemoryRouter>
    );

    // ... Your existing test code here ...

    // Check if the router navigates to the expected URL
    await screen.findByText('Confirm your phone number');
  });


});



