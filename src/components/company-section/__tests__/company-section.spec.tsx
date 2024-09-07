import { render, screen } from '@testing-library/react';
import { CompanySection } from '@/components/company-section';
import '@testing-library/jest-dom';

describe('CompanySection Component', () => {
    beforeEach(() => {
        render(<CompanySection />);
    });

    it('renders the company section', () => {
        expect(screen.getByTestId('company-section')).toBeInTheDocument();
    });

    it('renders all company logos', () => {
        // Verificar se todos os logotipos estão presentes
        expect(screen.getByAltText('Youtube logo')).toBeInTheDocument();
        expect(screen.getByAltText('Google logo')).toBeInTheDocument();
        expect(screen.getByAltText('Adobe logo')).toBeInTheDocument();
        expect(screen.getByAltText('Sketch logo')).toBeInTheDocument();
    });

    it('renders the arrow icon link', () => {
        // Verificar se o link com o ícone da seta está presente
        expect(screen.getByAltText('arrow right icon')).toBeInTheDocument();
    });

    it('renders the company count correctly', () => {
    
        // Verificar se o texto com o número de empresas está presente
        expect(screen.getByText('I worked with Companies all over the World.')).toBeInTheDocument();
    });
});