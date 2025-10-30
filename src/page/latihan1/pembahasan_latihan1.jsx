import Header from "../../component/header";

export default function Pembahasan1() {
  return (
  <>
    <Header />
    <h1>Pembahasan Soal 1</h1>
    <div className="container-pembahasan1">
      <div className="step1-pembahasan1">
        <p>Diketahui</p>
        <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mi>B</mi>
              <mo>=</mo>
              <mrow>
                <mo>[</mo>
                <mtable rowspacing="4pt" columnspacing="1em">
                  <mtr>
                    <mtd>
                      <mn>3</mn>
                    </mtd>
                    <mtd>
                      <mo>&#x2212;</mo>
                      <mn>1</mn>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mo>&#x2212;</mo>
                      <mn>2</mn>
                    </mtd>
                    <mtd>
                      <mn>1</mn>
                    </mtd>
                  </mtr>
                </mtable>
                <mo>]</mo>
              </mrow>
            </math>
             <math xmlns="http://www.w3.org/1998/Math/MathML">
              <msup>
                <mrow>
                  <mo>(</mo>
                  <mrow>
                    <mi>B</mi>
                    <msup>
                      <mi>A</mi>
                      <mrow class="MJX-TeXAtom-ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                  </mrow>
                  <mo>)</mo>
                </mrow>
                <mrow class="MJX-TeXAtom-ORD">
                  <mo>&#x2212;</mo>
                  <mn>1</mn>
                </mrow>
              </msup>
              <mo>=</mo>
               <mrow>
                <mo>[</mo>
                <mtable rowspacing="4pt" columnspacing="2em">
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
                      <mn>4</mn>
                    </mtd>
                    <mtd>
                      <mn>3</mn>
                    </mtd>
                  </mtr>
                </mtable>
                <mo>]</mo>
              </mrow>
            </math>
      </div>
      <div className="step2-pembahasan1">
          <p>Dengan bantuan sifat invers matriks</p>
          <math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mrow>
      <mo>(</mo>
      <mrow>
        <mi>A</mi>
        <mo>&#x22C5;</mo>
        <mi>B</mi>
      </mrow>
      <mo>)</mo>
    </mrow>
    <mrow class="MJX-TeXAtom-ORD">
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>=</mo>
  <msup>
    <mi>B</mi>
    <mrow class="MJX-TeXAtom-ORD">
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>&#x22C5;</mo>
  <msup>
    <mi>A</mi>
    <mrow class="MJX-TeXAtom-ORD">
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
          </math>
          <p>dan</p>
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <msup>
              <mrow>
                <mo>(</mo>
                <msup>
                  <mi>A</mi>
                  <mrow class="MJX-TeXAtom-ORD">
                    <mo>&#x2212;</mo>
                    <mn>1</mn>
                  </mrow>
                </msup>
                <mo>)</mo>
              </mrow>
              <mrow class="MJX-TeXAtom-ORD">
                <mo>&#x2212;</mo>
                <mn>1</mn>
              </mrow>
            </msup>
            <mo>=</mo>
            <mi>A</mi>
          </math>
      </div>
      <div className="step3-pembahasan1">
          <p>dapat kita peroleh</p>
          <div style={{textAlign: 'left', display: 'flex'}}>
              <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mtable columnalign="right left right left right left right left right left right left" rowspacing="3pt" columnspacing="0em 2em 0em 2em 0em 2em 0em 2em 0em 2em 0em" displaystyle="true" id="mathJax">
            <mtr>
              <mtd>
                <msup>
                  <mrow>
                    <mo>(</mo>
                    <mrow>
                      <mi>B</mi>
                      <msup>
                        <mi>A</mi>
                        <mrow class="MJX-TeXAtom-ORD">
                          <mo>&#x2212;</mo>
                          <mn>1</mn>
                        </mrow>
                      </msup>
                    </mrow>
                    <mo>)</mo>
                  </mrow>
                  <mrow class="MJX-TeXAtom-ORD">
                    <mo>&#x2212;</mo>
                    <mn>1</mn>
                  </mrow>
                </msup>
              </mtd>
              <mtd>
                <mi></mi>
                <mo>=</mo>
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
                        <mn>4</mn>
                      </mtd>
                      <mtd>
                        <mn>3</mn>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo>]</mo>
                </mrow>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <msup>
                  <mrow>
                    <mo>(</mo>
                    <msup>
                      <mi>A</mi>
                      <mrow class="MJX-TeXAtom-ORD">
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mo>)</mo>
                  </mrow>
                  <mrow class="MJX-TeXAtom-ORD">
                    <mo>&#x2212;</mo>
                    <mn>1</mn>
                  </mrow>
                </msup>
                <mo>&#x22C5;</mo>
                <msup>
                  <mi>B</mi>
                  <mrow class="MJX-TeXAtom-ORD">
                    <mo>&#x2212;</mo>
                    <mn>1</mn>
                  </mrow>
                </msup>
              </mtd>
              <mtd>
                <mi></mi>
                <mo>=</mo>
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
                        <mn>4</mn>
                      </mtd>
                      <mtd>
                        <mn>3</mn>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo>]</mo>
                </mrow>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>A</mi>
                <mo>&#x22C5;</mo>
                <msup>
                  <mi>B</mi>
                  <mrow class="MJX-TeXAtom-ORD">
                    <mo>&#x2212;</mo>
                    <mn>1</mn>
                  </mrow>
                </msup>
              </mtd>
              <mtd>
                <mi></mi>
                <mo>=</mo>
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
                        <mn>4</mn>
                      </mtd>
                      <mtd>
                        <mn>3</mn>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo>]</mo>
                </mrow>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>A</mi>
                <mo>&#x22C5;</mo>
                <msup>
                  <mi>B</mi>
                  <mrow class="MJX-TeXAtom-ORD">
                    <mo>&#x2212;</mo>
                    <mn>1</mn>
                  </mrow>
                </msup>
                <mo>&#x22C5;</mo>
                <mi>B</mi>
              </mtd>
              <mtd>
                <mi></mi>
                <mo>=</mo>
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
                        <mn>4</mn>
                      </mtd>
                      <mtd>
                        <mn>3</mn>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo>]</mo>
                </mrow>
                <mo>&#x22C5;</mo>
                <mi>B</mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>A</mi>
              </mtd>
              <mtd>
                <mi></mi>
                <mo>=</mo>
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
                        <mn>4</mn>
                      </mtd>
                      <mtd>
                        <mn>3</mn>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo>]</mo>
                </mrow>
                <mo>&#x22C5;</mo>
                <mrow>
                  <mo>[</mo>
                  <mtable rowspacing="4pt" columnspacing="1em">
                    <mtr>
                      <mtd>
                        <mn>3</mn>
                      </mtd>
                      <mtd>
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mtd>
                    </mtr>
                    <mtr>
                      <mtd>
                        <mo>&#x2212;</mo>
                        <mn>2</mn>
                      </mtd>
                      <mtd>
                        <mn>1</mn>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo>]</mo>
                </mrow>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>A</mi>
              </mtd>
              <mtd>
                <mi></mi>
                <mo>=</mo>
                <mrow>
                  <mo>[</mo>
                  <mtable rowspacing="4pt" columnspacing="1em">
                    <mtr>
                      <mtd>
                        <mo stretchy="false">(</mo>
                        <mn>2</mn>
                        <mo stretchy="false">)</mo>
                        <mo stretchy="false">(</mo>
                        <mn>3</mn>
                        <mo stretchy="false">)</mo>
                        <mo>+</mo>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo stretchy="false">)</mo>
                        <mo stretchy="false">(</mo>
                        <mo>&#x2212;</mo>
                        <mn>2</mn>
                        <mo stretchy="false">)</mo>
                      </mtd>
                      <mtd>
                        <mo stretchy="false">(</mo>
                        <mn>2</mn>
                        <mo stretchy="false">)</mo>
                        <mo stretchy="false">(</mo>
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                        <mo stretchy="false">)</mo>
                        <mo>+</mo>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo stretchy="false">)</mo>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo stretchy="false">)</mo>
                      </mtd>
                    </mtr>
                    <mtr>
                      <mtd>
                        <mo stretchy="false">(</mo>
                        <mn>4</mn>
                        <mo stretchy="false">)</mo>
                        <mo stretchy="false">(</mo>
                        <mn>3</mn>
                        <mo stretchy="false">)</mo>
                        <mo>+</mo>
                        <mo stretchy="false">(</mo>
                        <mn>3</mn>
                        <mo stretchy="false">)</mo>
                        <mo stretchy="false">(</mo>
                        <mo>&#x2212;</mo>
                        <mn>2</mn>
                        <mo stretchy="false">)</mo>
                      </mtd>
                      <mtd>
                        <mo stretchy="false">(</mo>
                        <mn>4</mn>
                        <mo stretchy="false">)</mo>
                        <mo stretchy="false">(</mo>
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                        <mo stretchy="false">)</mo>
                        <mo>+</mo>
                        <mo stretchy="false">(</mo>
                        <mn>3</mn>
                        <mo stretchy="false">)</mo>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo stretchy="false">)</mo>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo>]</mo>
                </mrow>
              </mtd>
            </mtr>
            <mtr>
              <mtd />
              <mtd>
                <mi></mi>
                <mo>=</mo>
                <mrow>
                  <mo>[</mo>
                  <mtable rowspacing="4pt" columnspacing="1em">
                    <mtr>
                      <mtd>
                        <mn>4</mn>
                      </mtd>
                      <mtd>
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mtd>
                    </mtr>
                    <mtr>
                      <mtd>
                        <mn>6</mn>
                      </mtd>
                      <mtd>
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo>]</mo>
                </mrow>
              </mtd>
            </mtr>
          </mtable>
        </math>
    </div>
      </div>
    </div>
  </>
  );
}
