
import ThemeMode from './ThemeMode';
import { render, screen } from '../../utils/test-utils';


describe('Thememode', () => {
    it('should render correctly', () => {
        render(<ThemeMode/>)

        const h1Element = screen.getByRole('heading', {level: 1})
        expect(h1Element).toBeInTheDocument();

        const button = screen.getByRole('button', {name: 'change mode'});
        expect(button).toBeInTheDocument()

    })
})
