import { Link } from 'react-router-dom';
import './FeedbackDetails.css';
import Feedback from '../../components/Feedback/Feedback';
import Comment from '../../components/Comment/Comment';

function FeedbackDetails() {
  const feedback = JSON.parse(localStorage.getItem('feedbacks'))[0];

  return (
    <main className="feedback-details site-content">
      <header className="feedback-details__header">
        <Link to="/" className="feedback-details__back-btn btn btn--back btn--back--light">Go Back</Link>
        <Link to="/feedback/edit" className="feedback-details__edit-btn btn btn--blue-orchid">Edit Feedback</Link>
      </header>

      <section className="feedback-details__comments comments">
        <Feedback className="feedback-details__feedback" {...feedback} />

        <div className="comments__wrapper">
          <Comment />
        </div>
      </section>
    </main>
  )
}

export default FeedbackDetails;