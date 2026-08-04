import { useState } from "react";

export default function Quiz() {
  const [currentQuestionIndex, setActiveQUestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return <p>Currently Active Question</p>;
}
