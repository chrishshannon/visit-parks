import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header h1', () => {
  render(<App />);
  //expect(screen.queryBy('heading')).toHaveTextContent('Visit National Parks');
  //console.log("h1 heading element", screen.getByRole('heading'));
});
