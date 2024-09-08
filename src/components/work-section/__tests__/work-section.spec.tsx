import { render, screen } from "@testing-library/react";
import { WorkSection } from "@/components/work-section";

describe("WorkSection", () => {
  test("renders work section with correct content", () => {
    render(<WorkSection />);

    // Verifica se o título 'My Selected Work' está presente
    expect(screen.getByText("My Selected Work")).toBeInTheDocument();

    // Verifica se cada um dos trabalhos está presente
    expect(screen.getByText("Eduguard - E-learning Website")).toBeInTheDocument();
    expect(screen.getByText("Eduguard E-learning Website")).toBeInTheDocument();
    expect(screen.getByText("Huma Marketing Agency")).toBeInTheDocument();
    expect(screen.getByText("Beeryblog Blog Website")).toBeInTheDocument();
    expect(screen.getByText("Educare Elearning website")).toBeInTheDocument();
    expect(screen.getByText("Blogy Blog Website")).toBeInTheDocument();

    // Verifica se cada imagem de trabalho está presente
    const workImages = screen.getAllByAltText(/Project one/i);
    expect(workImages.length).toBe(6); // Garante que todas as imagens foram renderizadas

    // Verifica se o ícone de seta está presente em cada projeto
    const arrowIcons = screen.getAllByAltText("Arrow Icon");
    expect(arrowIcons.length).toBe(6); // Cada projeto deve ter um ícone de seta
  });
});
