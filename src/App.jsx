import './assets/css/main.scss';

const App = () => {
  return (
    <>
      <header>
        <span>A World of Warcraft Guild - Argent Dawn EU</span>
      </header>
      <section className="brand">
        <h1>Sunnyglade Ratters</h1>
        <img src="./assets/images/logo.png" />
        <p>The 1st Sunnyglade Free Company - known more popularly as the Sunnyglade Ratters - was alledgedly formed from the heroic survivors of Sunnyglade&apos;s destruction at the hands of the orcish Horde and since has dedicated itself to building a reputation of keen professionalism and never going back on a contract.</p>
        <p>The truth, of course, is far murkier - the work they have taken on and completed without fail has lead to them being compared to Duskwood&apos;s rat snakes - poisonous creatures you employ to deal with a problem that may come to trouble you in turn.</p>
      </section>
      <section className="members">
        <h2>Members</h2>
      </section>
      <footer>
        <p>Characters and likeness belong to their players</p>
      </footer>
    </>
  );
};

export default App;
