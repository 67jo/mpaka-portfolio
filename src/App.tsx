import { Navbar } from "./components/Navbar/Navbar";
import { ScrollProgress } from "./components/ScrollProgress/ScrollProgress";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { useTheme } from "./hooks/useTheme";
import { useSeo } from "./hooks/useSeo";

function App() {
  const { theme, toggleTheme } = useTheme();
  useSeo();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
