import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import './NewFeedback.css';
import { Link } from 'react-router-dom';

function NewFeedback() {
  useEffect(() => {
    document.title = 'New Feedback';
  }, []);

  return (
    <main className="site-content">
      <h1 className="visually-hidden">Creating new feedback</h1>

      <section className="new-feedback">
        <Link to="/" className="new-feedback__cancel-btn btn btn--back btn--back--light">Go Back</Link>

        <form className="new-feedback__form form form--post" action="https://echo.htmlacademy.ru" method="POST">
          <fieldset className="form__inner">
            <legend className="form__heading heading heading--primary">Create New Feedback</legend>

            <div className="form__item">
              <p className="form__item-title heading heading--quaternary">Feedback Title</p>
              <p className="form__item-subtitle">Add a short, descriptive headline</p>
              <Input className="form__item-field" placeholder=" " minLength="5" required />
            </div>

            <div className="form__item">
              <p className="form__item-title heading heading--quaternary">Category</p>
              <p className="form__item-subtitle">Choose a category for your feedback</p>
              <Dropdown className="form__item-field" options={['Feature', 'UI', 'UX', 'Enhancement', 'Bug']} required />
            </div>

            <div className="form__item">
              <p className="form__item-title heading heading--quaternary">Feedback Detail</p>
              <p className="form__item-subtitle">Include any specific comments on what should be improved, added, etc.</p>
              <Input className="form__item-field form__item-field--textarea" placeholder=" " minLength="3" required />
            </div>
          </fieldset>

          <div className="form__end">
            <Link to="/" className="form__cancel-btn btn btn--dark">Cancel</Link>
            <Button className="form__submit-btn btn--blue-orchid" type="submit">Add feedback</Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default NewFeedback;