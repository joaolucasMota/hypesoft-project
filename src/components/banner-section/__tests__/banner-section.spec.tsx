import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { BannerSection } from "@/components/banner-section/index";

describe('BannerSection', () => {
    beforeEach(() => {
      render(<BannerSection />);
    });
  
    it('renders the BannerSection component', () => {
      expect(screen.getByTestId("banner-section")).toBeInTheDocument();
    });
  
    it('renders the correct text content', () => {
      expect(screen.getByText(/Got a project in mind\? Let's make something awesome/)).toBeInTheDocument();
      expect(screen.getByText(/together/)).toBeInTheDocument();
    });
  
    it('renders the Button component with the correct text', () => {
      expect(screen.getByText("Hire Me")).toBeInTheDocument();
    });
  });