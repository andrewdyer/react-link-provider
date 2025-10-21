import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('should render button component', () => {
    render(<Button />);

    const buttonElement = screen.getByText(/Button/i);

    expect(buttonElement).toBeInTheDocument();
  });

  test('should call onClick when button is clicked', () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick} />);

    const buttonElement = screen.getByText(/Button/i);
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });
});
