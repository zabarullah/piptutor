import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render HomePageRoute component', () => {
    // Render the App
    render(<App />);
    // Assert if specific content from HomePageRoute is loaded
    // For example, if HomePageRoute renders a heading like <h1>Home</h1>
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});

