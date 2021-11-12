import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import './EditFeedback.css';

function EditFeedback() {
  useEffect(() => {
    document.title = 'Edit Feedback';
  }, []);

  return (
    <main className="site-content">
      <h1 className="visually-hidden">Editing feedback</h1>

      <section className="edit-feedback">
        <Link to="/" className="edit-feedback__cancel-btn btn btn--back btn--back--light">Go Back</Link>

        <form className="edit-feedback__form form form--edit" action="https://echo.htmlacademy.ru" method="POST">
          <fieldset className="form__inner">
            <legend className="form__heading heading heading--primary">Editing ‘Add a dark theme option’</legend>

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
              <p className="form__item-title heading heading--quaternary">Update Status</p>
              <p className="form__item-subtitle">Change feedback state</p>
              <Dropdown className="form__item-field" options={['Suggestion', 'Planned', 'In-Progress', 'Live']} required />
            </div>

            <div className="form__item">
              <p className="form__item-title heading heading--quaternary">Feedback Detail</p>
              <p className="form__item-subtitle">Include any specific comments on what should be improved, added, etc.</p>
              <Input className="form__item-field form__item-field--textarea" placeholder=" " minLength="3" required />
            </div>
          </fieldset>

          <div className="form__end">
            <Button className="form__delete-btn btn--red">Delete</Button>
            <Link to="/" className="form__cancel-btn btn btn--dark">Cancel</Link>
            <Button className="form__submit-btn btn--blue-orchid" type="submit">Save changes</Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default EditFeedback;