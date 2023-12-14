import "./App.css";
import "./components/ContainerBox";
import ContainerBox from "./components/ContainerBox";
import Question from "./components/Question";

function App() {
  const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 2,
      title: "How much does it cost?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 3,
      title: "When can I get it?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    
  ];

  return (
    <>
      <h1 className="text-5xl font-bold">FAQ With DropDown</h1>
      <ContainerBox>
        {questions.map((question) => (
          <Question
            title={question.title}
            info={question.info}
            key={question.id}
          />
        ))}
      </ContainerBox>
    </>
  );
}

export default App;
