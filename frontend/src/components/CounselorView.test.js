import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import CounselorView from './counselorView';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('CounselorView', () => {
  test('navigates to StudentOverview with correct data on search: StudentID: s34', async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <CounselorView />
      </MemoryRouter>
    );

    // Enter a student ID with value of 34 to check if correct data is sent
    const studentIdInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(studentIdInput, { target: { value: 's34' } });

    // Click the search button
    const searchButton = screen.getByText('Search');


    // Use async/await and waitFor to handle asynchronous code
    fireEvent.click(searchButton);
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/studentOverview', expect.objectContaining({
        state: expect.objectContaining({
          myData: expect.objectContaining({
            _id: expect.any(String),
            fname: 'Max',
            lname: 'Bosco',
            parent_id: 'p34',
            studentID: 's34',
          }),
          userRole: 'counselor',
        }),
      }));
      console.log(screen.debug());
    });
  });


  test('navigates to StudentOverview with correct data on search: StudentID: s47', async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <CounselorView />
      </MemoryRouter>
    );

    // Enter a student ID with value of 47 to check if correct data is sent
    const studentIdInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(studentIdInput, { target: { value: 's47' } });

    const searchButton = screen.getByText('Search');

    fireEvent.click(searchButton);
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/studentOverview', expect.objectContaining({
        state: expect.objectContaining({
          myData: expect.objectContaining({
            _id: expect.any(String),
            fname: 'Kathie',
            lname: 'Powlowski',
            parent_id: 'p47',
            studentID: 's47',
          }),
          userRole: 'counselor',
        }),
      }));
    });
  });

  test('navigates to StudentOverview with correct data on search: StudentID: s47', async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <CounselorView />
      </MemoryRouter>
    );

    // Enter a student ID with value of s73 to check if correct data is sent
    const studentIdInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(studentIdInput, { target: { value: 's73' } });

    const searchButton = screen.getByText('Search');

    fireEvent.click(searchButton);
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/studentOverview', expect.objectContaining({
        state: expect.objectContaining({
          myData: expect.objectContaining({
            _id: expect.any(String),
            fname: 'Lourie',
            lname: 'Ebert',
            parent_id: 'p73',
            studentID: 's73',
          }),
          userRole: 'counselor',
        }),
      }));
    });
  });

});
