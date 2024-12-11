import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/pages/Main/Main";
import { GrammarList } from "../components/pages/GrammarList/GrammarList";
import { GrammarTheme } from "../components/pages/GrammarTheme/GrammarTheme";
import { UnitsList } from "../components/pages/UnitsList/UnitsList";
import { Unit } from "../components/pages/Unit/Unit";

export const routes = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/grammar", element: <GrammarList /> },
  { path: "/grammar/:id", element: <GrammarTheme /> },
  { path: "/units", element: <UnitsList /> },
  { path: "/units/:id", element: <Unit /> },
  { path: "*", element: <h1>Not found</h1> },
]);
