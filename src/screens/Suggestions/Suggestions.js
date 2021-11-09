import './Suggestions.css';
import Radio from '../../components/Radio/Radio';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import Counter from '../../components/Counter/Counter';

function Suggestions() {
  return (
    <main className="site-content">
      <h1 className="visually-hidden">firstTeam feedback board</h1>

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
              <ul className="suggestions__roadmap-list">
                <li className="suggestions__roadmap-item">Planned <span>23</span></li>
                <li className="suggestions__roadmap-item">In-Progress <span>2</span></li>
                <li className="suggestions__roadmap-item">Live <span>12</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="suggestions__content">
          <header className="suggestions__content-top">
            <h2 className="suggestions__content-heading heading heading--tertiary">6 Suggestions</h2>
            <Dropdown className="suggestions__content-dropdown" options={['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments']} />
            <Button className="btn--blue-orchid">+ Add Feedback</Button>
          </header>

          <ol className="suggestions__list">
            <li className="suggestions__item feedback">
              <Counter className="feedback__upvotes" count="27" />
              <div className="feedback__inner">
                <h3 className="feedback__title heading heading--tertiary">Add tags for solutions</h3>
                <p className="feedback__desc">Easier to search for solutions based on a specific stack.</p>
                <Radio className="feedback__category" label="Enhacement" />
              </div>
              <span className="feedback__comments">2</span>
            </li>
          </ol>
        </div>
      </section>
    </main>
  )
}

export default Suggestions;