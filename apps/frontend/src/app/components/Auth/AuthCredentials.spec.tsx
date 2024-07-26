import { render, screen, fireEvent } from "@testing-library/react";
import { AuthContextProvider } from "./AuthContext";
import AuthCredentials from "./AuthCredentials";
describe('AuthCredentials components', () => {
    it('should toggle value', () => {
        render(
            <AuthContextProvider>
                <AuthCredentials />
            </AuthContextProvider>
        );
        expect(screen.getByText(/NO/i)).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByText(/YES/i)).toBeInTheDocument();
    })
})
