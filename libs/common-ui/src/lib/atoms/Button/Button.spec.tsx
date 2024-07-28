import {Button} from './Button';
import {render, screen} from "@testing-library/react";
import {axe} from "jest-axe"
describe('Button component', () =>{
    it('should have accessibility', async () => {
        const {debug, container} = render(<Button label={'Click me'} />)
        const result = await axe(container)
        // expect(screen.getByText('Click me', {exact: false})).toBeInTheDocument();
        expect(result).toHaveNoViolations();
    });

})
