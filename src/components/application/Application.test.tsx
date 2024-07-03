import { render, screen } from "@testing-library/react";
import { Application } from "./Application";


describe('Application', () => {
    it('should render correctly', () => {
        render(<Application/>)
        const nameElement1 = screen.getByRole('textbox', {name: /name/i})
        expect(nameElement1).toBeInTheDocument()

        const nameElement2 = screen.getByPlaceholderText('Fullname');
        expect(nameElement2).toBeInTheDocument()

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

        const paragrapthText1 = screen.getByText('mandatory', {exact: false});
        expect(paragrapthText1).toBeInTheDocument()

        const paragrapthText2 = screen.getByText(/mandatory/i);
        expect(paragrapthText2).toBeInTheDocument()

        const paragrapthText3 = screen.getByText((content) => content.toLowerCase().endsWith('mandatory'));
        expect(paragrapthText3).toBeInTheDocument()
    })
})