import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('test', () => {
    test('example test', () => {
        render(<App/>)
        screen.debug();
    })
})