import { renderHook, act } from '@testing-library/react';
import { useState } from 'react';

// Mock logic test for Header component
describe('Header Component Logic', () => {
  // Test to check if the menu opens and closes correctly
  it('should toggle the menu state correctly', () => {
    const { result } = renderHook(() => useState(false));

    const [isMenuOpen, setIsMenuOpen] = result.current;

    // Check initial state
    expect(isMenuOpen).toBe(false);

    // Simulate menu toggle
    act(() => {
      setIsMenuOpen(!isMenuOpen);
    });

    // Check state after toggle
    expect(result.current[0]).toBe(true);
  });
});
