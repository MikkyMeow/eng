import { useState } from "react";
import { ListeningTrainer } from "../../widgets/ListeningTrainer/ListeningTrainer";
import { items } from "../../../content";
import { List, ListItemButton } from "@mui/material";

export interface ISentence {
  eng: string;
  rus: string;
}

export const Main = () => {
  const [sentence, setSentence] = useState<ISentence[]>([]);
  return (
    <>
      <h2>Main page</h2>
      <List>
        {items.map((sentence, i) => (
          <ListItemButton
            key={Math.random()}
            onClick={() => setSentence(sentence)}
          >
            {`text - ${i + 1}`}
          </ListItemButton>
        ))}
      </List>
      {sentence.length > 0 && <ListeningTrainer sentences={sentence} />}
    </>
  );
};
