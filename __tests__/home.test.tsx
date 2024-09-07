import {render, screen} from "@testing-library/react";
import App from "@/app/page";



  it("renders all components", () => {
    render(<App />);
  
    expect(screen.getAllByTestId('Header'))
  });