import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import TeacherView from './teacherView';
import Login from '../pages/log-in';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('CounselorView', () => {
  test('Logs in with teacher account & navigates to teacherView with correct arrays of students for each period', async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

            // Find the email and password input elements by their placeholders
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'jKaufman@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Find and click the button element by its text
    const button = screen.getByText('Sign In');
    fireEvent.click(button);


    await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith(
          '/teacherView', {"state": {"period0": "c02", "period1": "c18", "period2": "c21", "period3": "c31", "period4": "c41", "period5": "", "period6": "c61", "period7": "c71", "teacher_id": "t2"}}
        );
      });

  });



});
