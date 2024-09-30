import ReactMarkdown from "react-markdown";
import { supabase } from "./api/client";
import { useCallback, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/router";
import { fetchThemes } from "./api/grammar";

export const App = () => {

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}
