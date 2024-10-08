import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DummyComponent from './dummy.component';

describe('TestComponent', () => {
  test('renders correctly and increments count', () => {
    
    render(<DummyComponent />);

    const button = screen.getByText(/increment/i);
    const countText = screen.getByText(/count:/i);

    expect(countText).toHaveTextContent('Count: 0');

    fireEvent.click(button);
    expect(countText).toHaveTextContent('Count: 1');

    fireEvent.click(button);
    expect(countText).toHaveTextContent('Count: 2');
  });
});
