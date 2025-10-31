import "./contact.css";

export default function Contact() {
  return (
    <>
      <div class="hubungi-page">
        <header class="header-section">
          <h1>Hubungi Kami</h1>
          <p>Kami siap membantu Anda setiap saat</p>
        </header>
        <main class="main-section">
          <div class="container">
            <div class="contact-brow">
              <h2>Informasi Kontak</h2>
              <div class="medsos-brow">
                <i
                  class="fa-brands fa-whatsapp"
                  style={{ color: "black", fontSize: "24px" }}
                ></i>
                <p>+62 812-3456-7890</p>
              </div>
              <div class="medsos-brow">
                <i
                  class="fa-solid fa-envelope"
                  style={{ color: "black", fontSize: "24px" }}
                ></i>
                <p>KurangTitikKoma@gmail.com</p>
              </div>
              <div class="medsos-brow">
                <i
                  class="fa-solid fa-location-dot"
                  style={{ color: "black", fontSize: "24px" }}
                ></i>
                <p>Jl. Pondok Indah</p>
              </div>
              <button onClick={() => (location = "/")}>Home</button>
            </div>
          </div>
        </main>

        <footer class="footer-section">
          <p>&copy; 2025 Kurang Titik Koma. Semua hak dilindungi.</p>
          <div class="social-links">
            <a href="https://www.instagram.com/">
              <i
                class="fa-brands fa-instagram"
                style={{ color: "white", fontSize: "24px" }}
              ></i>
            </a>
            <a href="https://wa.me/6281234567890">
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
