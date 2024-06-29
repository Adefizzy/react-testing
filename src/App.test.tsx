import { render, screen } from '@testing-library/react';
import App from './App';


describe('test', () => {
    test('example test', () => {
        render(<App/>)
        screen.debug();
        
    })
})