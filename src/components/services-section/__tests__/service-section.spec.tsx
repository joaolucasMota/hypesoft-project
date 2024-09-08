import { render, screen } from "@testing-library/react";
import { ServicesSection } from "../";

describe("ServicesSection", () => {
  test("renders services section with correct content", () => {
    render(<ServicesSection />);

    // Verifica se o título 'My Service' está presente
    expect(screen.getByText("My Service")).toBeInTheDocument();

    // Verifica se os itens de serviço estão no documento
    expect(screen.getByText("UI/UX Design")).toBeInTheDocument();
    expect(screen.getByText("Product Design")).toBeInTheDocument();
    expect(screen.getByText("Branding Design")).toBeInTheDocument();
    expect(screen.getByText("Front End Development")).toBeInTheDocument();

    // Verifica se o botão "Discuss now" aparece em cada serviço
    const discussButtons = screen.getAllByText("Discuss now");
    expect(discussButtons).toHaveLength(4);

    // Verifica se os ícones foram renderizados corretamente (usando alt text)
    expect(screen.getByAltText("UI icon")).toBeInTheDocument();
    expect(screen.getByAltText("Product icon")).toBeInTheDocument();
    expect(screen.getByAltText("Branding icon")).toBeInTheDocument();
    expect(screen.getByAltText("Frontend icon")).toBeInTheDocument();
  });
});
