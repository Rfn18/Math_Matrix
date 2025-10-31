import "./about.css";

export default function About() {
  return (
    <>
      <div class="tentang-page">
        <header class="header-section">
          <h1>Tentang Kami</h1>
        </header>

        <section class="about-section">
          <div class="container">
            <h2>Halo</h2>
            <p>
              Kami adalah siswa SMK TI Pelita Nusantara kelas XII yang
              bersemangat untuk belajar dan berinovasi di bidang teknologi
              informasi.
            </p>
          </div>
        </section>

        <section class="team-section">
          <div class="container">
            <h2>Tim Kami</h2>
            <div class="members">
              <div class="member">
                <img src={"/image/Fasterino.jpg"} alt="Foto Rino" />
                <h3>Fasterino Rafael</h3>
              </div>
              <div class="member">
                <img src={"/image/Davito.jpg"} alt="Foto Davito" />
                <h3>Davito Ezra Pranata</h3>
              </div>
            </div>
            <button onClick={() => (location = "/")}>Home</button>
          </div>
        </section>

        <footer class="footer-section">
          <p>&copy; 2025 Kurang Titik Koma. Semua hak dilindungi.</p>
          <div class="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <i
                class="fa-brands fa-instagram"
                style={{ color: "white", fontSize: "24px" }}
              ></i>
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              aria-label="WhatsApp"
            >
              <i
                class="fa-brands fa-whatsapp"
                style={{ color: "white", fontSize: "24px" }}
              ></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
