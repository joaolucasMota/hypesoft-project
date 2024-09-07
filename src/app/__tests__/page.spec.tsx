import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "@/app/page";

  
  it("renders all components", () => {
    render(<App />);
  
    // Verificar se todos os componentes estão presentes
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
    expect(screen.getByTestId("work-section")).toBeInTheDocument();
    expect(screen.getByTestId("services-section")).toBeInTheDocument();
    expect(screen.getByTestId("company-section")).toBeInTheDocument();
    expect(screen.getByTestId("banner-section")).toBeInTheDocument();
    expect(screen.getByTestId("testimonials-section")).toBeInTheDocument();
    expect(screen.getByTestId("contact-section")).toBeInTheDocument()
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  