import { render, screen } from '@testing-library/react';
import { Button } from '@/components/buttons';
import '@testing-library/jest-dom';

describe('Button Component', () => {
    it('renders button with text and arrow', () => {
        render(<Button text="Click Me" arrow />);

        // Verificar se o texto está presente
        expect(screen.getByText('Click Me')).toBeInTheDocument();

        // Verificar se o ícone de seta está presente
        expect(screen.getByAltText('Arrow right icon')).toBeInTheDocument();
    });

    it('renders button with text only', () => {
        render(<Button text="Click Me" />);

        // Verificar se o texto está presente
        expect(screen.getByText('Click Me')).toBeInTheDocument();

        // Verificar se o ícone de seta não está presente
        expect(screen.queryByAltText('Arrow right icon')).not.toBeInTheDocument();
    });
});
