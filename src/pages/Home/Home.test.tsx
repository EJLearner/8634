import {describe, it, expect, beforeEach, afterEach, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {Home} from './Home';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Home', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render the home page', () => {
    render(<Home />, {wrapper: BrowserRouter});
    const homeElement = screen.getByText('Invest in future changemakers.', {
      exact: false,
    });
    expect(homeElement).toBeInTheDocument();
  });

  it('has "MD Area" in the document if date is before 2025-12-06', () => {
    // mock date of 2025-12-05 using vi.setSystemTime
    vi.setSystemTime(new Date('2025-12-05'));

    render(<Home />, {wrapper: BrowserRouter});
    const mdAreaElement = screen.getByText('MD Area', {exact: false});
    expect(mdAreaElement).toBeInTheDocument();
  });

  it('does not have "MD Area" in the document if date is after 2025-12-06', () => {
    // mock date of 2025-12-07 using vi.setSystemTime
    vi.setSystemTime(new Date('2025-12-08'));

    render(<Home />, {wrapper: BrowserRouter});
    const mdAreaElement = screen.queryByText('MD Area', {exact: false});
    expect(mdAreaElement).not.toBeInTheDocument();
  });
});
