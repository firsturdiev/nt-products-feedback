import Counter from "../Counter/Counter";
import Radio from "../Radio/Radio";
import './Feedback.css';

function Feedback({ title, desc, category, comments, upvotes, id }) {
  return (
    <li className="suggestions__item feedback" key={id}>
      <Counter className="feedback__upvotes" count={upvotes} />
      <div className="feedback__inner">
        <h3 className="feedback__title heading heading--tertiary">{title}</h3>
        <p className="feedback__desc">{desc}</p>
        <Radio className="feedback__category" label={category} />
      </div>
      <span className="feedback__comments">{comments}</span>
    </li>
  )
}

export default Feedback;