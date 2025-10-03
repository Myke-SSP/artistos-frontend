let API_BASE = localStorage.getItem('API_BASE') || 'https://artistos-backend-1.onrender.com';
const apiBaseInput = document.getElementById('apiBase');
const healthMsg = document.getElementById('healthMsg');
const profileMsg = document.getElementById('profileMsg');
const goalMsg = document.getElementById('goalMsg');
const backlogEl = document.getElementById('backlog');

let currentProfileId = null;

document.getElementById('saveBase').onclick = async () => {
  API_BASE = apiBaseInput.value.trim() || API_BASE;
  localStorage.setItem('API_BASE', API_BASE);
  try {
    const res = await fetch(`${API_BASE}/health`);
    const data = await res.json();
    healthMsg.textContent = data.ok ? `Health OK at ${API_BASE}` : `Health check failed`;
  } catch (e) {
    healthMsg.textContent = `Could not reach ${API_BASE}`;
  }
};

document.getElementById('createProfile').onclick = async () => {
  const name = document.getElementById('name').value.trim();
  const alias = document.getElementById('alias').value.trim();
  const city = document.getElementById('city').value.trim();
  profileMsg.textContent = 'Saving...';
  const res = await fetch(`${API_BASE}/profiles`, {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ name, alias, city })
  });
  const data = await res.json();
  if (res.ok) {
    currentProfileId = data.id;
    profileMsg.textContent = `Saved profile #${data.id} — ${data.name}${data.alias?` (${data.alias})`:''}`;
  } else {
    profileMsg.textContent = `Error: ${data.error || 'unknown'}`;
  }
};

document.getElementById('saveGoal').onclick = async () => {
  if (!currentProfileId) { goalMsg.textContent = 'Create a profile first.'; return; }
  const goal_text = document.getElementById('goal').value.trim();
  const res = await fetch(`${API_BASE}/goals`, {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ profile_id: currentProfileId, goal_text })
  });
  const data = await res.json();
  goalMsg.textContent = res.ok ? `Goal saved (#${data.id}).` : `Error: ${data.error || 'unknown'}`;
};

document.getElementById('genRoadmap').onclick = async () => {
  if (!currentProfileId) { goalMsg.textContent = 'Create a profile first.'; return; }
  const goal_text = document.getElementById('goal').value.trim();
  const res = await fetch(`${API_BASE}/roadmaps/generate`, {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ profile_id: currentProfileId, goal_text })
  });
  const data = await res.json();
  if (res.ok) {
    goalMsg.textContent = `Roadmap generated & saved.`;
    renderBacklog(data.roadmap.activities);
  } else {
    goalMsg.textContent = `Error: ${data.error || 'unknown'}`;
  }
};

function renderBacklog(activities) {
  backlogEl.innerHTML = '';
  activities.forEach((act, i) => {
    const li = document.createElement('li');
    const tasks = (act.tasks || []).map(t => `• ${t.title}`).join(' ');
    li.textContent = `${i+1}. ${act.title} — ${tasks}`;
    backlogEl.appendChild(li);
  });
}

apiBaseInput.value = API_BASE;

