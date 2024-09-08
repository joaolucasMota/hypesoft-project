import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/hero-section";

describe('HeroSection', () => {
  test('renders HeroSection with Header and Hero components', () => {
    render(<HeroSection />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });
});
