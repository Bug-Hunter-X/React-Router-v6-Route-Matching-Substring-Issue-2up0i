```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* More specific route should come before the more general one */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function AboutUs() { return <h1>About Us</h1>; }
function Contact() { return <h1>Contact</h1>; }
export default App;
```