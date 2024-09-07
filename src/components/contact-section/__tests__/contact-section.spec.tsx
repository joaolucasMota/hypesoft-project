import { render, screen } from "@testing-library/react";
import { ContactSection } from "../";

describe('ContactSection Component', () => {
  it('renders the ContactForm and ContactInfo components', () => {
    render(<ContactSection />);
    
    // Verifica se o componente ContactForm está presente
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    
    // Verifica se o componente ContactInfo está presente
    expect(screen.getByTestId('contact-info')).toBeInTheDocument();
  });
});