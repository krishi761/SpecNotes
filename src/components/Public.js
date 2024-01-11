import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Spec Notes</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Unleash the power of structured thinking and creativity as you embark
          on your note-taking journey with us.
        </p>
        <br />
        <ul className="public__ul">
          <li>
            No rocket science here. SpecNotes is all about straightforward
            note-taking that just makes sense.
          </li>
          <li>
            Whether you're on a computer, tablet, or smartphone, your notes
            follow you like a trusty sidekick.
          </li>
          <li>
            Collaborate seamlessly and share your notes without breaking a
            sweat.
          </li>
        </ul>
        <br />
        <p>Owner: Krishi Rijhwani</p>
      </main>
      <footer>
        <Link to="/login">User Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
