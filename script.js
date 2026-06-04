// ── Navigation ──
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const navToggle = document.getElementById('navToggle');
const mainNav   = document.getElementById('mainNav');
const siteHeader = document.getElementById('siteHeader');

function goTo(id) {
  sections.forEach(s => s.classList.remove('active'));
  navLinks.forEach(l => l.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  navLinks.forEach(l => {
    if (l.dataset.section === id) l.classList.add('active');
  });
  mainNav.classList.remove('open');
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    goTo(link.dataset.section);
  });
});

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 10);
});

// ── Tools data ──

const TOOLS = [
  { name: 'VS Code',         icon: 'ph-code',           color: '#007ACC', bg: '#E8F4FD', image: 'Images/Visual.png' },
  { name: 'Visual Studio',   icon: 'ph-app-window',     color: '#5C2D91', bg: '#F0EAF8', image: 'Images/Visual_Studio_Icon_2019.svg.png' },
  { name: 'Android Studio',  icon: 'ph-device-mobile',  color: '#3DDC84', bg: '#E8FAF0', image: 'Images/Android_Studio_icon_(2023).svg.png' },
  { name: 'Cisco',           icon: 'ph-network',        color: '#049FD9', bg: '#E6F6FD', image: 'Images/cisco.png' },
  { name: 'MySQL',           icon: 'ph-database',       color: '#4479A1', bg: '#EEF3FC', image: 'Images/MYSQL.png' },
  { name: 'Laragon',         icon: 'ph-globe',          color: '#FF6D00', bg: '#FFF0E6', image: 'Images/laragon.svg' },
  { name: 'XAMPP',           icon: 'ph-globe',          color: '#000000', bg: '#E6F2FC', image: 'Images/XAMPP_logo.svg.png' },
  { name: 'VirtualBox',      icon: 'ph-hard-drives',    color: '#183A61', bg: '#E8EDF5', image: 'Images/Virtualbox_logo.png' },
  { name: 'Linux',           icon: 'ph-linux-logo',     color: '#FCC624', bg: '#FEFBE6', image: 'Images/Icons8_flat_linux.svg.png' },
  { name: 'Windows Server',  icon: 'ph-windows-logo',   color: '#0078D4', bg: '#E6F2FC', image: 'Images/windows.png' },
];

function renderTools() {
  const grid = document.getElementById('toolsGrid');
  grid.innerHTML = TOOLS.map(t => {
    const bgStyle = t.image ? 'background: transparent;' : `background:${t.bg}; color:${t.color};`;
    
    const mediaContent = t.image 
      ? `<img src="${t.image}" alt="${t.name}" class="tool-img">`
      : `<i class="ph ${t.icon}"></i>`;

    return `
      <div class="tool-card">
        <div class="tool-icon" style="${bgStyle}">
          ${mediaContent}
        </div>
        <span class="tool-name">${t.name}</span>
      </div>
    `;
  }).join('');
}
renderTools();

// Pensum
const PENSUM = [
  {
    num: 1,
    subjects: [
      { code: 'ISC 133', name: 'Las TIC\'s y la Sociedad', prereqs: [] },
      { code: 'ISC 134', name: 'Lab. de las TIC\'s y la Sociedad', prereqs: [] },
    ]
  },
  {
    num: 2,
    subjects: [
      { code: 'ISC 051', name: 'Introducción a la Lógica de Programación', prereqs: ['ISC 133', 'ISC 134'] },
    ]
  },
  {
    num: 3,
    subjects: [
      { code: 'ISC 061', name: 'Teoría General de Sistemas', prereqs: ['ISC 133', 'ISC 134'] },
      { code: 'ISC 075', name: 'Sistemas Operativos I', prereqs: ['ISC 051'] },
      { code: 'ISC 076', name: 'Lab. de Sistemas Operativos I', prereqs: ['ISC 051'] },
      { code: 'ISC 004', name: 'Algoritmos Estructurados', prereqs: ['ISC 051'] },
    ]
  },
  {
    num: 4,
    subjects: [
      { code: 'ISC 010', name: 'Análisis de Sistemas', prereqs: ['ISC 004'] },
      { code: 'ISC 077', name: 'Arquitectura Computacional', prereqs: ['ISC 075', 'ISC 076'] },
      { code: 'ISC 078', name: 'Lab. de Arquitectura Computacional', prereqs: ['ISC 075', 'ISC 076'] },
      { code: 'ISC 079', name: 'Programación I', prereqs: ['ISC 004'] },
      { code: 'ISC 080', name: 'Lab. de Programación I', prereqs: ['ISC 004'] },
    ]
  },
  {
    num: 5,
    subjects: [
      { code: 'ISC 081', name: 'Sistemas Operativos II', prereqs: ['ISC 075', 'ISC 076'] },
      { code: 'ISC 082', name: 'Lab. de Sistemas Operativos II', prereqs: ['ISC 075', 'ISC 076'] },
      { code: 'ISC 083', name: 'Programación II', prereqs: ['ISC 079', 'ISC 080'] },
      { code: 'ISC 084', name: 'Lab. de Programación II', prereqs: ['ISC 079', 'ISC 080'] },
      { code: 'ISC 085', name: 'Diseño de Sistemas', prereqs: ['ISC 010'] },
      { code: 'ISC 086', name: 'Lab. de Diseño de Sistemas', prereqs: ['ISC 010'] },
      { code: 'ISC 087', name: 'Bases de Datos I', prereqs: ['ISC 079', 'ISC 080'] },
      { code: 'ISC 088', name: 'Lab. de Bases de Datos I', prereqs: ['ISC 079', 'ISC 080'] },
      { code: 'ISC 007', name: 'Seminario I', prereqs: ['ISC 051'] },
    ]
  },
  {
    num: 6,
    subjects: [
      { code: 'ISC 019', name: 'Seminario II', prereqs: ['ISC 007'] },
      { code: 'ISC 089', name: 'Estructura de Datos', prereqs: ['ISC 079', 'ISC 080'] },
      { code: 'ISC 090', name: 'Lab. de Estructura de Datos', prereqs: ['ISC 079', 'ISC 080'] },
      { code: 'ISC 091', name: 'Programación III', prereqs: ['ISC 083', 'ISC 084'] },
      { code: 'ISC 092', name: 'Lab. de Programación III', prereqs: ['ISC 083', 'ISC 084'] },
      { code: 'ISC 093', name: 'Fundamentos de Redes', prereqs: ['ISC 075', 'ISC 076'] },
      { code: 'ISC 094', name: 'Lab. de Fundamentos de Redes', prereqs: ['ISC 075', 'ISC 076'] },
      { code: 'ISC 095', name: 'Base de Datos II', prereqs: ['ISC 087', 'ISC 088'] },
      { code: 'ISC 096', name: 'Lab. de Base de Datos II', prereqs: ['ISC 087', 'ISC 088'] },
    ]
  },
  {
    num: 7,
    subjects: [
      { code: 'ISC 099', name: 'Administración de Bases de Datos', prereqs: ['ISC 095', 'ISC 096'] },
      { code: 'ISC 100', name: 'Lab. de Administración de Bases de Datos', prereqs: ['ISC 095', 'ISC 096'] },
      { code: 'ISC 101', name: 'Programación IV', prereqs: ['ISC 091', 'ISC 092'] },
      { code: 'ISC 102', name: 'Lab. de Programación IV', prereqs: ['ISC 091', 'ISC 092'] },
      { code: 'ISC 103', name: 'Telemática I', prereqs: ['ISC 093', 'ISC 094'] },
      { code: 'ISC 104', name: 'Lab. de Telemática I', prereqs: ['ISC 093', 'ISC 094'] },
      { code: 'ISC 023', name: 'Programación Lineal', prereqs: [] },
    ]
  },
  {
    num: 8,
    subjects: [
      { code: 'ISC 026', name: 'Investigación de Operaciones I', prereqs: ['ISC 023'] },
      { code: 'ISC 028', name: 'Telemática II', prereqs: ['ISC 103'] },
      { code: 'ISC 105', name: 'Ingeniería del Software', prereqs: ['ISC 081', 'ISC 082'] },
      { code: 'ISC 106', name: 'Lab. de Ingeniería del Software', prereqs: ['ISC 081', 'ISC 082'] },
      { code: 'ISC 107', name: 'Programación Web', prereqs: ['ISC 091', 'ISC 092'] },
      { code: 'ISC 108', name: 'Lab. de Programación Web', prereqs: ['ISC 091', 'ISC 092'] },
      { code: 'ISC 109', name: 'Proyecto Integrador de Conocimientos I', prereqs: ['ISC 085', 'ISC 086'] },
      { code: 'ISC 110', name: 'Lab. de Proyecto Integrador de Conocimientos I', prereqs: ['ISC 085', 'ISC 086'] },
    ]
  },
  {
    num: 9,
    subjects: [
      { code: 'ISC 111', name: 'Diseño y Administración de Centro de Datos', prereqs: ['ISC 105', 'ISC 106'] },
      { code: 'ISC 112', name: 'Lab. de Diseño y Administración de Centro de Datos', prereqs: ['ISC 105', 'ISC 106'] },
      { code: 'ISC 029', name: 'Sistemas de Información Gerencial', prereqs: ['ISC 105', 'ISC 106'] },
      { code: 'ISC 031', name: 'Seminario III', prereqs: ['ISC 019'] },
      { code: 'ISC 131', name: 'Filosofía de Ingeniería en Sistema', prereqs: ['ISC 099', 'ISC 100'] },
    ]
  },
  {
    num: 10,
    subjects: [
      { code: 'ISC 055', name: 'Auditoría de Sistemas', prereqs: ['ISC 085', 'ISC 086'] },
      { code: 'ISC 113', name: 'Desarrollo de Emprendedores', prereqs: ['ISC 111', 'ISC 112'] },
      { code: 'ISC 114', name: 'Lab. de Desarrollo de Emprendedores', prereqs: ['ISC 111', 'ISC 112'] },
      { code: 'ISC 115', name: 'Programación de Dispositivos Móviles', prereqs: ['ISC 085', 'ISC 086'] },
      { code: 'ISC 116', name: 'Lab. de Programación de Dispositivos Móviles', prereqs: ['ISC 085', 'ISC 086'] },
      { code: 'ISC 117', name: 'Gestión y Administración de Proyectos', prereqs: ['ISC 085', 'ISC 086'] },
      { code: 'ISC 118', name: 'Lab. Gestión y Administración de Proyectos', prereqs: ['ISC 085', 'ISC 086'] },
    ]
  },
  {
    num: 11,
    subjects: [
      { code: 'ISC 121', name: 'Seguridad Informática', prereqs: ['ISC 055'] },
      { code: 'ISC 122', name: 'Lab. de Seguridad Informática', prereqs: ['ISC 055'] },
    ]
  },
  {
    num: 12,
    subjects: [
      { code: 'ISC 038', name: 'Seminario IV', prereqs: ['ISC 031'] },
      { code: 'ISC 039', name: 'Pasantía', prereqs: ['ISC 031'] },
      { code: 'ISC 119', name: 'Proyecto Integrador de Conocimientos II', prereqs: ['ISC 109', 'ISC 110'] },
      { code: 'ISC 120', name: 'Lab. de Proyecto Integrador de Conocimientos II', prereqs: ['ISC 109', 'ISC 110'] },
    ]
  },
];

// Barra de Progreso
const PLAN_KEY = 'ucateci_isc_plan_v1';
let completedSet = new Set(JSON.parse(localStorage.getItem(PLAN_KEY) || '[]'));

function saveCompleted() {
  localStorage.setItem(PLAN_KEY, JSON.stringify([...completedSet]));
}

function isUnlocked(subject) {
  return subject.prereqs.every(p => completedSet.has(p));
}

function allSubjects() {
  return PENSUM.flatMap(c => c.subjects);
}

function updatePlanProgress() {
  const all = allSubjects();
  const done = all.filter(s => completedSet.has(s.code)).length;
  document.getElementById('planCount').textContent = `${done} / ${all.length} materias cursadas`;
  document.getElementById('planPct').textContent = `${Math.round((done / all.length) * 100)}%`;
  document.getElementById('planFill').style.width = `${(done / all.length) * 100}%`;
}

function renderPlan() {
  const acc = document.getElementById('planAccordion');
  acc.innerHTML = '';
  PENSUM.forEach(cuat => {
    const done = cuat.subjects.filter(s => completedSet.has(s.code)).length;
    const total = cuat.subjects.length;

    const div = document.createElement('div');
    div.className = 'plan-cuatrimestre';
    div.innerHTML = `
      <div class="plan-cuat-header">
        <div class="cuat-number">${cuat.num}</div>
        <span class="cuat-label">Cuatrimestre ${cuat.num}</span>
        <span class="cuat-progress">${done}/${total}</span>
        <i class="ph ph-caret-down cuat-chevron"></i>
      </div>
      <div class="plan-cuat-body">
        <div class="plan-subjects-list">
          ${cuat.subjects.map(s => {
            const done    = completedSet.has(s.code);
            const locked  = !isUnlocked(s);
            const cls     = done ? 'done' : locked ? 'locked' : '';
            const checkIcon = done ? '<i class="ph ph-check"></i>' : '';
            const lockIcon  = locked && !done
              ? '<i class="ph ph-lock plan-lock-icon"></i>'
              : '';
            return `
              <div class="plan-subject-row ${cls}" data-code="${s.code}" title="${locked && !done ? 'Prerrequisitos: ' + s.prereqs.join(', ') : ''}">
                <div class="plan-check">${checkIcon}</div>
                <span class="plan-subj-code">${s.code}</span>
                <span class="plan-subj-name">${s.name}</span>
                ${lockIcon}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    div.querySelector('.plan-cuat-header').addEventListener('click', () => {
      div.classList.toggle('open');
    });

    div.querySelectorAll('.plan-subject-row').forEach(row => {
      row.addEventListener('click', () => {
        const code = row.dataset.code;
        const subject = allSubjects().find(s => s.code === code);
        if (!subject) return;

        if (row.classList.contains('locked')) {
          Swal.fire({
            icon: 'warning',
            title: 'Prerrequisitos requeridos',
            html: `Para cursar <strong>${subject.name}</strong> primero debes completar:<br><br>${subject.prereqs.map(p => `<span style="background:var(--blue-pale);color:var(--blue);padding:2px 8px;border-radius:5px;font-size:13px;margin:2px;display:inline-block">${p}</span>`).join(' ')}`,
            confirmButtonText: 'Entendido',
          });
          return;
        }

        if (completedSet.has(code)) {
          const dependents = allSubjects().filter(s =>
            s.prereqs.includes(code) && completedSet.has(s.code)
          );
          if (dependents.length > 0) {
            Swal.fire({
              icon: 'warning',
              title: 'No se puede desmarcar',
              html: `<strong>${subject.name}</strong> es prerrequisito de materias que ya cursaste:<br><br>${dependents.map(d => `<span style="background:var(--green-pale);color:var(--green);padding:2px 8px;border-radius:5px;font-size:12px;margin:2px;display:inline-block">${d.code}</span>`).join(' ')}`,
              confirmButtonText: 'Entendido',
            });
            return;
          }
          completedSet.delete(code);
        } else {
          completedSet.add(code);
        }
        saveCompleted();
        renderPlan();
        updatePlanProgress();
        const updatedDiv = document.querySelector(`.plan-cuatrimestre:nth-child(${cuat.num})`);
        if (updatedDiv) updatedDiv.classList.add('open');
      });
    });

    acc.appendChild(div);
  });

  updatePlanProgress();
}
renderPlan();

// Lista de Tareas
let tasks = [];
let editingId = null;
let currentFilter = 'all';

const tName    = document.getElementById('tName');
const tDesc    = document.getElementById('tDesc');
const tDate    = document.getElementById('tDate');
const btnAddTask    = document.getElementById('btnAddTask');
const btnUpdateTask = document.getElementById('btnUpdateTask');
const btnCancelEdit = document.getElementById('btnCancelEdit');
const tasksGrid  = document.getElementById('tasksGrid');
const tasksEmpty = document.getElementById('tasksEmpty');
const taskFormTitle = document.getElementById('taskFormTitle');

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  const opts = { day: 'numeric', month: 'short', year: 'numeric' };
  return d.toLocaleDateString('es-DO', opts);
}

function isOverdue(dateStr) {
  if (!dateStr) return false;
  return new Date(dateStr + 'T00:00:00') < new Date(new Date().toDateString());
}

function updateTaskStats() {
  const total   = tasks.length;
  const done    = tasks.filter(t => t.done).length;
  const pending = total - done;
  document.getElementById('tTotal').textContent   = total;
  document.getElementById('tPending').textContent = pending;
  document.getElementById('tDone').textContent    = done;
}

function getFilteredTasks() {
  if (currentFilter === 'pending') return tasks.filter(t => !t.done);
  if (currentFilter === 'done')    return tasks.filter(t => t.done);
  return tasks;
}

function renderTasks() {
  updateTaskStats();
  const filtered = getFilteredTasks();
  tasksGrid.querySelectorAll('.task-card').forEach(c => c.remove());
  tasksEmpty.style.display = filtered.length === 0 ? 'flex' : 'none';

  filtered.forEach(task => {
    const card = document.createElement('div');
    card.className = `task-card${task.done ? ' done-card' : ''}`;
    card.dataset.id = task.id;
    const overdue = !task.done && isOverdue(task.date);
    card.innerHTML = `
      <div class="task-card-header">
        <div class="task-card-name">${task.name}</div>
        <span class="task-card-status ${task.done ? 'status-done' : 'status-pending'}">${task.done ? 'Completada' : 'Pendiente'}</span>
      </div>
      ${task.desc ? `<div class="task-card-desc">${task.desc}</div>` : ''}
      <div class="task-card-date ${overdue ? 'overdue' : ''}">
        <i class="ph ph-calendar-blank"></i>
        ${overdue ? '<i class="ph ph-warning" style="color:var(--red)"></i>' : ''}
        Entrega: ${formatDate(task.date)}
        ${overdue ? '· Vencida' : ''}
      </div>
      <div class="task-card-actions">
        <button class="tact done-btn" title="${task.done ? 'Marcar pendiente' : 'Marcar completada'}">
          <i class="ph ${task.done ? 'ph-arrow-counter-clockwise' : 'ph-check-circle'}"></i>
          ${task.done ? 'Reabrir' : 'Completar'}
        </button>
        <button class="tact edit-btn" title="Editar">
          <i class="ph ph-pencil-simple"></i> Editar
        </button>
        <button class="tact delete-btn" title="Eliminar">
          <i class="ph ph-trash"></i> Eliminar
        </button>
      </div>
    `;

    card.querySelector('.done-btn').addEventListener('click', () => toggleDone(task.id));
    card.querySelector('.edit-btn').addEventListener('click', () => startEdit(task.id));
    card.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id, card));

    tasksGrid.appendChild(card);
  });
}

function clearForm() {
  tName.value = '';
  tDesc.value = '';
  tDate.value = '';
  editingId = null;
  btnAddTask.style.display    = 'inline-flex';
  btnUpdateTask.style.display = 'none';
  btnCancelEdit.style.display = 'none';
  taskFormTitle.innerHTML = '<i class="ph ph-plus-circle"></i> Nueva Tarea';
}

btnAddTask.addEventListener('click', () => {
  const name = tName.value.trim();
  const desc = tDesc.value.trim();
  const date = tDate.value;
  if (!name) {
    Swal.fire({ icon: 'warning', title: 'Campo requerido', text: 'El nombre de la tarea es obligatorio.', confirmButtonText: 'Entendido' });
    return;
  }
  tasks.push({ id: genId(), name, desc, date, done: false });
  clearForm();
  renderTasks();
});

btnUpdateTask.addEventListener('click', () => {
  const name = tName.value.trim();
  const desc = tDesc.value.trim();
  const date = tDate.value;
  if (!name) {
    Swal.fire({ icon: 'warning', title: 'Campo requerido', text: 'El nombre de la tarea es obligatorio.', confirmButtonText: 'Entendido' });
    return;
  }
  const task = tasks.find(t => t.id === editingId);
  if (task) { task.name = name; task.desc = desc; task.date = date; }
  clearForm();
  renderTasks();
});

btnCancelEdit.addEventListener('click', () => clearForm());

function startEdit(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  editingId = id;
  tName.value = task.name;
  tDesc.value = task.desc;
  tDate.value = task.date;
  btnAddTask.style.display    = 'none';
  btnUpdateTask.style.display = 'inline-flex';
  btnCancelEdit.style.display = 'inline-flex';
  taskFormTitle.innerHTML = '<i class="ph ph-pencil-simple" style="color:var(--blue)"></i> Editar Tarea';
  document.getElementById('taskFormCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  tName.focus();
}

function toggleDone(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.done = !task.done;
  renderTasks();
}

function deleteTask(id, card) {
  Swal.fire({
    title: '¿Eliminar tarea?',
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
  }).then(r => {
    if (!r.isConfirmed) return;
    card.classList.add('removing');
    setTimeout(() => {
      tasks = tasks.filter(t => t.id !== id);
      renderTasks();
    }, 220);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

[tName, tDesc, tDate].forEach(el => {
  el.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    editingId ? btnUpdateTask.click() : btnAddTask.click();
  });
});

renderTasks();