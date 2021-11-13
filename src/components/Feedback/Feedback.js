import { Link } from "react-router-dom";
import { useState } from "react";
import Counter from "../Counter/Counter";
import Radio from "../Radio/Radio";
import './Feedback.css';

function Feedback({ className, title, desc, category, comments, upvotes, id }) {
  const [isUpvoted, setIsUpvoted] = useState(JSON.parse(window.localStorage.getItem('isUpvoted')) || false);
  const [upvotesCount, setUpvotesCount] = useState(upvotes);

  function handleUpvote() {
    if (!isUpvoted) {
      fetch(`https://618a17a334b4f400177c43e4.mockapi.io/all/feedbacks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          upvotes: upvotes + 1
        })
      })
        .then(() => {
          setUpvotesCount(upvotesCount + 1);
          setIsUpvoted(true);
          window.localStorage.setItem('isUpvoted', 'true');
        });
    } else {
      fetch(`https://618a17a334b4f400177c43e4.mockapi.io/all/feedbacks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          upvotes: upvotes - 1 
        })
      })
        .then(() => {
          setUpvotesCount(upvotesCount - 1)
          setIsUpvoted(false);
          window.localStorage.setItem('isUpvoted', 'false');
        });
    }
  }

  return (
    <li className={"feedback " + (className || '')}>
      <Counter onClick={handleUpvote} className={"feedback__upvotes " + (isUpvoted ? 'counter--active' : '')} count={upvotesCount} />
      <div className="feedback__inner">
        <h3 className="feedback__title heading heading--tertiary">
          <Link to={"/feedback/details/" + id} className="feedback__title-link">{title}</Link>
        </h3>
        <p className="feedback__desc">{desc}</p>
        <Radio className="feedback__category" label={category} />
      </div>
      <span className="feedback__comments">{comments}</span>
    </li>
  )
}

export default Feedback;