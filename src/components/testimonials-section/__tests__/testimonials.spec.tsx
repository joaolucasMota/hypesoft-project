import { render, screen } from "@testing-library/react";
import { TestimonialsSection } from "@/components/testimonials-section";

describe("TestimonialsSection", () => {
  test("renders testimonials section with correct content", () => {
    render(<TestimonialsSection />);

    // Verifica se a seção de testemunhos está presente no documento
    expect(screen.getByTestId("testimonials-section")).toBeInTheDocument();

    // Verifica se o título 'Testimonial' está presente
    expect(screen.getByText("Testimonial")).toBeInTheDocument();

    // Verifica se os nomes dos depoimentos estão presentes
    expect(screen.getByText("Sundar Pichai")).toBeInTheDocument();
    expect(screen.getByText("Shantanu Narayen")).toBeInTheDocument();
    expect(screen.getByText("Noah Levin")).toBeInTheDocument();
    expect(screen.getByText("Stewart Butterfield")).toBeInTheDocument();

    // Função para verificar se o texto completo está presente, mesmo que esteja quebrado em vários elementos
    const googleCEO = (content: string, element: HTMLElement) => {
      return content.includes("CEO") && element.textContent?.includes("Google");
    };

    // Função para verificar se o texto do CEO da Adobe está presente
    const adobeCEO = (content: string, element: HTMLElement) => {
      return content.includes("CEO") && element.textContent?.includes("Adobe");
    };

    // Função para verificar se o texto do Director da Figma está presente
    const figmaDirector = (content: string, element: HTMLElement) => {
      return content.includes("Director") && element.textContent?.includes("Figma");
    };

    // Função para verificar se o texto do CEO da Slack está presente
    const slackCEO = (content: string, element: HTMLElement) => {
      return content.includes("CEO") && element.textContent?.includes("Slack");
    };

    // Verifica se o texto da citação está presente
    expect(
      screen.getByText(
        /If you're looking for someone who will challenge your UX\/UI thinking/i
      )
    ).toBeInTheDocument();

    // Verifica se o ícone de estrela está presente
    expect(screen.getByAltText("Star Icon")).toBeInTheDocument();

    // Verifica se a imagem da citação está presente
    expect(screen.getByAltText("Quote Background")).toBeInTheDocument();
  });
});
