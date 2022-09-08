import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('App page basic setup', () => {

    it('should render the page with a h1', async () => {
      await waitFor(() => { render(<App />); });

      const checkHeading = screen.getByText("Sunnyglade Ratters");
      expect(checkHeading).toBeInTheDocument();
      expect(checkHeading.outerHTML).toEqual("<h1>Sunnyglade Ratters</h1>");
    });
});