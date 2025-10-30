import "./about.css"

export default function About() {
    return (
        <>
        <div className="container-about">

        <div className="about-header">
    <h1>Tentang Kami</h1>
   
  </div>

  <section class="about">
    <div class="container">
      <h2>Halo</h2>
      <p>
        Kita adalah Siswa SMK TI PELITA NUSANTARA yang masih kelas XII
      </p>
    </div>
  </section>

  <section class="team">
    <div class="container">
      <h2>Tim Kami</h2>
      <div class="members">
        <div class="member">
          <img src="https://via.placeholder.com/200" alt="Foto Rino" />
          <h3>Fasterino Rafael</h3>
        </div>
        <div class="member">
          <img src="Davito.jpg" alt="Foto Davito" />
          <h3>Davito Ezra Pranata</h3>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Kurang Titik Koma. Semua hak dilindungi.</p>
    <div class="social-links">
      <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
        <img src="intsagram.png" alt="Instagram" />
      </a>
      <a href={"https://wa.me/6281234567890"} target="_blank" aria-label="WhatsApp">
        <img src="whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  </footer>
        </div>
        </>
    )
}