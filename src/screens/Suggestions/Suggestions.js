import './Suggestions.css';
import Radio from '../../components/Radio/Radio';

function Suggestions() {
  return (
    <main className="site-content">
      <h1 className="visually-hidden">Suggestions</h1>

      <section className="suggestions">
        <div className="suggestions__sidebar">
          <div className="suggestions__hero">
            <h2 className="suggestions__hero-title heading heading--secondary">firsTeam</h2>
            <p className="suggestions__hero-subtitle">Feedback Board</p>
          </div>

          <div className="suggestions__sidebar-inner">
            <form className="suggestions__filter" action="https://echo.htmlacademy.ru" method="GET">
              <Radio label="All" value="all" name="feedback_category" defaultChecked />
              <Radio label="UI" value="ui" name="feedback_category" />
              <Radio label="UX" value="ux" name="feedback_category" />
              <Radio label="Enhancement" value="enhancement" name="feedback_category" />
              <Radio label="Bug" value="bug" name="feedback_category" />
              <Radio label="Feature" value="feature" name="feedback_category" />
            </form>

            <div className="suggestions__roadmap">
              <header className="suggestions__roadmap-top">
                <h3 className="suggestions__roadmap-title heading heading--tertiary">Roadmap</h3>
                <a className="suggestions__roadmap-link" href="/roadmap">View</a>
              </header>
              <ol className="suggestions__roadmap-list">
                <li className="suggestions__roadmap-item"></li>
                <li className="suggestions__roadmap-item"></li>
                <li className="suggestions__roadmap-item"></li>
              </ol>
            </div>
          </div>
        </div>

        <div className="suggestions__content"></div>
      </section>
    </main>
  )
}

export default Suggestions;