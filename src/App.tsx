import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import SpotlightEffect from "./components/Spotlight";


const AppContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <SpotlightEffect>
          <AppContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppContainer>
        </SpotlightEffect>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
