import { render, screen } from "@testing-library/react";
import { Application } from "./Application";


describe.only('Application', () => {
    it('should render correctly', () => {
        render(<Application/>)
        const textBox = screen.getByRole('textbox', {name: /name/i})
        expect(textBox).toBeInTheDocument()

        const textareaElemet  =  screen.getByRole('textbox', {name: /bio/i})
        expect(textareaElemet).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument()

        const submitButton = screen.getByRole('button', {name: /submit/i});
        expect(submitButton).toBeInTheDocument();

        const pageHeading = screen.getByRole('heading', {name: /job application form/i, level: 1})
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {name: /section 1/i, level: 2})
        expect(sectionHeading).toBeInTheDocument();

    })
})