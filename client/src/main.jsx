// main.jsx
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import App from "./App.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SavedShipWrecks from "./pages/SavedShipWrecks.jsx";
import MapPage from "./pages/MapPage.jsx"; // Import the MapPage component
const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ApolloProvider client={client}>
        <LandingPage />
      </ApolloProvider>
    ),
    children: [
      {
        index: true,
        element: (
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        ),
      },
      {
        path: "/saved",
        element: (
          <ApolloProvider client={client}>
            <SavedShipWrecks />
          </ApolloProvider>
        ),
      },
      {
        path: "/map", // Add a route for the MapPage component
        element: (
          <ApolloProvider client={client}>
            <MapPage />
          </ApolloProvider>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
