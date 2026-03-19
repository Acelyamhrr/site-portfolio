/* ══════════════════════════════════════════
   AÇELYA — script.js
   ══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── DONNÉES PREVIEW ─────────────────────────────────────────────────────
     Pour ajouter un fichier :
     1. Crée un .file-item avec data-file="mon-id" dans le HTML
     2. Ajoute une entrée ici avec le même id
  ─────────────────────────────────────────────────────────────────────────── */
  const fileData = {
    'projet-audit': {
      title: 'Audit Royal',
      meta: '16 semaines · 4 développeurs · Jeu sérieux',
      description: 'Simulation d\'audit en contexte universitaire. Le joueur incarne un auditeur et prend des décisions stratégiques sur la gestion d\'une entreprise fictive.',
      tags: ['jeu', 'unity', 'C#', 'dev'],
      url: '#',
      urlLabel: '🐙 GitHub',
    },
    'add-hint': {
      title: 'Ajouter un projet',
      meta: 'Template',
      description: 'Dans le HTML, duplique un bloc .file-item. Dans script.js, duplique une entrée dans fileData{}. Change le data-file et les données.',
      tags: [],
    },
    'skill-html':   { title: 'HTML / CSS',       meta: 'Web', description: 'Structure et mise en forme de pages web.', tags: ['web'] },
    'skill-js':     { title: 'JavaScript',        meta: 'Web', description: 'Interactivité, DOM, logique front-end.', tags: ['web'] },
    'skill-php':    { title: 'PHP',               meta: 'Web', description: 'Développement back-end et traitement serveur.', tags: ['web'] },
    'skill-laravel':{ title: 'Laravel',           meta: 'Web · Framework PHP', description: 'Framework MVC PHP pour applications web structurées.', tags: ['web'] },
    'skill-csharp': { title: 'C#',                meta: 'Application', description: 'Développement d\'applications .NET et jeux Unity.', tags: ['dev'] },
    'skill-java':   { title: 'Java',              meta: 'Application', description: 'Programmation orientée objet et applications desktop.', tags: ['dev'] },
    'skill-python': { title: 'Python',            meta: 'Application', description: 'Scripts, automatisation, traitement de données.', tags: ['dev'] },
    'skill-dotnet': { title: '.NET',              meta: 'Application', description: 'Framework Microsoft pour applications multiplateformes.', tags: ['dev'] },
    'skill-unity':  { title: 'Unity',             meta: 'Game Dev', description: 'Moteur de jeu 2D/3D. Utilisé pour le projet Audit Royal.', tags: ['unity', 'jeu'] },
    'skill-c':      { title: 'C',                 meta: 'Système', description: 'Programmation bas niveau, gestion mémoire.', tags: ['dev'] },
    'skill-asm':    { title: 'Assembleur',        meta: 'Système', description: 'Programmation très bas niveau, architecture processeur.', tags: ['dev'] },
    'skill-sql':    { title: 'SQL',               meta: 'Base de données', description: 'Création, manipulation et interrogation de bases relationnelles.', tags: ['dev'] },
    'skill-git':    { title: 'Git / GitHub',      meta: 'Outils', description: 'Versioning, branches, collaboration en équipe.', tags: ['dev'] },
    'skill-wf':     { title: 'Windows Forms',     meta: 'Outils', description: 'Création d\'interfaces graphiques desktop sous Windows.', tags: ['dev'] },
    'skill-office': { title: 'Bureautique',       meta: 'Outils', description: 'Word, Excel, PowerPoint — usage professionnel.', tags: [] },
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

  /* ─── FILTRE PAR TAG ──────────────────────────────────────────────────── */
  function filterByTag(tag) {
    // Supprimer vue tag existante
    const old = document.getElementById('view-tag-results');
    if (old) old.remove();

    document.querySelectorAll('.view-container').forEach(v => v.style.display = 'none');

    // Construire la vue filtrée
    const tagView = document.createElement('div');
    tagView.className = 'view-container';
    tagView.id = 'view-tag-results';

    // Chercher TOUS les éléments avec ce tag (dans tous les dossiers)
    const allItems = document.querySelectorAll('[data-file][data-tags], [data-id][data-tags]');
    const matches = [];
    allItems.forEach(item => {
      const tags = (item.getAttribute('data-tags') || '').split(',').map(t => t.trim());
      if (tags.includes(tag)) matches.push(item);
    });

    if (matches.length > 0) {
      const grid = document.createElement('div');
      grid.className = 'files-grid';
      matches.forEach(item => {
        const fileId = item.getAttribute('data-file');
        if (!fileId || fileId === 'add-hint') return;
        const clone = item.cloneNode(true);
        clone.classList.remove('active');
        clone.addEventListener('click', () => showPreview(fileId));
        grid.appendChild(clone);
      });
      tagView.appendChild(grid);
    } else {
      tagView.innerHTML = '<p style="color:#666;text-align:center;padding:2rem;font-style:italic">Aucun fichier avec ce tag</p>';
    }

    finderMain.appendChild(tagView);
    tagView.style.display = 'block';

    folderNameEl.textContent = `Tag: ${tag}`;
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`.sidebar-link[data-tag="${tag}"]`)?.classList.add('active');

    if (!isNavHistory) {
      const entry = `tag:${tag}`;
      navHistory = navHistory.slice(0, historyIndex + 1);
      navHistory.push(entry);
      historyIndex = navHistory.length - 1;
    }
    updateNavBtns();
    document.querySelectorAll('.file-item, .file-row').forEach(i => i.classList.remove('active'));
  }



  /* ─── BOUTONS NAV ─────────────────────────────────────────────────────── */
  function updateNavBtns() {
    backBtn.classList.toggle('disabled', historyIndex <= 0);
    forwardBtn.classList.toggle('disabled', historyIndex >= navHistory.length - 1);
  }

  function applyHistoryEntry(entry) {
    isNavHistory = true;
    if (entry.startsWith('tag:')) filterByTag(entry.replace('tag:', ''));
    else navigateTo(entry);
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
  document.querySelectorAll('.file-item[data-file]').forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll('.file-item, .file-row').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  document.querySelectorAll('.file-row[data-file]').forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll('.file-item, .file-row').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
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

  // Sidebar — tags
  document.querySelectorAll('.sidebar-link[data-tag]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      filterByTag(link.dataset.tag);
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

  /* ─── INIT ────────────────────────────────────────────────────────────── */
  navigateTo('root');

}); // DOMContentLoaded