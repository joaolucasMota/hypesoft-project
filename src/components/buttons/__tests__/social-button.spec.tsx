import { render, screen } from '@testing-library/react';
import { SocialButton } from '@/components/buttons';
import '@testing-library/jest-dom';

describe('SocialButton Component', () => {
    const icons = [
        { icon: 'Dribbble', alt: 'Dribbble link' },
        { icon: 'Behance', alt: 'Behance link' },
        { icon: 'Facebook', alt: 'Facebook link' },
        { icon: 'Twitter', alt: 'Twitter link' },
        { icon: 'Youtube', alt: 'Youtube link' },
        { icon: 'Instagram', alt: 'Instagram link' },
    ];

    icons.forEach(({ icon, alt }) => {
        it(`renders ${icon} icon`, () => {
            render(<SocialButton icon={icon} />);
            expect(screen.getByAltText(alt)).toBeInTheDocument();
        });
    });

    it('renders circular social button', () => {
        render(<SocialButton icon="Facebook" circular />);
        expect(screen.getByRole('link')).toHaveClass('btn-rounded');
    });

    it('renders secondary style button', () => {
        render(<SocialButton icon="Twitter" secundary />);
        expect(screen.getByRole('link')).toHaveClass('btn-secundary');
    });
});
