import { render, screen } from '@testing-library/react';
import { Hero } from '../';
import '@testing-library/jest-dom';


test('renders hero section with correct content', () => {
    render(<Hero />);
  
    // Verificar o texto no <h1> 
    expect(screen.getByText(/Hello, I’m John, a/i)).toBeInTheDocument();
    
  
    // Verificar o texto no <p>
    expect(screen.getByText(/Product Designer, UI\/UX Designer, and developer based in Brazil/i)).toBeInTheDocument();
  });
  
  test('renders hero buttons with correct classes', () => {
    render(<Hero />);
  
    // Verificar a classe dos botões
    expect(screen.getByText(/Hire Me/i)).toHaveClass('btn btn-primary');
    expect(screen.getByText(/View work/i)).toHaveClass('btn btn-secundary');
  });