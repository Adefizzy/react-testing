import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"


describe('testing greet component', () => {
    test('should display hello', () => {
        render(<Greet/>)
       const hello =  screen.getByText('hello');
        expect(hello).toBeInTheDocument();
    });

    test('should display hello and the name', () => {
        render(<Greet name='julio'/>)
        const helloName = screen.getByText('hello julio')

        expect(helloName).toBeInTheDocument()
    })
})