// eslint-disable-next-line no-unused-vars
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './FeedbackDetails.css';

function FeedbackDetails() {
  return (
    <main className="feedback-details site-content">
      <header className="feedback-details__header">
        <Link to="/" className="feedback-details__back-btn btn btn--back btn--back--light">Go Back</Link>
        <Link to="/feedback/edit" className="feedback-details__edit-btn btn btn--blue-orchid">Edit Feedback</Link>
      </header>
    </main>
  )
}

export default FeedbackDetails;