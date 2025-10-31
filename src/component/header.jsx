export default function Header() {
  return (
    <>
      <header>
        <div className="container-text">
          <h1
            onClick={() => (location = "/")}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            Math Matrix
          </h1>
          <ul>
            <li onClick={() => (location = "/")}>home</li>
            <li onClick={() => (location = "/about")}>about</li>
            <li onClick={() => (location = "/contact")}>contact</li>
            <li onClick={() => (location = "/soal-latihan1")}>start</li>
          </ul>
        </div>
        <hr />
      </header>
    </>
  );
}
