import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


// You might want to mock DummyComponent if it has its own complex logic
jest.mock('./components/dummy_component/dummy.component', () => {
  return function DummyComponentMock() {
    return <div>Dummy Component</div>; // Mock implementation
  };
});

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders DummyComponent', () => {
    render(<App />);
    const dummyComponentElement = screen.getByText(/dummy component/i);
    expect(dummyComponentElement).toBeInTheDocument(); // Check if DummyComponent is rendered
  });
});
