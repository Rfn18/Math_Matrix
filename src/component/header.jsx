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
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>start</li>
          </ul>
        </div>
        <hr />
      </header>
    </>
  );
}
