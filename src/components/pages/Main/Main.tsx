import { sentences } from "./sentences";

export const Main = () => {

  
  return (
    <>
      <h2>Main page</h2>
      {sentences.map(sentence => (
        <div key={sentence.id}>
          <p>{sentence.eng}</p>
          <p>{sentence.rus}</p>
        </div>
      ))}
    </>
  );
};
