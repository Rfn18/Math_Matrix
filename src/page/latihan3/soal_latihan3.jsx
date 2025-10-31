import { texture } from "three/tsl";
import Header from "../../component/header";
import { useEffect, useState } from "react";

export default function Soal3() {
  const [suaraActive, setSuaraActive] = useState(true);
  function handleSpeak() {
    const text = `Sebuah perusahaan memiliki matriks produksi B, yang menunjukkan kontribusi dua pabrik terhadap dua produk.
                    Matriks B adalah:
                    baris pertama, tiga dan negatif satu.
                    baris kedua, negatif dua dan satu.

                    Setelah dilakukan proses optimasi, diketahui bahwa invers dari hasil perkalian matriks B dengan invers dari matriks A,
                    menghasilkan matriks baru yang inversnya adalah:
                    baris pertama, dua dan satu.
                    baris kedua, empat dan tiga.

                    Tentukan, matriks A yang digunakan perusahaan tersebut.`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.pitch = 1;
    utterance.rate = 1;

    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      setSuaraActive(false);
      speechSynthesis.speak(utterance);
    } else {
      speechSynthesis.addEventListener("voiceschanged", () => {
        setSuaraActive(false);
        speechSynthesis.speak(utterance);
      });
    }
  }
  return (
    <>
      <div className="soal-latihan3">
        <Header />
        <h1>Soal Latihan TKA</h1>
        <div className="container-soal1">
          <div className="container-soal-text">
            <p>
              Sebuah perusahaan kopi modern bernama Matrix Beans memiliki dua
              pabrik yang sedang dibandingkan produktivitasnya.
              <br />
              Setiap pabrik memproduksi dua jenis kopi unggulan: Kopi Arabica
              dan Kopi Robusta.
              <br />
              Hasil produksi dari kedua pabrik tersebut direpresentasikan dalam
              bentuk matriks, karena setiap angka menunjukkan jumlah kilogram
              kopi per hari untuk tiap jenis. Diketahui:
            </p>
            <math
              xmlns="http://www.w3.org/1998/Math/MathML"
              style={{ margin: "10px 0" }}
            >
              <mi>A</mi>
              <mo>=</mo>
              <mrow data-mjx-texclass="INNER">
                <mo data-mjx-texclass="OPEN">(</mo>
                <mtable columnspacing="1em" rowspacing="4pt">
                  <mtr>
                    <mtd>
                      <mi>a</mi>
                      <mo>+</mo>
                      <mn>2</mn>
                    </mtd>
                    <mtd>
                      <mn>1</mn>
                      <mo>&#x2212;</mo>
                      <mn>3</mn>
                      <mi>b</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mo>&#x2212;</mo>
                      <mn>1</mn>
                    </mtd>
                    <mtd>
                      <mo>&#x2212;</mo>
                      <mn>6</mn>
                    </mtd>
                  </mtr>
                </mtable>
                <mo data-mjx-texclass="CLOSE">)</mo>
              </mrow>
              <mo>,</mo>
              <mi>B</mi>
              <mo>=</mo>
              <mrow data-mjx-texclass="INNER">
                <mo data-mjx-texclass="OPEN">(</mo>
                <mtable columnspacing="1em" rowspacing="4pt">
                  <mtr>
                    <mtd>
                      <mn>2</mn>
                      <mi>a</mi>
                    </mtd>
                    <mtd>
                      <mi>b</mi>
                      <mo>&#x2212;</mo>
                      <mn>3</mn>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mo>&#x2212;</mo>
                      <mn>1</mn>
                    </mtd>
                    <mtd>
                      <mn>2</mn>
                    </mtd>
                  </mtr>
                </mtable>
                <mo data-mjx-texclass="CLOSE">)</mo>
              </mrow>
              <mo>,</mo>
              <mi>C</mi>
              <mo>=</mo>
              <mrow data-mjx-texclass="INNER">
                <mo data-mjx-texclass="OPEN">(</mo>
                <mtable columnspacing="1em" rowspacing="4pt">
                  <mtr>
                    <mtd>
                      <mn>5</mn>
                    </mtd>
                    <mtd>
                      <mn>6</mn>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mo>&#x2212;</mo>
                      <mn>2</mn>
                    </mtd>
                    <mtd>
                      <mo>&#x2212;</mo>
                      <mn>4</mn>
                    </mtd>
                  </mtr>
                </mtable>
                <mo data-mjx-texclass="CLOSE">)</mo>
              </mrow>
            </math>
            <p>
              Manajer produksi, Kak Arif, mencatat bahwa total hasil gabungan
              dari kedua pabrik tersebut sama dengan data pada matriks C, atau
              dengan kata lain:
            </p>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mi>A</mi>
              <mo>+</mo>
              <mi>B</mi>
              <mo>=</mo>
              <mi>C</mi>
            </math>
            <p>
              Pertanyaan : <br /> Berapakah nilai dari a + b, yang menunjukkan
              rasio gabungan antara kapasitas bahan baku Arabica dan Robusta
              pada pabrik tersebut?
            </p>
            <div className="container-jawaban">
              <ul>
                <li>a. -6</li>
                <li>b. -2</li>
                <li>c. 2</li>
                <li>d. 3</li>
              </ul>
            </div>
          </div>
          <div className="container-image">
            <img
              src="/image/gambar-soal3.png"
              alt="gambar-pabrik"
              id="image1"
            />
          </div>
        </div>
        <div className="soal3-footer">
          <div className="pause-auto-speech">
            {suaraActive === false ? (
              <>
                <i
                  class="fa-solid fa-pause"
                  id="pause"
                  onClick={() => {
                    speechSynthesis.cancel();
                    setSuaraActive(true);
                  }}
                ></i>
                <p>text to speech is running!</p>
              </>
            ) : (
              <>
                <i class="fa-solid fa-play" id="play" onClick={handleSpeak}></i>
                <p>Play Text To Speech!</p>
              </>
            )}
          </div>
          <button
            className="footer-btn"
            onClick={() => (location = "/pembahasan-latihan3")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
