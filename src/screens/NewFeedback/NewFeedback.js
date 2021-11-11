import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import './NewFeedback.css';

function NewFeedback() {
  useEffect(() => {
    document.title = 'New Feedback';
  }, []);

  return (
    <main className="site-content">
      <h1 className="visually-hidden">Creating new feedback</h1>

      <section className="new-feedback">
        <Button className="btn--back btn--back--light">Go Back</Button>

        <form className="new-feedback__form form" action="https://echo.htmlacademy.ru" method="POST">
          <fieldset className="form__inner">
            <legend className="form__heading">Create New Feedback</legend>

            <div className="form__item">
              <p className="form__item-title">Feedback Title</p>
              <p className="form__item-subtitle">Add a short, descriptive headline</p>
              <Input className="form__item-field" />
            </div>

            <div className="form__item">
              <p className="form__item-title">Category</p>
              <p className="form__item-subtitle">Choose a category for your feedback</p>
              <Dropdown className="form__item-field" options={['Feature', 'UI', 'UX', 'Enhancement', 'Bug']} />
            </div>

            <div className="form__item">
              <p className="form__item-title">Feedback Detail</p>
              <p className="form__item-subtitle">Include any specific comments on what should be improved, added, etc.</p>
              <Input className="form__item-field form__item-field--textarea" />
            </div>
          </fieldset>

          .form__end
        </form>
      </section>
    </main>
  )
}

export default NewFeedback;