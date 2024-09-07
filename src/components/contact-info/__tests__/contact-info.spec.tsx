import { render, screen } from '@testing-library/react';
import { ContactInfo } from '@/components/contact-info';
import '@testing-library/jest-dom';
import { SocialButton } from '@/components/buttons'; // Verifique se o caminho está correto

// Mock para a importação do componente SocialButton


describe('ContactInfo Component', () => {
  beforeEach(() => {
    render(<ContactInfo />);
  });

  it('renders the heading', () => {
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders the address section', () => {
    expect(screen.getByAltText('Street icon')).toBeInTheDocument();
    expect(screen.getByText(/House #5, Street Number #98,/)).toBeInTheDocument();
  });

  it('renders the email section', () => {
    expect(screen.getByAltText('Email icon')).toBeInTheDocument();
    const emailElements = screen.getAllByText('albert.design@gmail.com');
    expect(emailElements.length).toBeGreaterThan(0); // Verifica se há pelo menos um elemento com o texto
  });
  
  it('renders the phone section', () => {
    expect(screen.getByAltText('Phone icon')).toBeInTheDocument();
    const phoneElements = screen.getAllByText('+55 955 258 2699');
    expect(phoneElements.length).toBeGreaterThan(0); // Verifica se há pelo menos um elemento com o texto
  });

  it('renders social buttons', () => {
    const icons = ['Dribbble', 'Behance', 'Facebook', 'Twitter', 'Instagram'];
    icons.forEach((icon) => {
      expect(screen.getByAltText(`${icon} link`)).toBeInTheDocument();
    });
  });
});
