import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders button', () => {
    const text = 'Save';
    render(<Button>{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument;
  });

  it('button clicked ', async () => {
    const text = 'Save';
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<Button onClick={onClick}>{text}</Button>);
    await user.click(screen.getByRole('button', { name: text }));
    await user.click(screen.getByRole('button', { name: text }));
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('disabled when loading', () => {
    const text = 'Save';
    render(<Button isLoading={true}>{text}</Button>);
    const result = screen.getByRole('button').hasAttribute('disabled');
    expect(result).toEqual<boolean>(true);
  });
});
