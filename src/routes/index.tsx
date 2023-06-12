import { createSignal } from "solid-js";
import { Link } from "gatsby";

function HomePage() {
  const [title] = createSignal("Shop AI Management");

  return (
    <div style={{ backgroundColor: "#E6F2FF", minHeight: "100vh" }}>
      <nav style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <Link to="/page1" style={{ marginBottom: "10px" }}>Button 1</Link>
        <Link to="/page2" style={{ marginBottom: "10px" }}>Button 2</Link>
        <Link to="/page3" style={{ marginBottom: "10px" }}>Button 3</Link>
        <Link to="/page4" style={{ marginBottom: "10px" }}>Button 4</Link>
        <Link to="/page5" style={{ marginBottom: "10px" }}>Button 5</Link>
        <Link to="/page6" style={{ marginBottom: "10px" }}>Button 6</Link>
      </nav>
      <div style={{ padding: "20px" }}>
        <h1>{title()}</h1>
        {/* Add your page content here */}
      </div>
    </div>
  );
}

export default HomePage;

