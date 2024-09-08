import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { ContactForm } from "../";
import emailjs from "@emailjs/browser";

// Mock do emailjs para não enviar e-mails durante o teste
jest.mock("@emailjs/browser", () => ({
    send: jest.fn(),
}));

// Mock do matchMedia para evitar erros relacionados a mídia queries
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), 
      removeListener: jest.fn(), 
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

describe("ContactForm", () => {
   
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("renders the contact form", () => {
        render(<ContactForm />);

        // Verifica se o formulário foi renderizado corretamente
        expect(screen.getByTestId("contact-form")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Full name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    });


    test('displays validation errors when submitting an empty form', async () => {
        render(<ContactForm />);

        await act(async () => {
            const submitButton = screen.getByTestId('submit-button');
            userEvent.click(submitButton);
        });

        // Verifica se as mensagens de erro são exibidas para os campos obrigatórios
        expect(await screen.findByTestId('fullName-error')).toHaveTextContent(/required field/i);
        expect(await screen.findByTestId('email-error')).toHaveTextContent(/e-mail is required/i);
        expect(await screen.findByTestId('subject-error')).toHaveTextContent(/required field/i);
        expect(await screen.findByTestId('message-error')).toHaveTextContent(/message is required/i);
    });


    test("submits the form successfully", async () => {
        (emailjs.send as jest.Mock).mockResolvedValueOnce({ status: 200 });
        
        render(<ContactForm />);
        
        // Preenche os campos do formulário
        fireEvent.change(screen.getByPlaceholderText("Full name"), { target: { value: "John Doe" } });
        fireEvent.change(screen.getByPlaceholderText("Email address"), { target: { value: "john@example.com" } });
        fireEvent.change(screen.getByPlaceholderText("Subject"), { target: { value: "Subject Test" } });
        fireEvent.change(screen.getByPlaceholderText("Message"), { target: { value: "This is a message." } });

        // Simula o clique no botão de enviar
        fireEvent.click(screen.getByText(/SEND MESSAGE/i));

        // Verifica se o e-mail foi enviado com sucesso
        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledTimes(1);
        });
    });


    test("displays error message on email send failure", async () => {
        (emailjs.send as jest.Mock).mockRejectedValueOnce(new Error("Error sending email"));

        render(<ContactForm />);

        // Preenche os campos do formulário
        fireEvent.change(screen.getByPlaceholderText("Full name"), { target: { value: "John Doe" } });
        fireEvent.change(screen.getByPlaceholderText("Email address"), { target: { value: "john@example.com" } });
        fireEvent.change(screen.getByPlaceholderText("Subject"), { target: { value: "Subject Test" } });
        fireEvent.change(screen.getByPlaceholderText("Message"), { target: { value: "This is a message." } });

        // Simula o clique no botão de enviar
        fireEvent.click(screen.getByText(/SEND MESSAGE/i));

        // Verifica se emailJs foi executado e ocorreu o erro
        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledTimes(1);
          });
    });
});
