import Section from "../Section/Section";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <button onClick={onLeaveFeedback} type="button">
        Good
      </button>
      <button onClick={onLeaveFeedback} type="button">
        Neutral
      </button>
      <button onClick={onLeaveFeedback} type="button">
        Bad
      </button>
    </Section>
  );
};

export default FeedbackOptions;
