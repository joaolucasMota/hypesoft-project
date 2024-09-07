import { render, screen } from "@testing-library/react";
import { Header } from "../";

describe('Header Component', () => {
  it('renders the header with menu items', () => {
    render(<Header />);
    
    // Verifica se o header está no documento
    expect(screen.getByTestId('header')).toBeInTheDocument();
    
    // Verifica se os links do menu estão presentes
    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '#About-Section');

    const servicesLink = screen.getByText(/services/i);
    expect(servicesLink).toBeInTheDocument();
    expect(servicesLink).toHaveAttribute('href', '#Services-Section');

    const worksLink = screen.getByText(/works/i);
    expect(worksLink).toBeInTheDocument();
    expect(worksLink).toHaveAttribute('href', '#');

    const contactLink = screen.getByText(/contact/i);
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '#');
  });
});
