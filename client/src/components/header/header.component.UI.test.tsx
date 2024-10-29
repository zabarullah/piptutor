import { render, screen, fireEvent } from '@testing-library/react';
import Header from './header.component'; // Your Header component

// Mock UI test for Header component
describe('Header Component UI', () => {
  // Test to check if the header renders correctly with the main navigation
  it('should render the header with title and main nav links', () => {
    render(<Header />);

    // Check if the title renders
    const titleElement = screen.getByText(/PipTutor/i);
    expect(titleElement).toBeInTheDocument();

    // Check if navigation links render
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  // Test to check if the hamburger menu toggles correctly
  it('should toggle the hamburger menu when clicked', () => {
    render(<Header />);

    // Hamburger should be visible on smaller screens
    const hamburger = screen.getByTestId('hamburger-menu')
    expect(hamburger).toBeInTheDocument();

    // Click the hamburger to open the menu
    fireEvent.click(hamburger);

    // Check if the responsive nav appears
    expect(screen.getByTestId("hamburger-menu-nav")).toBeInTheDocument();
  });
});
