import { render, screen } from '@testing-library/react';
import { Hero } from '../components/Hero';
import '@testing-library/jest-dom';

// Mock Three.js canvas since we can't render it in tests
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('Hero Component', () => {
  it('renders the main heading with correct text', () => {
    render(<Hero />);
    expect(screen.getByText(/Gelson/i)).toBeInTheDocument();
    expect(screen.getByText(/Développeur Web Python Autodidacte/i)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Hero />);
    expect(screen.getByText(/Découvrez mes innovations/i)).toBeInTheDocument();
  });
});