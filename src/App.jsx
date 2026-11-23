import { useEffect, useState, Component } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Works from "./components/Works";
import Videos from "./components/Videos";
import Journey from "./components/Journey";
import Gallery from "./components/Gallery";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { initLenis, stopScroll, startScroll } from "./lib/scroll";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink px-6 text-center">
          <p className="font-serif text-2xl text-bone">
            Something went wrong. <button className="text-gold underline" onClick={() => this.setState({ error: null })}>Retry</button>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    initLenis();
  }, []);

  useEffect(() => {
    if (loaded) {
      startScroll();
    } else {
      stopScroll();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loaded]);

  return (
    <ErrorBoundary>
      <div className="grain relative min-h-screen bg-ink text-bone">
        <AnimatePresence>
          {!loaded && <Preloader key="preloader" onComplete={() => setLoaded(true)} />}
        </AnimatePresence>

        <Nav />

        <main>
          <Hero active={loaded} />
          <Marquee />
          <About />
          <Works />
          <Videos />
          <Journey />
          <Gallery />
          <Classes />
          <Contact />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
