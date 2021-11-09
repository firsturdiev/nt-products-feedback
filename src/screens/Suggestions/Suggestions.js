import { useEffect, useState } from 'react';
import Radio from '../../components/Radio/Radio';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import Feedback from '../../components/Feedback/Feedback';
import './Suggestions.css';

function Suggestions() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('https://618a17a334b4f400177c43e4.mockapi.io/all/feedbacks')
      .then(response => response.json())
      .then(data => setFeedbacks(data));
  });

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
            {
              feedbacks.map(feedback => (
                <Feedback {...feedback} />
              ))
            }
          </ol>
        </div>
      </section>
    </main>
  )
}

export default Suggestions;