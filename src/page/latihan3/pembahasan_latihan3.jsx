import { Center } from "@react-three/drei";
import { useState } from "react";
import Header from "../../component/header";

export default function Pembahasan3() {
  const [suaraActive, setSuaraActive] = useState(true);
  function handleSpeak() {
    const text = `Diketahui tiga buah matriks, yaitu matriks A, matriks B, dan matriks C.

Matriks A sama dengan

baris pertama, a tambah dua, dan satu dikurang tiga b.
baris kedua, negatif satu dan negatif enam.

Matriks B sama dengan

baris pertama, dua a, dan b dikurang tiga.
baris kedua, negatif satu dan dua.

Sedangkan matriks C sama dengan

baris pertama, lima dan enam,
baris kedua, negatif dua dan negatif empat.

Diketahui bahwa A ditambah B sama dengan C.
Mari kita jumlahkan elemen-elemen yang bersesuaian.

Kita dapatkan hasil penjumlahan sebagai berikut:

Baris pertama kolom pertama, a tambah dua ditambah dua a, hasilnya tiga a tambah dua.

Baris pertama kolom kedua, satu dikurang tiga b ditambah b dikurang tiga, hasilnya negatif dua b dikurang dua.

Baris kedua kolom pertama, negatif satu tambah negatif satu, hasilnya negatif dua.

Dan baris kedua kolom kedua, negatif enam tambah dua, hasilnya negatif empat.

Jadi hasil penjumlahan matriks A dan B adalah

baris pertama: tiga a tambah dua, dan negatif dua b dikurang dua.
baris kedua: negatif dua dan negatif empat.

Karena A tambah B sama dengan C, kita samakan elemen-elemennya.

Dari elemen pertama, tiga a tambah dua sama dengan lima.
Maka, tiga a sama dengan tiga,
sehingga a sama dengan satu.

Dari elemen kedua, negatif dua b dikurang dua sama dengan enam.
Maka, negatif dua b sama dengan delapan,
sehingga b sama dengan negatif empat.

Jadi, nilai a sama dengan satu,
dan b sama dengan negatif empat.

Sehingga nilai dari a tambah b adalah,
satu, ditambah negatif empat, sama dengan negatif tiga.

Jadi, jawabannya adalah negatif tiga!`;
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
      <Header />
      <h1 style={{ justifySelf: "center", margin: ".5em 0" }}>
        Pembahasan Soal 3
      </h1>
      <div className="container-pembahasan3">
        <div className="step1-pembahasan3">
          <p style={{ marginBottom: "1em" }}>Diketahui</p>
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mtable displaystyle="true" columnspacing="0em" rowspacing="3pt">
              <mtr>
                <mtd>
                  <mi>A</mi>
                </mtd>
                <mtd>
                  <mi></mi>
                  <mo>=</mo>
                  <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">(</mo>
                    <mtable
                      columnalign="center"
                      columnspacing="1em"
                      rowspacing="4pt"
                    >
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
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mi>B</mi>
                </mtd>
                <mtd>
                  <mi></mi>
                  <mo>=</mo>
                  <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">(</mo>
                    <mtable
                      columnalign="center"
                      columnspacing="1em"
                      rowspacing="4pt"
                    >
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
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mi>C</mi>
                </mtd>
                <mtd>
                  <mi></mi>
                  <mo>=</mo>
                  <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">(</mo>
                    <mtable
                      columnalign="center"
                      columnspacing="1em"
                      rowspacing="4pt"
                    >
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
                </mtd>
              </mtr>
            </mtable>
          </math>
        </div>
        <div className="step2-pembahasan3">
          <p style={{ marginBottom: "1em" }}>Dengan demikian</p>
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="flex">
            <mtable
              displaystyle="true"
              columnalign="right left"
              columnspacing="0em"
              rowspacing="3pt"
            >
              <mtr>
                <mtd>
                  <mi>A</mi>
                  <mo>+</mo>
                  <mi>B</mi>
                </mtd>
                <mtd>
                  <mi></mi>
                  <mo>=</mo>
                  <mi>C</mi>
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">(</mo>
                    <mtable
                      columnalign="center"
                      columnspacing="1em"
                      rowspacing="4pt"
                    >
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
                  <mo>+</mo>
                  <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">(</mo>
                    <mtable
                      columnalign="center"
                      columnspacing="1em"
                      rowspacing="4pt"
                    >
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
                </mtd>
                <mtd>
                  <mi></mi>
                  <mo>=</mo>
                  <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">(</mo>
                    <mtable
                      columnalign="center"
                      columnspacing="1em"
                      rowspacing="4pt"
                    >
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
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">(</mo>
                    <mtable
                      columnalign="center"
                      columnspacing="1em"
                      rowspacing="4pt"
                    >
                      <mtr>
                        <mtd>
                          <mn>3</mn>
                          <mi>a</mi>
                          <mo>+</mo>
                          <mn>2</mn>
                        </mtd>
                        <mtd>
                          <mo>&#x2212;</mo>
                          <mn>2</mn>
                          <mi>b</mi>
                          <mo>&#x2212;</mo>
                          <mn>2</mn>
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
                </mtd>
                <mtd>
                  <mi></mi>
                  <mo>=</mo>
                  <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">(</mo>
                    <mtable
                      columnalign="center"
                      columnspacing="1em"
                      rowspacing="4pt"
                    >
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
                </mtd>
              </mtr>
            </mtable>
          </math>
        </div>
        <div className="step3-pembahasan3">
          <p style={{ marginBottom: "1em" }}>
            Persamaan terakhir menunjukkan bahwa
          </p>
          <math
            xmlns="http://www.w3.org/1998/Math/MathML"
            display="block"
            style={{ marginBottom: "1em" }}
          >
            <mtable
              displaystyle="true"
              columnalign="right"
              columnspacing=""
              rowspacing="3pt"
            >
              <mtr>
                <mtd>
                  <mn>3</mn>
                  <mi>a</mi>
                  <mo>+</mo>
                  <mn>2</mn>
                  <mo>=</mo>
                  <mn>5</mn>
                  <mo stretchy="false">&#x21D2;</mo>
                  <mn>3</mn>
                  <mi>a</mi>
                  <mo>=</mo>
                  <mn>3</mn>
                  <mo stretchy="false">&#x21D2;</mo>
                  <mi>a</mi>
                  <mo>=</mo>
                  <mn>1.</mn>
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mo>&#x2212;</mo>
                  <mn>2</mn>
                  <mi>b</mi>
                  <mo>&#x2212;</mo>
                  <mn>2</mn>
                  <mo>=</mo>
                  <mn>6</mn>
                  <mo stretchy="false">&#x21D2;</mo>
                  <mo>&#x2212;</mo>
                  <mn>2</mn>
                  <mi>b</mi>
                  <mo>=</mo>
                  <mn>8</mn>
                  <mo stretchy="false">&#x21D2;</mo>
                  <mi>b</mi>
                  <mo>=</mo>
                  <mo>&#x2212;</mo>
                  <mn>4.</mn>
                </mtd>
              </mtr>
            </mtable>
          </math>
          <p>
            Jadi, nilai dari{" "}
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mi>a</mi>
              <mo>+</mo>
              <mi>b</mi>
            </math>
          </p>
          <p>
            adalah
            <math
              xmlns="http://www.w3.org/1998/Math/MathML"
              style={{
                marginLeft: ".5em",
                border: "1px solid #fff",
                padding: ".3em .8em",
              }}
            >
              <menclose notation="box">
                <mrow data-mjx-texclass="ORD">
                  <mstyle displaystyle="true" scriptlevel="0">
                    <mrow data-mjx-texclass="ORD">
                      <mn>1</mn>
                      <mo>+</mo>
                      <mo stretchy="false">(</mo>
                      <mo>&#x2212;</mo>
                      <mn>4</mn>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mo>&#x2212;</mo>
                      <mn>3</mn>
                    </mrow>
                  </mstyle>
                </mrow>
              </menclose>
            </math>
          </p>
        </div>
      </div>
      <div className="pembahasan1-footer">
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
        <button className="footer-btn">Next</button>
      </div>
    </>
  );
}
