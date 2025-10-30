import { texture } from "three/tsl";
import Header from "../../component/header";
import { useEffect, useState } from "react";

export default function Soal2() {
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
      <div className="soal-latihan1">
        <Header />
        <h1>Soal Latihan 2</h1>
        <div className="container-soal1">
          <div className="container-soal-text">
            <p>
              Sebuah perusahaan minuman memiliki dua pabrik yang memproduksi dua
              jenis minuman energi. Hubungan antara bahan baku (A), jumlah
              produksi (X), dan data penjualan (D) dinyatakan oleh persamaan:
            </p>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mi>A</mi>
              <mi>X</mi>
              <mo>=</mo>
              <mi>B</mi>
              <mo>,</mo>
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi>B</mi>
                <mi>C</mi>
                <mo>=</mo>
                <mi>D</mi>
              </math>
            </math>
            <p>Diketahui:</p>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mi>A</mi>
              <mo>=</mo>
              <mrow>
                <mo>[</mo>
                <mtable rowspacing="4pt" columnspacing="1em">
                  <mtr>
                    <mtd>
                      <mn>1</mn>
                    </mtd>
                    <mtd>
                      <mn>2</mn>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mo>&#x2212;</mo>
                      <mn>3</mn>
                    </mtd>
                    <mtd>
                      <mo>&#x2212;</mo>
                      <mn>5</mn>
                    </mtd>
                  </mtr>
                </mtable>
                <mo>]</mo>
                <mo>,</mo>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <mi>C</mi>
                  <mo>=</mo>
                  <mrow>
                    <mo>[</mo>
                    <mtable rowspacing="4pt" columnspacing="1em">
                      <mtr>
                        <mtd>
                          <mn>3</mn>
                        </mtd>
                        <mtd>
                          <mn>2</mn>
                        </mtd>
                      </mtr>
                      <mtr>
                        <mtd>
                          <mn>1</mn>
                        </mtd>
                        <mtd>
                          <mn>1</mn>
                        </mtd>
                      </mtr>
                    </mtable>
                    <mo>]</mo>
                  </mrow>
                </math>
                <mo>,</mo>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <mi>D</mi>
                  <mo>=</mo>
                  <mrow>
                    <mo>[</mo>
                    <mtable rowspacing="4pt" columnspacing="1em">
                      <mtr>
                        <mtd>
                          <mn>7</mn>
                        </mtd>
                        <mtd>
                          <mn>2</mn>
                        </mtd>
                      </mtr>
                      <mtr>
                        <mtd>
                          <mn>5</mn>
                        </mtd>
                        <mtd>
                          <mn>1</mn>
                        </mtd>
                      </mtr>
                    </mtable>
                    <mo>]</mo>
                  </mrow>
                </math>
              </mrow>
            </math>
            <p>
              Tentukan matriks X yang menunjukkan jumlah produksi dari
              masing-masing pabrik!
            </p>
            <div className="container-jawaban">
              <ul>
                <li>
                  a.{" "}
                  <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mtext>&#xA0;</mtext>
                    <mrow>
                      <mo>[</mo>
                      <mtable rowspacing="4pt" columnspacing="1em">
                        <mtr>
                          <mtd>
                            <mn>2</mn>
                          </mtd>
                          <mtd>
                            <mn>1</mn>
                          </mtd>
                        </mtr>
                        <mtr>
                          <mtd>
                            <mn>41</mn>
                          </mtd>
                          <mtd>
                            <mo>&#x2212;</mo>
                            <mn>19</mn>
                          </mtd>
                        </mtr>
                      </mtable>
                      <mo>]</mo>
                    </mrow>
                  </math>
                </li>
                <li>
                  b.{" "}
                  <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mtext>&#xA0;</mtext>
                    <mrow>
                      <mo>[</mo>
                      <mtable
                        columnalign="center center"
                        style={{ "--column-gap": "2em" }}
                        rowspacing="4pt"
                        columnspacing="2em"
                      >
                        <mtr>
                          <mtd style={{ paddingRight: ".5em" }}>
                            <mn>33</mn>
                          </mtd>
                          <mtd>
                            <mn>54</mn>
                          </mtd>
                        </mtr>
                        <mtr>
                          <mtd style={{ paddingRight: ".5em" }}>
                            <mn>19</mn>
                          </mtd>
                          <mtd>
                            <mn>31</mn>
                          </mtd>
                        </mtr>
                      </mtable>
                      <mo>]</mo>
                    </mrow>
                  </math>
                </li>
                <li>
                  c.{" "}
                  <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mtext>&#xA0;</mtext>
                    <mrow>
                      <mo>[</mo>
                      <mtable rowspacing="4pt" columnspacing="1em">
                        <mtr>
                          <mtd>
                            <mo>&#x2212;</mo>
                            <mn>33</mn>
                          </mtd>
                          <mtd>
                            <mn>54</mn>
                          </mtd>
                        </mtr>
                        <mtr>
                          <mtd>
                            <mn>19</mn>
                          </mtd>
                          <mtd>
                            <mo>&#x2212;</mo>
                            <mn>31</mn>
                          </mtd>
                        </mtr>
                      </mtable>
                      <mo>]</mo>
                    </mrow>
                  </math>
                </li>
                <li>
                  d.{" "}
                  <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mtext>&#xA0;</mtext>
                    <mrow>
                      <mo>[</mo>
                      <mtable rowspacing="4pt" columnspacing="1em">
                        <mtr>
                          <mtd style={{ paddingRight: ".5em" }}>
                            <mn>4</mn>
                          </mtd>
                          <mtd>
                            <mn>5</mn>
                          </mtd>
                        </mtr>
                        <mtr>
                          <mtd style={{ paddingRight: ".5em" }}>
                            <mn>10</mn>
                          </mtd>
                          <mtd>
                            <mn>13</mn>
                          </mtd>
                        </mtr>
                      </mtable>
                      <mo>]</mo>
                    </mrow>
                  </math>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-image">
            <img
              src="/image/gambar-soal2.png"
              alt="gambar-pabrik"
              id="image1"
            />
          </div>
        </div>
        <div className="soal1-footer">
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
          <button>Next</button>
        </div>
      </div>
    </>
  );
}
