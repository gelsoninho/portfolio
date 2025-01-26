import { render, screen } from '@testing-library/react';
import { Expertise } from '../components/Expertise';
import '@testing-library/jest-dom';

describe('Expertise Component', () => {
  it('renders all expertise cards', () => {
    render(<Expertise />);
    expect(screen.getByText('Développement Web')).toBeInTheDocument();
    expect(screen.getByText('Blockchain')).toBeInTheDocument();
    expect(screen.getByText('Automatisation')).toBeInTheDocument();
  });

  it('renders skills for web development', () => {
    render(<Expertise />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('renders case studies', () => {
    render(<Expertise />);
    expect(screen.getByText(/plateforme e-commerce/i)).toBeInTheDocument();
  });
});