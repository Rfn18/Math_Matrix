import DarkTesseract from "./scene";

export default function Main() {
  return (
    <main>
      <div className="container-text">
        <p>Made by kelompok 3</p>
        <h1>Simple Course About Math Matrix</h1>
        <hr />
        <p>
          Matriks (Matrix) dalam matematika adalah susunan bilangan, simbol,
          atau ekspresi yang disusun dalam baris dan kolom membentuk suatu
          persegi panjang.
        </p>
        <button onClick={() => (location = "/soal-latihan1")}>Start</button>
      </div>
      <div className="container-canvas">
        <DarkTesseract />
      </div>
    </main>
  );
}
