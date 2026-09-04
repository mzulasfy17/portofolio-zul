import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  id: {
    // Navbar
    nav: {
      home: "BERANDA",
      homeDesc: "Halaman Utama",
      experience: "PENGALAMAN",
      experienceDesc: "Pendidikan & Pengalaman",
      skills: "KEAHLIAN",
      skillsDesc: "Keahlian & Teknologi",
      projects: "PROYEK",
      projectsDesc: "Portofolio Proyek",
      contact: "KONTAK",
      contactDesc: "Hubungi Saya",
    },

    // Home
    home: {
      walking: "BERJALAN...",
      welcome: "SELAMAT DATANG DI",
      portfolio: "PORTOFOLIO SAYA!",
      typewriter: [
        "Teknik Informatika",
        "Pengembang Web & Mobile",
        "Antusias UI/UX & Teknologi",
        "Eksplorer AI & NLP",
      ],
      quickSkills: {
        uiux: "Desain UI/UX",
        mobile: "Pengembangan Mobile",
        frontend: "Pengembangan Front End",
      },
      downloadCv: "UNDUH CV",
      aboutTitle: "TENTANG SAYA",
      aboutWalking: "BERJALAN_MASUK...",
      aboutP1_1: "Hi! Saya ",
      aboutP1_2: ", Saya merupakan lulusan Teknik Informatika yang memiliki ketertarikan pada pengembangan aplikasi, khususnya Front-End Development dan Mobile Development. Saya senang mengubah ide menjadi aplikasi yang fungsional, responsif, dan mudah digunakan.",
      aboutP2: "Saya memiliki pengalaman menggunakan berbagai teknologi seperti HTML, CSS, JavaScript, React, Vite, Kotlin, Java, dan Android Studio. Selain pengembangan aplikasi, saya juga memiliki ketertarikan pada UI/UX Design dan terbiasa menggunakan Figma untuk membuat desain antarmuka serta prototype.",
      aboutP3: "Melalui berbagai proyek akademik, proyek pribadi, dan pengalaman praktik, saya terus mengembangkan kemampuan teknis, problem solving, serta kemampuan untuk mempelajari teknologi baru. Saya terbuka terhadap kesempatan untuk belajar, berkolaborasi, dan menciptakan solusi digital yang bermanfaat.",
      badges: {
        fullstack: "FULLSTACK & MOBILE",
        cleanCode: "KODE BERSIH",
        ainlp: "AI & NLP",
      },
      expPreview: {
        title: "PENGALAMAN",
        viewAll: "LIHAT SEMUA",
        role: "Intern — Dana & Digital Banking",
        desc: "Melaksanakan User Acceptance Testing (UAT) pada aplikasi mobile banking dan ATM, menginput data pada CMS (Cash Management System), serta melakukan pendataan penerima zakat.",
      },
      skillsPreview: {
        title: "KEAHLIAN SAYA",
        viewAll: "LIHAT SEMUA",
        technicalLabel: "KEAHLIAN TEKNIS",
        footer: "Selalu belajar, selalu berkembang.",
      },
      status: {
        title: "STATUS.EXE",
        locationLabel: "LOKASI",
        locationVal: "Pekanbaru, Indonesia",
        eduLabel: "PENDIDIKAN",
        eduVal: "S1 Teknik Informatika",
        statusLabel: "STATUS",
        statusVal: "Terbuka untuk Kesempatan",
      },
      projectsPreview: {
        title: "PROYEK SAYA",
        viewAll: "LIHAT SEMUA",
        featuredLabel: "★ PROYEK UNGGULAN",
        detailsBtn: "DETAIL",
        linguaDesc: "Aplikasi mobile untuk pembelajaran bahasa dengan fitur Text-to-Speech interaktif.",
      },
      contactCta: {
        badge: "QUEST_TERMINAL // TERBUKA UNTUK KOLABORASI",
        heading: "PUNYA PROYEK YANG INGIN DIGARAP?",
        subheading: "Mari ubah visi Anda menjadi produk digital luar biasa dengan kode bersih & UI modern.",
        fastResponse: "⚡ RESPON CEPAT",
        fullstackMobile: "✦ FRONT-END & MOBILE",
        cleanUi: "☻ UI/UX BERSIH",
        letsTalk: "MARI BICARA SEKARANG",
        sendEmail: "KIRIM EMAIL",
      },
    },

    // Experience
    experiencePage: {
      levelTitle: "TINGKAT PENGALAMAN",
      categoriesTitle: "CATEGORIES.EXE",
      all: "Semua Pengalaman",
      education: "Pendidikan",
      internship: "Magang",
      organization: "Organisasi",
      note: "Setiap langkah perjalanan saya membentuk diri saya hari ini dan membangun jalan saya untuk masa depan.",
      headerTitle: "PERJALANAN SAYA",
      headerSub: "Sebuah perjalanan belajar, berkarya, dan berkembang.",
      items: [
        {
          title: "TEKNIK INFORMATIKA",
          type: "EDUCATION",
          typeClass: "education",
          company: "S1 Teknik Informatika",
          date: "Jul 2022 – Jul 2026",
          description: "Mempelajari algoritma, struktur data, basis data, rekayasa perangkat lunak, jaringan komputer, dan kecerdasan buatan. Aktif dalam berbagai praktikum dan proyek pengembangan aplikasi.",
          year: "2022 – 2026",
          place: "UIN Sultan Syarif Kasim Riau",
          location: "Pekanbaru, Indonesia",
        },
        {
          title: "Intern — Dana & Digital Banking",
          type: "INTERNSHIP",
          typeClass: "internship",
          company: "PT. Bank Riau Kepri Syariah (Perseroda)",
          date: "Feb 2025 – April 2025",
          description: [
            "Melaksanakan User Acceptance Testing (UAT) pada aplikasi baru untuk memastikan fitur dan fungsionalitas berjalan sesuai kebutuhan bisnis.",
            "Melakukan User Acceptance Testing (UAT) terhadap pembaruan sistem ATM guna mengidentifikasi potensi kendala sebelum implementasi.",
            "Mengelola dan melakukan input data pada Cash Management System (CMS) Bank Riau Kepri Syariah dengan memperhatikan akurasi dan kelengkapan data.",
            "Berkolaborasi dengan tim Dana dan Digital Banking dalam mendukung operasional serta implementasi layanan digital.",
          ],
          year: "2025 – 2025",
          place: "PT. Bank Riau Kepri Syariah (Perseroda)",
          location: "Pekanbaru, Indonesia",
        },
        {
          title: "ANGGOTA Divisi Forensik Himatif",
          type: "ORGANIZATION",
          typeClass: "organization",
          company: "Himpunan Mahasiswa Teknik Informatika",
          date: "2024 – 2024",
          description: [
            "Menjadi penghubung antara mahasiswa dan pengurus dalam menyampaikan aspirasi serta masukan.",
            "Berpartisipasi dalam perencanaan dan pelaksanaan program kerja organisasi.",
          ],
          year: "2024 – 2024",
          place: "Himatif",
          location: "UIN Sultan Syarif Kasim Riau",
        },
        {
          title: "Komisi III – Aspirasi dan Advokasi ",
          type: "ORGANIZATION",
          typeClass: "organization",
          company: "Senat Mahasiswa Fakultas Sains dan Teknologi (SEMA FST) ",
          date: "2024 – 2025",
          description: [
            "Menampung dan menyalurkan aspirasi mahasiswa di lingkungan Fakultas Sains dan Teknologi.",
            "Berpartisipasi dalam kegiatan advokasi untuk mendukung kepentingan dan kesejahteraan mahasiswa.",
          ],
          year: "2024 – 2025",
          place: "SEMA FST",
          location: "UIN Sultan Syarif Kasim Riau",
        },
      ],
    },

    // Skills Page
    skillsPage: {
      title: "KEAHLIAN SAYA",
      subtitle: "Teknologi, pola pikir, dan keterampilan yang saya gunakan untuk membangun solusi hebat.",
      statusLocation: "Pekanbaru, Indonesia",
      statusEdu: "S1 Teknik Informatika",
      statusVal: "Terbuka untuk Kesempatan",
      techTitle: "KEAHLIAN TEKNIS",
      personalTitle: "KEAHLIAN PERSONAL",
      certTitle: "SERTIFIKAT PELATIHAN",
      viewCert: "LIHAT SERTIFIKAT",
      personalList: [
        {
          title: "PROBLEM SOLVING",
          desc: "Mampu menganalisis masalah dan mencari solusi yang efektif.",
        },
        {
          title: "COMMUNICATION",
          desc: "Mampu berkomunikasi dengan baik dalam tim.",
        },
        {
          title: "TIME MANAGEMENT",
          desc: "Mampu mengatur prioritas pekerjaan.",
        },
        {
          title: "ADAPTABILITY",
          desc: "Mampu beradaptasi dengan teknologi baru.",
        },
        {
          title: "TEAMWORK",
          desc: "Mampu bekerja sama dalam tim untuk mencapai hasil terbaik.",
        },
      ],
      certs: [
        { title: "Legacy JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2025", link: "https://www.freecodecamp.org/certification/m_zulasfi/javascript-algorithms-and-data-structures-v8" },
        { title: "Legacy Responsive Web Design", issuer: "freeCodeCamp", year: "2025", link: "https://www.freecodecamp.org/certification/m_zulasfi/responsive-web-design" },
        { title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding Indonesia", year: "2026", link: "https://www.dicoding.com/certificates/KEXLMELLRZG2" },
        { title: "Belajar Membuat Front-End Web untuk Pemula", issuer: "Dicoding Indonesia", year: "2026", link: "https://www.dicoding.com/certificates/07Z6QKQWRZQR" },
        { title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding Indonesia", year: "2025", link: "https://www.dicoding.com/certificates/MRZMV5L8LZYQ" },
        { title: "Frontend - Project Portfolio", issuer: "MySkill", year: "2026", link: "https://storage.googleapis.com/myskill-v2-certificates/topic-XUbCkJeUsxh532l1vNjz/v93RKRrU37hx9kZKdyLk5tQMR782-ICOYD7GaiXnh3JOP3ZsR.pdf" },
        { title: "UI-UX Research and Design", issuer: "MySkill", year: "2026", link: "https://storage.googleapis.com/myskill-v2-certificates/learning-path-8PS1hA5AIORGZbVSyadR/v93RKRrU37hx9kZKdyLk5tQMR782-x7uYMrARDOu48TR27CE8.pdf" },
        { title: "Short Class UI/UX Research Design", issuer: "KarirNex", year: "2026", link: "https://karirnex.com/c/3B98s3a" },
      ],
    },

    // Projects Page
    projectsPage: {
      profileRole: "Informatics Engineer",
      profileDesc: "Membangun solusi digital dengan kode bersih dan pengalaman pengguna yang luar biasa.",
      statusVal: "Terbuka untuk Kesempatan",
      filters: {
        all: "Semua Proyek",
        mobile: "Mobile Dev",
        web: "Web Dev",
        uiux: "UI/UX Design",
      },
      quote: "Setiap project adalah langkah saya untuk belajar, berinovasi, dan memberikan solusi nyata.",
      headerTitle: "PROYEK SAYA",
      headerSub: "Beberapa project yang pernah saya kerjakan.",
      detailBtn: "DETAIL",
      techStackLabel: "TEKNOLOGI YANG DIGUNAKAN:",
      closeBtn: "TUTUP",
      projectsList: {
        linguatales: {
          title: "LinguaTales",
          category: "MOBILE DEVELOPMENT",
          description: "Aplikasi mobile Text-to-Speech untuk pembelajaran bahasa dengan fitur terjemahan dan pengucapan.",
          longDescription: "LinguaTales adalah aplikasi mobile Android berfasilitas Text-to-Speech (TTS) interaktif yang membantu pengguna belajar pengucapan bahasa asing, menerjemahkan frasa, serta menyimpan catatan kosakata favorit secara offline maupun online.",
        },
        smartfarm: {
          title: "Smartfarm",
          category: "WEB DEVELOPMENT",
          description: "Sistem informasi pertanian modern untuk monitoring tanaman, cuaca, dan hasil panen berbasis web.",
          longDescription: "Smartfarm adalah sistem platform manajemen pertanian berbasis web yang mengintegrasikan monitoring tanaman, kondisi cuaca, perkiraan panen, dan penjadwalan pemupukan untuk efisiensi produksi pangan.",
        },
        brksyariah: {
          title: "BRK Syariah CMS Mobile",
          category: "UI/UX DESIGN",
          description: "Desain UI/UX aplikasi Cash Management System untuk Bank Riau Kepri Syariah (Mobile).",
          longDescription: "Desain UI/UX antarmuka aplikasi perbankan Cash Management System (CMS Mobile) Bank Riau Kepri Syariah. Mengedepankan alur transaksi yang intuitif, aman, dan visual syariah yang modern.",
        },
        erehabcare: {
          title: "E-Rehabcare RSJ Tampan",
          category: "UI/UX DESIGN",
          description: "Desain UI/UX sistem informasi rehabilitasi medis dan perawatan pasien RSJ Tampan.",
          longDescription: "Desain UI/UX antarmuka sistem informasi E-Rehabcare RSJ Tampan yang memfasilitasi manajemen rehabilitasi pasien, pemantauan rekam medis, serta penjadwalan terapi secara terintegrasi dan ramah pengguna.",
        },
        ontime: {
          title: "Ontime",
          category: "MOBILE DEVELOPMENT",
          description: "Aplikasi pengingat jadwal dan manajemen tugas harian berbasis Android.",
          longDescription: "Ontime adalah aplikasi manajemen waktu dan pengingat tugas harian yang membantu mahasiswa serta profesional mengelola agenda kegiatan secara terorganisir dengan notifikasi pintar.",
        },
      },
    },

    // Contact Page
    contactPage: {
      profileRole: "Informatics Engineer",
      profileDesc: "Membangun solusi digital dengan kode bersih dan pengalaman pengguna yang luar biasa.",
      headerTitle: "KIRIM PESAN",
      headerSub: "Punya pertanyaan atau ingin bekerja sama? Kirim pesan melalui form di bawah ini. 👋",
      nameLabel: "NAMA LENGKAP *",
      namePlaceholder: "Masukkan nama lengkap kamu",
      emailLabel: "ALAMAT EMAIL *",
      emailPlaceholder: "nama@gmail.com",
      subjectLabel: "SUBJEK PESAN",
      subjectPlaceholder: "Topik atau subjek pesan",
      messageLabel: "ISI PESAN *",
      messagePlaceholder: "Tuliskan pesan kamu di sini...",
      sendBtn: "KIRIM PESAN",
      sendingBtn: "MENGIRIM PESAN...",
      sentBtn: "PESAN TERKIRIM!",
      successAlert: "✨ Terima kasih! Pesan kamu berhasil terkirim.",
      mailboxText: "Saya sangat senang mendengar dari Anda! Saya akan berusaha merespon secepat mungkin. ✨",
      alertFillFields: "Mohon lengkapi nama, email, dan pesan kamu!",
    },

    // Footer
    footer: {
      role: "FRONT-END & MOBILE DEVELOPER",
      rights: "© 2026 MUHAMMAD ZUL ASFI. HAK CIPTA DILINDUNGI.",
      systemStatus: "STATUS SISTEM",
      online: "ONLINE",
    },

    // Panda AI Assistant
    panda: {
      voiceTitle: "PILIH SUARA PANDA 🐼",
      selectLangLabel: "Suara Bahasa Indonesia:",
      defaultVoice: "🇮🇩 Bahasa Indonesia (Suara Bawaan)",
      openBtnTitle: "Buka Panda AI Assistant 🐼",
      dragTitle: "Geser posisi",
      settingsTitle: "Pengaturan Suara",
      stop: "Berhenti",
      play: "Putar suara",
      close: "Kecilkan Panda AI",
      scripts: {
        "/": "Hai, aku Panda AI, asisten virtual di portofolio Muhammad Zul Asfi. Selamat datang! Di halaman utama ini kamu bisa melihat sekilas tentang Zul, seorang Lulusan Teknik Informatika yang antusias dalam dunia teknologi. Jangan lupa untuk menjelajahi halaman lainnya ya!",
        "/experience": "Kamu sedang berada di halaman Experience. Di sini kamu bisa melihat perjalanan Zul, mulai dari pendidikan di Teknik Informatika, pengalaman magang di Bank Riau Kepri Syariah, hingga keaktifan organisasi.",
        "/skills": "Ini adalah halaman Skills. Di sini ditampilkan berbagai keahlian teknis yang dimiliki Zul, mulai dari pemrograman, desain UI UX, hingga tools yang sering digunakan.",
        "/projects": "Selamat datang di halaman Projects! Di sini kamu bisa melihat berbagai proyek karya Zul. Mulai dari aplikasi Mobile, sistem manajemen, hingga proyek pribadi. Klik masing-masing project untuk melihat detail selengkapnya.",
        "/contact": "Kamu sedang berada di halaman Contact. Jika kamu ingin berkonsultasi atau bekerja sama dengan Zul, kamu bisa langsung mengirimkan pesan melalui formulir kontak atau media sosial yang tersedia.",
      },
    },
  },

  en: {
    // Navbar
    nav: {
      home: "HOME",
      homeDesc: "Main Page",
      experience: "EXPERIENCE",
      experienceDesc: "Education & Experience",
      skills: "SKILLS",
      skillsDesc: "Skills & Technologies",
      projects: "PROJECTS",
      projectsDesc: "Project Portfolio",
      contact: "CONTACT",
      contactDesc: "Get in Touch",
    },

    // Home
    home: {
      walking: "WALKING...",
      welcome: "WELCOME TO MY",
      portfolio: "PORTFOLIO!",
      typewriter: [
        "Informatics Engineering",
        "Front End & Mobile Dev",
        "UI/UX & Tech Enthusiast",
        "AI & NLP Explorer",
      ],
      quickSkills: {
        uiux: "UI/UX Design",
        mobile: "Mobile Development",
        frontend: "Front End Development",
      },
      downloadCv: "DOWNLOAD CV",
      aboutTitle: "ABOUT ME",
      aboutWalking: "WALKING_IN...",
      aboutP1_1: "Hi! I’m ",
      aboutP1_2: ", an Informatics Engineering graduate with a strong interest in application development, particularly Front-End Development and Mobile Development. I enjoy turning ideas into functional, responsive, and user-friendly applications.",
      aboutP2: "I have experience working with various technologies such as HTML, CSS, JavaScript, React, Vite, Kotlin, Java, and Android Studio. In addition to application development, I am also interested in UI/UX Design and proficient in using Figma to create user interface designs and prototypes.",
      aboutP3: "Through various academic projects, personal projects, and practical experiences, I continuously refine my technical skills, problem-solving abilities, and capacity to learn new technologies. I am open to opportunities to learn, collaborate, and create impactful digital solutions.",
      badges: {
        fullstack: "FULLSTACK & MOBILE",
        cleanCode: "CLEAN CODE",
        ainlp: "AI & NLP",
      },
      expPreview: {
        title: "EXPERIENCE",
        viewAll: "VIEW ALL",
        role: "Intern — Funding & Digital Banking",
        desc: "Executed User Acceptance Testing (UAT) on mobile banking apps and ATMs, inputted data into CMS (Cash Management System), and logged zakat recipient records.",
      },
      skillsPreview: {
        title: "MY SKILLS",
        viewAll: "VIEW ALL",
        technicalLabel: "TECHNICAL SKILLS",
        footer: "Always learning, always growing.",
      },
      status: {
        title: "STATUS.EXE",
        locationLabel: "LOCATION",
        locationVal: "Pekanbaru, Indonesia",
        eduLabel: "EDUCATION",
        eduVal: "Bachelor of Informatics Engineering",
        statusLabel: "STATUS",
        statusVal: "Open for Opportunities",
      },
      projectsPreview: {
        title: "PROJECTS",
        viewAll: "VIEW ALL",
        featuredLabel: "★ FEATURED PROJECT",
        detailsBtn: "DETAILS",
        linguaDesc: "A mobile application for language learning with interactive text-to-speech features.",
      },
      contactCta: {
        badge: "QUEST_TERMINAL // OPEN FOR COLLABORATION",
        heading: "HAVE A PROJECT IN MIND?",
        subheading: "Let's turn your vision into a stunning digital product with clean code & modern UI.",
        fastResponse: "⚡ FAST RESPONSE",
        fullstackMobile: "✦ Front-End & MOBILE Development",
        cleanUi: "☻ CLEAN UI/UX",
        letsTalk: "LET'S TALK NOW",
        sendEmail: "SEND EMAIL",
      },
    },

    // Experience
    experiencePage: {
      levelTitle: "EXPERIENCE LEVEL",
      categoriesTitle: "CATEGORIES.EXE",
      all: "All Experience",
      education: "Education",
      internship: "Internship",
      organization: "Organization",
      note: "Every step of my journey shapes who I am today and builds my path for tomorrow.",
      headerTitle: "MY JOURNEY",
      headerSub: "A journey of learning, building, and growing.",
      items: [
        {
          title: "INFORMATICS ENGINEERING",
          type: "EDUCATION",
          typeClass: "education",
          company: "Bachelor of Informatics Engineering",
          date: "Jul 2022 – Jul 2026",
          description: "Studied algorithms, data structures, databases, software engineering, computer networks, and artificial intelligence. Active in practical labs and application development projects.",
          year: "2022 – 2026",
          place: "UIN Sultan Syarif Kasim Riau",
          location: "Pekanbaru, Indonesia",
        },
        {
          title: "Intern — Funding & Digital Banking",
          type: "INTERNSHIP",
          typeClass: "internship",
          company: "PT. Bank Riau Kepri Syariah (Perseroda)",
          date: "Feb 2025 – April 2025",
          description: [
            "Executed User Acceptance Testing (UAT) on new applications to ensure features and functionality aligned with business requirements.",
            "Conducted UAT on ATM system updates to identify potential issues before implementation.",
            "Managed and performed data entry into the Bank Riau Kepri Syariah Cash Management System (CMS) with attention to accuracy and completeness.",
            "Collaborated with the Funding and Digital Banking team to support operations and the implementation of digital services.",
          ],
          year: "2025 – 2025",
          place: "PT. Bank Riau Kepri Syariah (Perseroda)",
          location: "Pekanbaru, Indonesia",
        },
        {
          title: "MEMBER OF Forensic Division Himatif",
          type: "ORGANIZATION",
          typeClass: "organization",
          company: "Informatics Engineering Student Association",
          date: "2024 – 2024",
          description: [
            "Acted as a liaison between students and organization management to convey aspirations and feedback.",
            "Participated in the planning and execution of organization work programs.",
          ],
          year: "2024 – 2024",
          place: "Himatif",
          location: "UIN Sultan Syarif Kasim Riau",
        },
        {
          title: "Commission III – Aspirations and Advocacy",
          type: "ORGANIZATION",
          typeClass: "organization",
          company: "Student Senate of the Faculty of Science and Technology (SEMA FST)",
          date: "2024 – 2025",
          description: [
            "Gathered and voiced student aspirations within the Faculty of Science and Technology.",
            "Participated in advocacy activities to support student interests and welfare.",
          ],
          year: "2024 – 2025",
          place: "SEMA FST",
          location: "UIN Sultan Syarif Kasim Riau",
        },
      ],
    },

    // Skills Page
    skillsPage: {
      title: "MY SKILLS",
      subtitle: "Technologies, mindset, and skills I use to build great solutions.",
      statusLocation: "Pekanbaru, Indonesia",
      statusEdu: "Bachelor of Informatics Engineering",
      statusVal: "Open for Opportunities",
      techTitle: "TECHNICAL SKILLS",
      personalTitle: "PERSONAL SKILLS",
      certTitle: "TRAINING CERTIFICATES",
      viewCert: "VIEW CERTIFICATE",
      personalList: [
        {
          title: "PROBLEM SOLVING",
          desc: "Able to analyze problems and find effective solutions.",
        },
        {
          title: "COMMUNICATION",
          desc: "Able to communicate effectively within a team.",
        },
        {
          title: "TIME MANAGEMENT",
          desc: "Able to manage task priorities effectively.",
        },
        {
          title: "ADAPTABILITY",
          desc: "Able to adapt quickly to new technologies.",
        },
        {
          title: "TEAMWORK",
          desc: "Able to collaborate in teams to achieve optimal results.",
        },
      ],
      certs: [
        { title: "Legacy JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2025", link: "https://www.freecodecamp.org/certification/m_zulasfi/javascript-algorithms-and-data-structures-v8" },
        { title: "Legacy Responsive Web Design", issuer: "freeCodeCamp", year: "2025", link: "https://www.freecodecamp.org/certification/m_zulasfi/responsive-web-design" },
        { title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding Indonesia", year: "2026", link: "https://www.dicoding.com/certificates/KEXLMELLRZG2" },
        { title: "Belajar Membuat Front-End Web untuk Pemula", issuer: "Dicoding Indonesia", year: "2026", link: "https://www.dicoding.com/certificates/07Z6QKQWRZQR" },
        { title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding Indonesia", year: "2025", link: "https://www.dicoding.com/certificates/MRZMV5L8LZYQ" },
        { title: "Frontend - Project Portfolio", issuer: "MySkill", year: "2026", link: "https://storage.googleapis.com/myskill-v2-certificates/topic-XUbCkJeUsxh532l1vNjz/v93RKRrU37hx9kZKdyLk5tQMR782-ICOYD7GaiXnh3JOP3ZsR.pdf" },
        { title: "UI-UX Research and Design", issuer: "MySkill", year: "2026", link: "https://storage.googleapis.com/myskill-v2-certificates/learning-path-8PS1hA5AIORGZbVSyadR/v93RKRrU37hx9kZKdyLk5tQMR782-x7uYMrARDOu48TR27CE8.pdf" },
        { title: "Short Class UI/UX Research Design", issuer: "KarirNex", year: "2026", link: "https://karirnex.com/c/3B98s3a" },
      ],
    },

    // Projects Page
    projectsPage: {
      profileRole: "Informatics Engineer",
      profileDesc: "Building digital solutions with clean code and great user experience.",
      statusVal: "Open for Opportunities",
      filters: {
        all: "All Projects",
        mobile: "Mobile Dev",
        web: "Web Dev",
        uiux: "UI/UX Design",
      },
      quote: "Every project is a step for me to learn, innovate, and deliver real solutions.",
      headerTitle: "MY PROJECTS",
      headerSub: "A showcase of some projects I've worked on.",
      detailBtn: "DETAILS",
      techStackLabel: "TECHNOLOGY STACK:",
      closeBtn: "CLOSE",
      projectsList: {
        linguatales: {
          title: "LinguaTales",
          category: "MOBILE DEVELOPMENT",
          description: "A mobile Text-to-Speech application for language learning with translation and pronunciation features.",
          longDescription: "LinguaTales is an Android mobile app with interactive Text-to-Speech (TTS) capabilities that helps users learn foreign language pronunciation, translate phrases, and save favorite vocabulary notes offline or online.",
        },
        smartfarm: {
          title: "Smartfarm",
          category: "WEB DEVELOPMENT",
          description: "Modern web-based agricultural information system for monitoring crops, weather, and yields.",
          longDescription: "Smartfarm is a web-based agricultural management platform that integrates crop monitoring, weather conditions, harvest forecasting, and fertilization scheduling for efficient food production.",
        },
        brksyariah: {
          title: "BRK Syariah CMS Mobile",
          category: "UI/UX DESIGN",
          description: "UI/UX design for Cash Management System app for Bank Riau Kepri Syariah (Mobile).",
          longDescription: "UI/UX interface design for Bank Riau Kepri Syariah's Cash Management System (CMS Mobile). Highlights intuitive transaction flows, security, and modern Islamic aesthetics.",
        },
        erehabcare: {
          title: "E-Rehabcare RSJ Tampan",
          category: "UI/UX DESIGN",
          description: "UI/UX design for medical rehabilitation and patient care information system at RSJ Tampan.",
          longDescription: "UI/UX interface design for the E-Rehabcare RSJ Tampan information system, facilitating patient rehabilitation management, medical record tracking, and therapy scheduling in an integrated, user-friendly system.",
        },
        ontime: {
          title: "Ontime",
          category: "MOBILE DEVELOPMENT",
          description: "Android schedule reminder and daily task management application.",
          longDescription: "Ontime is a time management and daily reminder app helping students and professionals manage schedules in an organized manner with smart notifications.",
        },
      },
    },

    // Contact Page
    contactPage: {
      profileRole: "Informatics Engineer",
      profileDesc: "Building digital solutions with clean code and great user experience.",
      headerTitle: "SEND ME A MESSAGE",
      headerSub: "Have a question or want to work together? Send a message using the form below. 👋",
      nameLabel: "FULL NAME *",
      namePlaceholder: "Enter your full name",
      emailLabel: "EMAIL ADDRESS *",
      emailPlaceholder: "name@email.com",
      subjectLabel: "MESSAGE SUBJECT",
      subjectPlaceholder: "Topic or subject of message",
      messageLabel: "MESSAGE CONTENT *",
      messagePlaceholder: "Write your message here...",
      sendBtn: "SEND MESSAGE",
      sendingBtn: "SENDING MESSAGE...",
      sentBtn: "MESSAGE SENT!",
      successAlert: "✨ Thank you! Your message has been sent successfully.",
      mailboxText: "I'm excited to hear from you! I'll try my best to respond as soon as possible. ✨",
      alertFillFields: "Please complete your name, email, and message!",
    },

    // Footer
    footer: {
      role: "FRONT-END & MOBILE DEVELOPER",
      rights: "© 2026 MUHAMMAD ZUL ASFI. ALL RIGHTS RESERVED.",
      systemStatus: "SYSTEM STATUS",
      online: "ONLINE",
    },

    // Panda AI Assistant
    panda: {
      voiceTitle: "SELECT PANDA VOICE 🐼",
      selectLangLabel: "English Voice:",
      defaultVoice: "🇬🇧 English (Default Voice)",
      openBtnTitle: "Open Panda AI Assistant 🐼",
      dragTitle: "Drag position",
      settingsTitle: "Voice Settings",
      stop: "Stop",
      play: "Play voice",
      close: "Minimize Panda AI",
      scripts: {
        "/": "Hi, I am Panda AI, the virtual assistant in Muhammad Zul Asfi's portfolio. Welcome! On this main page you can get a glimpse of Zul, an Informatics Engineering student passionate about technology. Don't forget to explore the other pages too!",
        "/experience": "You are currently on the Experience page. Here you can see Zul's journey, starting from education in Informatics Engineering, internship experience at Bank Riau Kepri Syariah, to organizational involvement in the Informatics Student Association.",
        "/skills": "This is the Skills page. Here you can find various technical skills possessed by Zul, ranging from programming, UI/UX design, to frequently used tools. Each skill is also equipped with a proficiency indicator.",
        "/projects": "Welcome to the Projects page! Here you can view various projects created by Zul, including web applications, management systems, and personal projects. Click each project to view full details.",
        "/contact": "You are on the Contact page. If you would like to consult or collaborate with Zul, you can directly send a message via the contact form or social media provided.",
      },
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("app_lang");
    return saved === "en" || saved === "id" ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  };

  const t = (path) => {
    const keys = path.split(".");
    let current = translations[lang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path; // Fallback to key string
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
