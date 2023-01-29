import { checlistDataMock } from '@/test/checklist.mock';
import { testWrapper } from '@/test/test.util';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ChecklistPage from './ChecklistPage';

const dataMock = checlistDataMock;
const apiUrl = 'http://localhost:3000/api/checklist';
const server = setupServer(
  rest.get(apiUrl, (req, res, ctx) => {
    return res(ctx.json({ data: dataMock }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads data and displays header', async () => {
  render(<ChecklistPage />, { wrapper: testWrapper });

  await waitFor(() => screen.getByRole('main'));
  expect(screen.getByRole('heading')).toHaveTextContent('My Checklist');
  for (const item of dataMock) {
    expect(await screen.findByText(item.name)).toBeInTheDocument();
  }
});
