import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('App page basic setup', () => {

    it('should render the page with a h1', async () => {
      await waitFor(() => { render(<App />); });
      const checkHeading = screen.getByText("Sunnyglade Ratters");
      expect(checkHeading).toBeInTheDocument();
      expect(checkHeading.outerHTML).toEqual("<h1>Sunnyglade Ratters</h1>");
    });

    it('should render the page with a blurb without &apos; code', async () => {
      await waitFor(() => { render(<App />); });
      const blurbSentenceOne = "The 1st Sunnyglade Free Company - known more popularly as the Sunnyglade Ratters - was alledgedly formed from the heroic survivors of Sunnyglade's destruction at the hands of the orcish Horde and since has dedicated itself to building a reputation of keen professionalism and never going back on a contract."
      const blurbSentenceTwo = "The truth, of course, is far murkier - the work they have taken on and completed without fail has lead to them being compared to Duskwood's rat snakes - poisonous creatures you employ to deal with a problem that may come to trouble you in turn."
      expect(screen.getByText(blurbSentenceOne)).toBeInTheDocument();
      expect(screen.getByText(blurbSentenceTwo)).toBeInTheDocument();
    });

    it('should render the h2 for the members section', async () => {
      await waitFor(() => { render(<App />); });
      const checkHeading = screen.getByText("Members");
      expect(checkHeading).toBeInTheDocument();
      expect(checkHeading.outerHTML).toEqual("<h2>Members</h2>");
    });

    it('should render the footer with its text', async () => {
      await waitFor(() => { render(<App />); });
      expect(screen.getByText("Characters and likeness belong to their players")).toBeInTheDocument();
    });
});