import { render, screen, act } from '@testing-library/react';
import Terminal from '../components/Terminal';
import '@testing-library/jest-dom';

describe('Terminal Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the terminal window with title', () => {
    render(<Terminal />);
    expect(screen.getByText('solana.txt')).toBeInTheDocument();
  });

  it('renders terminal controls', () => {
    render(<Terminal />);
    const redButton = screen.getByTestId('terminal-red');
    const yellowButton = screen.getByTestId('terminal-yellow');
    const greenButton = screen.getByTestId('terminal-green');
    
    expect(redButton).toBeInTheDocument();
    expect(yellowButton).toBeInTheDocument();
    expect(greenButton).toBeInTheDocument();
  });

  it('animates text display over time', async () => {
    render(<Terminal />);
    const initialText = screen.getByText('').textContent;
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    
    const laterText = screen.getByText('').textContent;
    expect(laterText.length).toBeGreaterThan(initialText.length);
  });
});