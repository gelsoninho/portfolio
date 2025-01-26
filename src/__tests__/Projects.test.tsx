import { render, screen } from '@testing-library/react';
import { Projects } from '../components/Projects';
import '@testing-library/jest-dom';

// Mock Framer Motion pour éviter les problèmes avec les animations
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Projects Component', () => {
  it('renders the projects section title', () => {
    render(<Projects />);
    expect(screen.getByText('Mes Innovations')).toBeInTheDocument();
    expect(screen.getByText('Découvrez mes derniers projets')).toBeInTheDocument();
  });

  it('renders all projects with their titles', () => {
    render(<Projects />);
    expect(screen.getByText('Bot de Trading Crypto')).toBeInTheDocument();
    expect(screen.getByText('Testnet Node Operator')).toBeInTheDocument();
  });

  it('displays project technologies', () => {
    render(<Projects />);
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Solana')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('shows github link for projects that have it', () => {
    render(<Projects />);
    const githubLinks = screen.getAllByText('Code');
    expect(githubLinks).toHaveLength(1); // Only the trading bot has a GitHub link
  });
});