import { render, screen } from "@testing-library/react";
import { Footer } from "../";

describe('Footer Component', () => {
  it('renders the footer with the logo and text', () => {
    render(<Footer />);
    
    // Verifica se o footer está no documento
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    
    // Verifica se o logo da Hypesoft está presente
    expect(screen.getByAltText('Hypesoft Logo')).toBeInTheDocument();
    
    expect(screen.getByText(/Made for/i)).toBeInTheDocument();

    // Verifica se o texto "Hypesoft" está dentro de um span
    const spanElement = screen.getByText(/Hypesoft/i);
    expect(spanElement).toBeInTheDocument();
    expect(spanElement.tagName).toBe('SPAN');

    // Verifica se o texto "code challenge" está presente
    expect(screen.getByText(/code challenge/i)).toBeInTheDocument();
  });
});
