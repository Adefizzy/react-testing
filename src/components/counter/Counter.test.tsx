import { screen, render } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe('Counter', () => {
    it('should render correctly', () => {
        render(<Counter/>)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()
     

        const buttonElement = screen.getByRole('button', {  name: /increment/i})
        expect(buttonElement).toBeInTheDocument()
    })

    it('should render count of 0', () => {
        render(<Counter/>)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    it('should render a count of 1 after clicking', async () => {
        userEvent.setup()
        render(<Counter/>)
        const buttonElement = screen.getByRole('button', {  name: /increment/i})
        await userEvent.click(buttonElement);
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    it('should render a count of 2 after clicking button twice', async () => {
        userEvent.setup()
        render(<Counter/>)
        const buttonElement = screen.getByRole('button', {  name: /increment/i})
        await userEvent.dblClick(buttonElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')

    })

    it('should display a count of 10 from the input', async () => {
        userEvent.setup()
        render(<Counter/>)
        const numberInput = screen.getByRole('spinbutton');
        await userEvent.type(numberInput, '10');
        expect(numberInput).toHaveValue(10);

        const setButton = screen.getByRole('button', {name: /set/i})
        await userEvent.click(setButton);

        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10')
    })
})