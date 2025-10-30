import { Center } from "@react-three/drei";
import { useState } from "react";
import Header from "../../component/header";

export default function Pembahasan2() {
  const [suaraActive, setSuaraActive] = useState(true);
  function handleSpeak() {
    const text = `Baik, kita mulai dari yang diketahui terlebih dahulu.
                  Diketahui, matriks B adalah:
                  buka kurung siku,
                  tiga, negatif satu,
                  baris berikutnya, negatif dua, satu,
                  tutup kurung siku.

                  Kemudian, diketahui juga bahwa,
                  tanda kurung, B dikali A pangkat negatif satu, tutup kurung,
                  dipangkatkan negatif satu,
                  hasilnya sama dengan matriks
                  dua, satu,
                  empat, tiga.

                  Selanjutnya, dengan menggunakan sifat invers matriks,
                  yaitu tanda kurung, A kali B, tutup kurung, pangkat negatif satu,
                  sama dengan B pangkat negatif satu kali A pangkat negatif satu.

                  Dan juga, sifat lainnya,
                  tanda kurung, A pangkat negatif satu, tutup kurung, pangkat negatif satu,
                  sama dengan A.

                  Dengan bantuan kedua sifat ini,
                  kita dapat memperoleh bentuk atau hasil selanjutnya sesuai gambar pada layar.`;
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
        Pembahasan Soal 2
      </h1>
      <div className="container-pembahasan1">
        <div className="step1-pembahasan1">
          <p>Diketahui</p>
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
        </div>
        <div className="step2-pembahasan1">
          <p>Dengan bantuan sifat invers matriks</p>
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <msup>
              <mrow>
                <mrow>
                  <mi>A</mi>
                  <mo>&#x22C5;</mo>
                  <mi>B</mi>
                  <mo>=</mo>
                  <mi>C</mi>
                </mrow>
              </mrow>
            </msup>
          </math>
          <p>maka</p>
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mi>A</mi>
            <mo>=</mo>
            <mi>C</mi>
            <mo>&#x22C5;</mo>
            <msup>
              <mi>B</mi>
              <mrow class="MJX-TeXAtom-ORD">
                <mo>&#x2212;</mo>
                <mn>1</mn>
              </mrow>
            </msup>
          </math>
        </div>
        <div className="step3-pembahasan1">
          <p>dapat kita peroleh</p>
          <img src="/image/pembahasan-3.png" alt="img" />
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
        <button>Next</button>
      </div>
    </>
  );
}
