import './style.css'

// DATA SKILLS
const skills = [
  { icon: '🌐', name: 'HTML' },
  { icon: '🎨', name: 'CSS' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '💨', name: 'Tailwind CSS' },
  { icon: '⚛️', name: 'React' },
  { icon: '🔧', name: 'Git' },
  { icon: '🎯', name: 'Figma' }
]

// DATA PROJECT
const projects = [
  {
    icon: '🛍️',
    title: 'Website Toko Online',
    category: 'E-Commerce',
    description:
      'Website toko online dengan tampilan produk yang rapi dan mudah digunakan.',
    color: 'from-pink-100 to-rose-200'
  },
  {
    icon: '🏔️',
    title: 'Website Travelling',
    category: 'Travel Website',
    description:
      'Website informasi destinasi wisata dengan desain menarik dan responsif.',
    color: 'from-sky-100 to-blue-200'
  },
  {
    icon: '📊',
    title: 'Dashboard Admin',
    category: 'Web Application',
    description:
      'Dashboard untuk menyajikan data dan informasi dalam bentuk yang mudah dipahami.',
    color: 'from-violet-100 to-indigo-200'
  }
]

// TAMPILAN WEBSITE
document.querySelector('#app').innerHTML = `

  <!-- NAVBAR -->
  <header class="sticky top-0 z-20 border-b border-blue-100 bg-white/95">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

      <a href="#home"
         class="text-xl font-extrabold text-slate-900">
        My<span class="text-blue-600">Portfolio</span>
      </a>

      <div class="hidden gap-6 text-sm font-semibold text-slate-600 md:flex">
        <a href="#home" class="hover:text-blue-600">Home</a>
        <a href="#about" class="hover:text-blue-600">About</a>
        <a href="#skills" class="hover:text-blue-600">Skills</a>
        <a href="#projects" class="hover:text-blue-600">Projects</a>
        <a href="#contact" class="hover:text-blue-600">Contact</a>
      </div>

      <a href="#contact"
         class="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
        Hubungi Saya
      </a>

    </nav>
  </header>

  <!-- PROFIL UTAMA -->
  <section id="home" class="hero-bg">
    <div class="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">

      <div>
        <p class="font-bold uppercase tracking-widest text-blue-600">
          Halo, selamat datang!
        </p>

        <h1 class="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          Saya Adinda
          <span class="text-blue-600">Friti.</span>
        </h1>

        <h2 class="mt-4 text-xl font-semibold text-slate-700">
          Mahasiswa Sistem Informasi
        </h2>

        <p class="mt-5 max-w-lg leading-7 text-slate-600">
          Saya memiliki ketertarikan pada pengembangan website,
          teknologi informasi, dan desain antarmuka.
          Saya senang mempelajari hal baru serta mengembangkan
          kemampuan untuk membuat solusi digital yang bermanfaat.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a href="#projects"
             class="rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
            Lihat Proyek ↓
          </a>

          <a href="#contact"
             class="rounded-full border border-blue-300 bg-white px-6 py-3 font-bold text-blue-700 hover:bg-blue-50">
            Hubungi Saya
          </a>
        </div>

        <div class="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
          <span class="rounded-full bg-white px-4 py-2">✦ Kreatif</span>
          <span class="rounded-full bg-white px-4 py-2">✦ Pembelajar</span>
          <span class="rounded-full bg-white px-4 py-2">✦ Kolaboratif</span>
        </div>
      </div>

      <!-- FOTO / ILUSTRASI PROFIL -->
      <div class="flex justify-center">
        <div class="relative flex h-64 w-64 items-center justify-center rounded-full border-8 border-white bg-gradient-to-br from-blue-200 to-indigo-300 shadow-2xl shadow-blue-200 sm:h-80 sm:w-80">

          <div class="text-center">
            <div class="text-8xl sm:text-9xl">👩🏻‍💻</div>
            <p class="mt-3 font-bold text-blue-900">
              Adinda Friti
            </p>
            <p class="text-sm text-blue-800">
              Future Web Developer
            </p>
          </div>

          <div class="absolute -bottom-3 -left-5 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <p class="text-xs text-slate-500">Fokus saat ini</p>
            <p class="font-bold text-blue-700">
              Web Development
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>

  <!-- TENTANG SAYA -->
  <section id="about" class="mx-auto max-w-6xl px-5 py-16">

    <div class="grid gap-10 md:grid-cols-2">

      <div>
        <p class="font-bold uppercase tracking-widest text-blue-600">
          Kenali saya
        </p>

        <h2 class="mt-2 text-3xl font-extrabold text-slate-900">
          Tentang Saya
        </h2>

        <p class="mt-5 leading-7 text-slate-600">
          Saya adalah mahasiswa Sistem Informasi yang sedang
          mengembangkan pengetahuan di bidang teknologi informasi.
          Saya tertarik mempelajari pembuatan website, pengelolaan
          data, dan desain antarmuka yang mudah digunakan.
          Saya ingin terus meningkatkan kemampuan melalui proses
          belajar dan praktik secara langsung.
        </p>

        <div class="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p class="font-bold text-slate-900">
            Pendidikan
          </p>

          <p class="mt-2 text-slate-700">
            Universitas Pamulang
          </p>

          <p class="text-sm text-slate-500">
            Program Studi Sistem Informasi
          </p>
        </div>
      </div>

      <div class="grid content-center gap-4 sm:grid-cols-2">

        <div class="rounded-2xl border border-slate-100 p-5">
          <span class="text-3xl">💡</span>
          <h3 class="mt-3 font-bold text-slate-900">Kreatif</h3>
          <p class="mt-2 text-sm leading-6 text-slate-500">
            Senang mencari ide dan mencoba pendekatan baru.
          </p>
        </div>

        <div class="rounded-2xl border border-slate-100 p-5">
          <span class="text-3xl">📚</span>
          <h3 class="mt-3 font-bold text-slate-900">Pembelajar</h3>
          <p class="mt-2 text-sm leading-6 text-slate-500">
            Terus belajar mengikuti perkembangan teknologi.
          </p>
        </div>

        <div class="rounded-2xl border border-slate-100 p-5 sm:col-span-2">
          <span class="text-3xl">🎯</span>
          <h3 class="mt-3 font-bold text-slate-900">Tujuan Saya</h3>
          <p class="mt-2 text-sm leading-6 text-slate-500">
            Mengembangkan website yang menarik, responsif,
            informatif, dan mudah digunakan.
          </p>
        </div>

      </div>

    </div>
  </section>

  <!-- KEAHLIAN -->
  <section id="skills" class="section-soft">
    <div class="mx-auto max-w-6xl px-5 py-16">

      <p class="font-bold uppercase tracking-widest text-blue-600">
        Kemampuan
      </p>

      <h2 class="mt-2 text-3xl font-extrabold text-slate-900">
        Skills
      </h2>

      <p class="mt-3 text-slate-600">
        Teknologi dan tools yang saya pelajari.
      </p>

      <div id="skill-list"
           class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
      </div>

    </div>
  </section>

  <!-- PROYEK -->
  <section id="projects" class="mx-auto max-w-6xl px-5 py-16">

    <p class="font-bold uppercase tracking-widest text-blue-600">
      Karya pilihan
    </p>

    <h2 class="mt-2 text-3xl font-extrabold text-slate-900">
      Proyek Saya
    </h2>

    <p class="mt-3 text-slate-600">
      Contoh proyek website untuk pengembangan kemampuan.
    </p>

    <div id="project-list"
         class="mt-8 grid gap-6 md:grid-cols-3">
    </div>

  </section>

  <!-- KONTAK -->
  <section id="contact" class="bg-slate-900 text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">

      <div>
        <p class="font-bold uppercase tracking-widest text-blue-300">
          Mari terhubung
        </p>

        <h2 class="mt-2 text-3xl font-extrabold">
          Hubungi Saya
        </h2>

        <p class="mt-4 max-w-md leading-7 text-slate-300">
          Saya terbuka untuk belajar bersama, berdiskusi,
          dan berkolaborasi dalam proyek yang menarik.
        </p>

        <p class="mt-6 text-slate-300">Email:</p>

        <!-- GANTI EMAIL DI BAGIAN INI -->
        <a href="mailto:emailkamu@example.com"
           class="font-semibold text-blue-300 underline underline-offset-4">
          dindaafriti@gmail.com
        </a>

      </div>

      <form id="contact-form"
            class="rounded-3xl border border-white/10 bg-white/5 p-6">

        <label for="name"
               class="mb-2 block text-sm font-semibold">
          Nama
        </label>

        <input id="name"
               required
               class="mb-4 w-full rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-400"
               placeholder="Masukkan nama">

        <label for="email"
               class="mb-2 block text-sm font-semibold">
          Email
        </label>

        <input id="email"
               type="email"
               required
               class="mb-4 w-full rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-400"
               placeholder="nama@email.com">

        <label for="message"
               class="mb-2 block text-sm font-semibold">
          Pesan
        </label>

        <textarea id="message"
                  required
                  rows="4"
                  class="mb-4 w-full rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-400"
                  placeholder="Tulis pesan kamu"></textarea>

        <button type="submit"
                class="w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-500">
          Kirim Pesan
        </button>

        <p id="form-note"
           class="mt-3 text-sm text-blue-200"></p>

      </form>

    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-slate-950 px-5 py-6 text-center text-sm text-slate-400">
    <p>© 2026 Adinda Friti. All rights reserved.</p>
    <p class="mt-2">Dibuat menggunakan Tailwind CSS</p>
  </footer>

`

// MENAMPILKAN SKILLS
document.querySelector('#skill-list').innerHTML =
  skills.map(skill => `
    <div class="skill-card rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm">
      <div class="text-3xl">${skill.icon}</div>
      <p class="mt-3 text-sm font-bold text-slate-700">
        ${skill.name}
      </p>
    </div>
  `).join('')

// MENAMPILKAN PROJECTS
document.querySelector('#project-list').innerHTML =
  projects.map((project, index) => `
    <article class="project-card overflow-hidden rounded-2xl border border-slate-200 bg-white">

      <div class="flex h-44 items-center justify-center bg-gradient-to-br ${project.color}">
        <div class="text-center">
          <div class="text-6xl">${project.icon}</div>
          <p class="mt-3 text-xs font-extrabold uppercase tracking-widest text-slate-600">
            PROJECT 0${index + 1}
          </p>
        </div>
      </div>

      <div class="p-6">
        <p class="text-xs font-bold uppercase tracking-widest text-blue-600">
          ${project.category}
        </p>

        <h3 class="mt-2 text-xl font-extrabold text-slate-900">
          ${project.title}
        </h3>

        <p class="mt-3 leading-6 text-slate-600">
          ${project.description}
        </p>

        <a href="#contact"
           class="mt-5 inline-block font-bold text-blue-600 hover:text-blue-800">
          Hubungi Saya ↗
        </a>
      </div>

    </article>
  `).join('')

// FORM KONTAK DEMO
document.querySelector('#contact-form').addEventListener(
  'submit',
  function (event) {
    event.preventDefault()

    const name = document.querySelector('#name').value.trim()

    document.querySelector('#form-note').textContent =
      `Terima kasih, ${name}! Formulir demo berhasil dicoba.`
  }
)