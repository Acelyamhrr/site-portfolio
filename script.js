document.addEventListener('DOMContentLoaded', () => {

  const fileData = {
    'projet-audit': {
      title: 'Audit Royal',
      filename: 'audit_royal.projet',
      meta: '16 semaines · 4 développeurs · Jeu sérieux',
      description: 'Simulation d\'audit en contexte universitaire. Le joueur incarne un auditeur et prend des décisions stratégiques sur la gestion d\'une entreprise fictive.',
      tags: [
        { label: 'unity',  bg: '#f0ece6', color: '#7b4a2a' },
        { label: 'C#',     bg: '#e8f0e4', color: '#2a4a1a' },
        { label: 'jeu',    bg: '#f4e4f0', color: '#4a1a3a' },
      ],
      images: [
        'img/projets/audit-royal-menu.png',
        'img/projets/audit-royal-fin.png',
      ],
      emoji: '🎮', // affiché si pas d'images
      github: 'https://github.com/Acelyamhrr/Audit-Royal', 
      // demo: '#',
    },

    'projet-sim-reseau': {
      title: 'Simulateur réseau',
      filename: 'sim-reseau.projet',
      meta: '2 développeurs · Projet universitaire',
      description: 'Ce projet est un simulateur de réseau local (LAN) développé dans le cadre du cours de réseaux et programmation à l IUT. Il permet de modéliser une topologie réseau complète avec des stations, des switches et leurs interconnexions. Le simulateur implémente le protocole STP (Spanning Tree Protocol) pour éviter les boucles réseau et assure la transmission intelligente de trames Ethernet entre équipements.',
      tags: [
        { label: 'C',  bg: '#f0ece6', color: '#7b4a2a' },
        { label: 'Réseau',     bg: '#e8f0e4', color: '#2a4a1a' },
        { label: 'Bas-niveau',    bg: '#f4e4f0', color: '#4a1a3a' },
      ],
      images: [
        'img/projets/sim-res.png'
      ],
      emoji: '🎮', 
      github: 'https://github.com/Acelyamhrr/simulateur-reseau',
      // demo: '#',
    },

    'projet-calcul-notes': {
      title: 'Calcul notes',
      filename: 'calcul-notes.projet',
      meta: 'Projet perso',
      description: 'Une application web permettant de calculer automatiquement vos moyennes par UE et votre moyenne générale de semestre, avec sauvegarde locale et export PDF.',
      tags: [
        { label: 'HTML', bg: '#e3f2fd', color: '#1565c0' },
        { label: 'CSS', bg: '#fce4ec', color: '#c2185b' },
        { label: 'JavaScript', bg: '#e8f5e9', color: '#2e7d32' },
        { label: 'LocalStorage', bg: '#ede7f6', color: '#512da8' },
        ],
      images: [
        'img/projets/calcul-notes.png',
      ],
      emoji: '📊', // affiché si pas d'images
      github: 'https://github.com/Acelyamhrr/calcul-notes',
      // demo: '#', // décommente si tu as une démo
    },

    'projet-bataille-navale': {
      title: 'Bataille Navale - A31',
      filename: 'bataille-navale.projet',
      meta: 'Projet académique',
      description: 'Jeu de stratégie tour par tour développé en Java avec interface graphique Swing, intégrant une IA, des armes spéciales, des pièges et un mode île. Projet basé sur une architecture MVC stricte et l’utilisation de patterns de conception.',
      tags: [
        { label: 'Java', bg: '#f3e5f5', color: '#6a1b9a' },
        { label: 'Swing', bg: '#e3f2fd', color: '#1565c0' },
        { label: 'MVC', bg: '#e8f5e9', color: '#2e7d32' },
        { label: 'Design Patterns', bg: '#fff3e0', color: '#ef6c00' },
        { label: 'POO', bg: '#ede7f6', color: '#512da8' },
      ],
      images: [
        'img/projets/bataille-navale1.png',
        'img/projets/bataille-navale2.png',
      ],
      emoji: '⚓',
      github: 'https://git.unistra.fr/fouilleul-muharremoglu/a31-bataille-navale',
      // demo: '#', // si tu as une démo
    },



    // ── Skills ──
    'skill-html':    { title: 'HTML / CSS',    meta: 'Web', description: 'Structure et mise en forme de pages web.', tags: [] },
    'skill-js':      { title: 'JavaScript',    meta: 'Web', description: 'Interactivité, DOM, logique front-end.', tags: [] },
    'skill-php':     { title: 'PHP',           meta: 'Web', description: 'Développement back-end.', tags: [] },
    'skill-laravel': { title: 'Laravel',       meta: 'Framework PHP', description: 'MVC PHP pour apps web structurées.', tags: [] },
    'skill-csharp':  { title: 'C#',            meta: 'Application', description: 'Apps .NET et jeux Unity.', tags: [] },
    'skill-java':    { title: 'Java',          meta: 'Application', description: 'POO et apps desktop.', tags: [] },
    'skill-python':  { title: 'Python',        meta: 'Application', description: 'Scripts, automatisation, data.', tags: [] },
    'skill-dotnet':  { title: '.NET',          meta: 'Application', description: 'Framework Microsoft multiplateforme.', tags: [] },
    'skill-unity':   { title: 'Unity',         meta: 'Game Dev', description: 'Moteur 2D/3D. Projet Audit Royal.', tags: [] },
    'skill-c':       { title: 'C',             meta: 'Système', description: 'Programmation bas niveau.', tags: [] },
    'skill-asm':     { title: 'Assembleur',    meta: 'Système', description: 'Architecture processeur.', tags: [] },
    'skill-sql':     { title: 'SQL',           meta: 'Base de données', description: 'Bases relationnelles.', tags: [] },
    'skill-git':     { title: 'Git / GitHub',  meta: 'Outils', description: 'Versioning, collaboration.', tags: [] },
    'skill-wf':      { title: 'Windows Forms', meta: 'Outils', description: 'UI desktop Windows.', tags: [] },
    'skill-office':  { title: 'Bureautique',   meta: 'Outils', description: 'Word, Excel, PowerPoint.', tags: [] },
  };

  /* ─── NOMS DE DOSSIERS ────────────────────────────────────────────────── */
  const folderNames = {
    root:           'TOUT LE CONTENU',
    projets:        'projets',
    'projets-web':  'projets — web',
    skills:         'skills',
    'skills-web':   'skills — web',
    'skills-app':   'skills — application',
    'skills-sys':   'skills — système',
    'skills-db':    'skills — base de données',
    'skills-tools': 'skills — outils',
    about:          'about me',
  };

  /* ─── ÉTAT ────────────────────────────────────────────────────────────── */
  let currentFolder = 'root';
  let navHistory    = ['root'];
  let historyIndex  = 0;
  let isNavHistory  = false;

  /* ─── ÉLÉMENTS DOM ────────────────────────────────────────────────────── */
  const backBtn        = document.getElementById('back-btn');
  const forwardBtn     = document.getElementById('forward-btn');
  const folderNameEl   = document.getElementById('current-folder-name');
  const finderMain     = document.getElementById('finder-main');

  const sidebarToggle  = document.getElementById('sidebar-toggle');
  const sidebar        = document.getElementById('finder-sidebar');
  const viewGridBtn    = document.getElementById('view-grid-btn');
  const viewListBtn    = document.getElementById('view-list-btn');

  /* ─── VUE GRILLE / LISTE ──────────────────────────────────────────────── */
  viewGridBtn.addEventListener('click', () => {
    document.body.classList.remove('view-list');
    viewGridBtn.classList.add('active');
    viewListBtn.classList.remove('active');
  });
  viewListBtn.addEventListener('click', () => {
    document.body.classList.add('view-list');
    viewListBtn.classList.add('active');
    viewGridBtn.classList.remove('active');
  });

  /* ─── NAVIGATION FINDER ───────────────────────────────────────────────── */
  function navigateTo(folder) {
    // Masquer toutes les vues
    document.querySelectorAll('.view-container').forEach(v => v.style.display = 'none');
    const target = document.getElementById('view-' + folder);
    if (target) target.style.display = 'block';

    currentFolder = folder;
    folderNameEl.textContent = folderNames[folder] || folder;

    // Mise à jour sidebar
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.sidebar-link[data-folder="${folder}"]`);
    if (activeLink) activeLink.classList.add('active');

    // Historique
    if (!isNavHistory) {
      navHistory = navHistory.slice(0, historyIndex + 1);
      if (navHistory[historyIndex] !== folder) {
        navHistory.push(folder);
        historyIndex = navHistory.length - 1;
      }
    }
    updateNavBtns();
    // reset sélection
    document.querySelectorAll('.file-item, .file-row').forEach(i => i.classList.remove('active'));
  }




  /* ─── BOUTONS NAV ─────────────────────────────────────────────────────── */
  function updateNavBtns() {
    backBtn.classList.toggle('disabled', historyIndex <= 0);
    forwardBtn.classList.toggle('disabled', historyIndex >= navHistory.length - 1);
  }

  function applyHistoryEntry(entry) {
    isNavHistory = true;
    navigateTo(entry);
    isNavHistory = false;
  }

  backBtn.addEventListener('click', () => {
    if (historyIndex > 0) { historyIndex--; applyHistoryEntry(navHistory[historyIndex]); }
  });
  forwardBtn.addEventListener('click', () => {
    if (historyIndex < navHistory.length - 1) { historyIndex++; applyHistoryEntry(navHistory[historyIndex]); }
  });

  /* ─── ÉVÉNEMENTS CLICS ────────────────────────────────────────────────── */

  // Dossiers
  document.querySelectorAll('.folder-item[data-folder]').forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.folder));
  });

  // Fichiers — sélection visuelle uniquement (plus de preview panel)
  function openModal(fileId) {
    const data = fileData[fileId];
    if (!data || !data.title) return;

    // filename
    document.getElementById('modal-filename').textContent = data.filename || `${fileId}.projet`;

    // images mosaïque
    const imgZone = document.getElementById('modal-images');
    imgZone.innerHTML = '';
    const imgs = (data.images || []).filter(Boolean);
    if (imgs.length > 0) {
      imgZone.className = `app-modal-images layout-${Math.min(imgs.length, 3)}`;
      imgs.slice(0, 3).forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = data.title;
        imgZone.appendChild(img);
      });
    } else {
      imgZone.className = 'app-modal-images layout-1';
      imgZone.innerHTML = `<div class="app-modal-img-placeholder">${data.emoji || '📁'}</div>`;
    }

    // contenu
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-meta').textContent = data.meta || '';
    document.getElementById('modal-desc').textContent = data.description || '';

    // tags
    const tagsEl = document.getElementById('modal-tags');
    tagsEl.innerHTML = (data.tags || []).map(t =>
      `<span style="background:${t.bg};color:${t.color}">${t.label}</span>`
    ).join('');

    // actions
    const actEl = document.getElementById('modal-actions');
    let actHtml = '';
    if (data.github) actHtml += `<a href="${data.github}" target="_blank" rel="noopener noreferrer" class="app-modal-btn-gh">🐙 GitHub</a>`;
    if (data.demo)   actHtml += `<a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="app-modal-btn-demo">▶ Demo</a>`;
    actHtml += `<button class="app-modal-btn-like" id="modal-like-btn" onclick="toggleModalLike()">♡</button>`;
    actEl.innerHTML = actHtml;

    document.getElementById('projet-modal').classList.add('open');
    document.getElementById('projet-modal').dataset.currentFile = fileId;
  }

  function toggleModalLike() {
    const btn = document.getElementById('modal-like-btn');
    btn.classList.toggle('liked');
    btn.textContent = btn.classList.contains('liked') ? '♥' : '♡';
  }

  // Fermeture
  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('projet-modal').classList.remove('open');
  });
  document.getElementById('projet-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.getElementById('projet-modal').classList.remove('open');
  });

  // Clics fichiers
  document.querySelectorAll('.file-item[data-file]').forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll('.file-item, .file-row').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      openModal(item.dataset.file);
    });
  });
  document.querySelectorAll('.file-row[data-file]').forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll('.file-item, .file-row').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      openModal(item.dataset.file);
    });
  });  

  // Sidebar — dossiers
  document.querySelectorAll('.sidebar-link[data-folder]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.dataset.folder);
      if (window.innerWidth <= 900) closeSidebar();
    });
  });


  /* ─── SIDEBAR MOBILE ──────────────────────────────────────────────────── */
  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarToggle.textContent = '☰';
  }
  sidebarToggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    sidebarToggle.textContent = open ? '✕' : '☰';
  });
  document.addEventListener('click', e => {
    if (window.innerWidth <= 900 && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      closeSidebar();
    }
  });

  /* ─── FORMULAIRE CONTACT ──────────────────────────────────────────────── */
  const formEl      = document.getElementById('contact-form-el');
  const formSuccess = document.getElementById('form-success');
  const formError   = document.getElementById('form-error');

  if (formEl) {
    formEl.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = formEl.querySelector('.form-submit');
      btn.textContent = 'Envoi…';
      btn.disabled = true;
      try {
        const res = await fetch(formEl.action, {
          method: 'POST',
          body: new FormData(formEl),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          formSuccess.style.display = 'block';
          formError.style.display = 'none';
          formEl.reset();
          btn.textContent = 'Envoyé ✓';
        } else { throw new Error(); }
      } catch {
        formError.style.display = 'block';
        formSuccess.style.display = 'none';
        btn.textContent = 'Envoyer →';
        btn.disabled = false;
      }
    });
  }

  /* ─── ANIMATIONS SCROLL ───────────────────────────────────────────────── */
  const reveals = document.querySelectorAll('.section-header, .tl-item, .cv-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = entry.target.classList.contains('tl-item')
            ? 'translateX(0)' : 'translateY(0)';
        }, i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
    if (el.classList.contains('tl-item')) {
      el.style.transform = 'translateX(-20px)';
    } else {
      el.style.transform = 'translateY(24px)';
    }
    observer.observe(el);
  });

  /* ─── MODALE PROJET ──────────────────────── */
  function showPreview(fileId) {
    const data = fileData[fileId];
    if (!data || !data.title) return;

    let html = `<div class="modal-header">
      <h3>${data.title}</h3>
      <button class="modal-close" onclick="document.getElementById('projet-modal').classList.remove('open')">✕</button>
    </div>`;
    if (data.meta)        html += `<p class="modal-meta">${data.meta}</p>`;
    if (data.description) html += `<p class="modal-desc">${data.description}</p>`;
    if (data.tags?.length) {
      html += `<div class="modal-tags">` + data.tags.map(t => `<span class="preview-tag-pill">${t}</span>`).join('') + `</div>`;
    }
    if (data.url && data.url !== '#') {
      html += `<a href="${data.url}" target="_blank" rel="noopener noreferrer" class="modal-btn">${data.urlLabel || 'Ouvrir →'}</a>`;
    }

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('projet-modal').classList.add('open');
  }

  /* ─── INIT ────────────────────────────────────────────────────────────── */
  navigateTo('root');

});