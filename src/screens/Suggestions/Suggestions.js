import { useEffect, useRef, useState } from 'react';
import ErrorImg from '../../assets/img/icon-404.svg';
import Radio from '../../components/Radio/Radio';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import Feedback from '../../components/Feedback/Feedback';
import './Suggestions.css';
import { useHistory } from 'react-router';

function Suggestions() {
  const [feedbacks, setFeedbacks] = useState(JSON.parse(localStorage.getItem('feedbacks')));
  const [category, setCategory] = useState('All');
  const [menuState, setMenuState] = useState(false);

  const sortRef = useRef();
  const [requestURL, setRequestURL] = useState('https://618a17a334b4f400177c43e4.mockapi.io/all/feedbacks?');

  useEffect(() => {
    fetch(requestURL)
      .then(response => response.json())
      .then(data => setFeedbacks(data));
  }, [requestURL]);

  useEffect(getRequestURL, [category]);

  function getRequestURL() {
    let URL = 'https://618a17a334b4f400177c43e4.mockapi.io/all/feedbacks?';

    switch (sortRef.current.value) {
      case 'Least Upvotes':
        URL += 'sortBy=upvotes';
        break;
      case 'Most Comments':
        URL += 'sortBy=comments&order=desc';
        break;
      case 'Least Comments':
        URL += 'sortBy=comments';
        break;
      default:
        URL += 'sortBy=upvotes&order=desc';
    }

    if (category !== 'All')
      URL += `&category=${category}`;

    setRequestURL(URL);
  }

  function handleMenuClick(e) {
    if ((window.innerWidth <= 600) && e.target.matches('.suggestions__menu'))
      setMenuState(false);
  }

  function handleAddFeedback() {
    return null;
  }

  return (
    <main className="site-content">
      <h1 className="visually-hidden">firstTeam feedback board</h1>

      <section className="suggestions">
        <div className="suggestions__sidebar">
          <div className="suggestions__hero">
            <h2 className="suggestions__hero-title heading heading--secondary">firsTeam</h2>
            <p className="suggestions__hero-subtitle">Feedback Board</p>
          </div>

          <div onClick={handleMenuClick} className={"suggestions__menu " + (menuState ? "suggestions__menu--open" : '')}>
            <div className="suggestions__menu-inner">
              <div className="suggestions__filter">
                {
                  ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'].map((category, index) => (
                    <Radio onChange={(e) => setCategory(e.target.value)} label={category} name='feedback_category' value={category} defaultChecked={index === 0} key={index} />
                  ))
                }
              </div>
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

          <button onClick={() => setMenuState(!menuState)} className={"suggestions__menu-toggle " + (menuState ? "suggestions__menu-toggle--active" : "")} type="button" aria-label="Toggle open menu"></button>
        </div>

        <div className="suggestions__content">
          <header className="suggestions__content-top">
            <h2 className="suggestions__content-heading heading heading--tertiary">6 Suggestions</h2>
            <Dropdown onChange={getRequestURL} ref={sortRef} className="suggestions__content-dropdown" options={['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments']} aria-label="Sorting feedbacks" />
            <Button onClick={handleAddFeedback} className="suggestions__add-btn btn--blue-orchid">+ Add Feedback</Button>
          </header>

          {
            (feedbacks)
              ? (
                <ol className="suggestions__list">
                  {
                    feedbacks.map(feedback => (
                      <Feedback {...feedback} key={feedback.id} />
                    ))
                  }
                </ol>
              )
              : (
                <div className="suggestions__empty">
                  <img className="suggestions__empty-icon" src={ErrorImg} width="131" height="137" alt="" aria-hidden />
                  <h2 className="suggestions__empty-heading heading heading--primary">There is no feedback yet.</h2>
                  <p className="suggestions__empty-text">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                  <Button className="suggestions__empty-btn btn--blue-orchid">+ Add Feedback</Button>
                </div>
              )
          }
        </div>
      </section>
    </main>
  )
}

export default Suggestions;