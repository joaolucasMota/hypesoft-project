import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { AboutSection } from "@/components/about-section/index";


describe('AboutSection', () => {
    beforeEach(() => {
      render(<AboutSection />);
    });
  
    it('renders the AboutSection component', () => {
      expect(screen.getByTestId("about-section")).toBeInTheDocument();
    });
  
    it('renders the image with correct alt text', () => {
      const image = screen.getByAltText("About image");
      expect(image).toBeInTheDocument();
    });
  
    it('renders the correct text content', () => {
      expect(screen.getByText(/Software Engineer and Infrastructure specialist based in Brazil./)).toBeInTheDocument();
      expect(screen.getByText(/Morbi quam velit, euismod in imperdiet vitae, elementum et elit./)).toBeInTheDocument();
    });
  
    it('renders the correct information in the about info section', () => {
      expect(screen.getByText("17+")).toBeInTheDocument();
      expect(screen.getByText("Years of Experience")).toBeInTheDocument();
      expect(screen.getByText("325+")).toBeInTheDocument();
      expect(screen.getByText("Completed Projects")).toBeInTheDocument();
    });
  
    it('renders the Button component', () => {
      expect(screen.getByText("Say Hi")).toBeInTheDocument();
    });
  });