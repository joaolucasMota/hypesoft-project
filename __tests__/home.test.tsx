import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "@/app/page";




  

  
 
  
  it("renders all components", () => {
    render(<App />);
  
    // Verificar se todos os componentes estão presentes
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
  });