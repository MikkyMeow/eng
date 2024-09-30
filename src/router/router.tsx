import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/pages/Main/Main";
import { GrammarList } from "../components/pages/GrammarList/GrammarList";
import { GrammarTheme } from "../components/pages/GrammarTheme/GrammarTheme";

export const routes = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/grammar', element: <GrammarList /> },
    { path: '/grammar/:id', element: <GrammarTheme /> },
    { path: 'contact', element: <h1>Contact</h1> },
    { path: '*', element: <h1>Not found</h1> },
])