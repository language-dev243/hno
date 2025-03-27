import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import StoryFeed from "./components/StoryFeed";

import "./index.css";

const root = document.getElementById("root");

const queryClient = new QueryClient();

ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<StoryFeed selectedCategory="topstories" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
);
