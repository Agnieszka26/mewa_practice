import { act, renderHook } from '@testing-library/react';
import { useAuth } from './AuthContext';
describe('useAuth hook', () => {
  it('should toggle values', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.isLogged).toEqual(false);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isLogged).toEqual(true);
  });
});
