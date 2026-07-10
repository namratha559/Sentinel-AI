function Navbar() {
  return (
    <nav
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🛰 Sentinel AI</h2>

      <div>
        <span style={{ marginRight: "20px" }}>Dashboard</span>
        <span style={{ marginRight: "20px" }}>Forecast</span>
        <span style={{ marginRight: "20px" }}>Map</span>
        <span>Reports</span>
      </div>
    </nav>
  );
}

export default Navbar;