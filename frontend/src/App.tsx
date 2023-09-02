import Header from "./components/header";
import GlobalStyle from "./styles/global.ts";
import Routes from "./routes.tsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
      <GlobalStyle />
    </div>
  );
}
