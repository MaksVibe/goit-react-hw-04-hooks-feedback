import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statictics from "./components/Statistics/Statistics.jsx";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    let percents = (100 * good) / countTotalFeedback();

    if (isNaN(percents)) {
      return (percents = 0);
    }

    if (percents >= 100) {
      return (percents = 100);
    }

    return percents;
  };

  const onLeaveFeedback = e => {
    const value = e.target.textContent.toLowerCase();

    switch (value) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <section>
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />

      <Statictics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </section>
  );
}
