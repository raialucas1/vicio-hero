// ------------------ VÍCIOS (15) ------------------
//Array de objetos: cada objeto representa um tipo de vício que o usuário pode escolher.

const addictions = [
  {
    id: "cigarro",
    name: "Cigarro / Vape",
    description: "Dependência de nicotina.",
    difficulty: "alta",
    bosses: ["hydra-vape", "dragao-nicotina"],
  },
  {
    id: "alcool",
    name: "Álcool",
    description: "Consumo excessivo.",
    difficulty: "alta",
    bosses: ["demonio-bebida", "barao-boteco"],
  },
  {
    id: "redes",
    name: "Redes Sociais",
    description: "Uso compulsivo de redes sociais.",
    difficulty: "media",
    bosses: ["serpente-notificacoes", "sombra-do-scroll"],
  },
  {
    id: "doces",
    name: "Doces / Junk Food",
    description: "Excesso de açúcar.",
    difficulty: "media",
    bosses: ["golem-acucar", "rainha-dos-doces"],
  },
  {
    id: "games",
    name: "Games Online",
    description: "Jogos competitivos em excesso.",
    difficulty: "media",
    bosses: ["lorde-game-over", "mestre-do-grind"],
  },
  {
    id: "apostas",
    name: "Apostas Online",
    description: "Cassino e apostas esportivas.",
    difficulty: "alta",
    bosses: ["rei-das-fichas", "fantasma-do-azar"],
  },
  {
    id: "pornografia",
    name: "Conteúdo adulto",
    description: "Consumo compulsivo digital.",
    difficulty: "alta",
    bosses: ["espectro-da-tela", "sombra-da-madrugada"],
  },
  {
    id: "celular",
    name: "Celular",
    description: "Uso excessivo sem motivo.",
    difficulty: "media",
    bosses: ["guardiao-tela-azul", "ladrao-de-atencao"],
  },
  {
    id: "streaming",
    name: "Streaming",
    description: "Maratonas sem fim.",
    difficulty: "media",
    bosses: ["senhor-das-maratonas", "rei-proximo-episodio"],
  },
  {
    id: "trabalho",
    name: "Workaholic",
    description: "Trabalho sem descanso.",
    difficulty: "alta",
    bosses: ["tirano-homeoffice", "senhor-das-12h"],
  },
  {
    id: "procrastinacao",
    name: "Procrastinação",
    description: "Adiar tudo.",
    difficulty: "media",
    bosses: ["fantasma-do-amanha", "mestre-dos-adiamentos"],
  },
  {
    id: "cafeina",
    name: "Cafeína",
    description: "Estimulantes em excesso.",
    difficulty: "media",
    bosses: ["elemental-da-xicara", "senhor-dos-energeticos"],
  },
  {
    id: "compras",
    name: "Compras impulsivas",
    description: "Gastos compulsivos.",
    difficulty: "media",
    bosses: ["rainha-do-cartao", "colecionador-de-sacolas"],
  },
  {
    id: "energeticos",
    name: "Energéticos",
    description: "Bebidas estimulantes.",
    difficulty: "media",
    bosses: ["dragao-da-lata", "bicho-da-madrugada"],
  },
  {
    id: "drogas-ilicitas",
    name: "Drogas ilícitas",
    description: "Uso prejudicial.",
    difficulty: "alta",
    bosses: ["sombra-das-ruas", "demonio-do-pacotinho"],
  },
];

// ------------------ BOSSES ------------------
//Outro array de objetos: cada objeto é um boss do jogo, serve para cada usuário escolher um inimigo temático relacionado ao vício.

const bosses = [
  {
    id: "hydra-vape",
    name: "Hydra do Vape",
    addictionId: "cigarro",
    description: "Cada cabeça é uma recaída.",
    hpMax: 100,
  },
  {
    id: "dragao-nicotina",
    name: "Dragão da Nicotina",
    addictionId: "cigarro",
    description: "Solta fumaça de autoengano.",
    hpMax: 100,
  },

  {
    id: "demonio-bebida",
    name: "Demônio da Bebida",
    addictionId: "alcool",
    description: "Sussurra: 'só hoje'.",
    hpMax: 100,
  },
  {
    id: "barao-boteco",
    name: "Barão do Boteco",
    addictionId: "alcool",
    description: "Te espera com as mesmas desculpas.",
    hpMax: 100,
  },

  {
    id: "serpente-notificacoes",
    name: "Serpente das Notificações",
    addictionId: "redes",
    description: "Vive de cada notificação ignorada.",
    hpMax: 100,
  },
  {
    id: "sombra-do-scroll",
    name: "Sombra do Scroll",
    addictionId: "redes",
    description: "Te puxa pra baixo no feed infinito.",
    hpMax: 100,
  },

  {
    id: "golem-acucar",
    name: "Golem de Açúcar",
    addictionId: "doces",
    description: "Cresce a cada sobremesa.",
    hpMax: 100,
  },
  {
    id: "rainha-dos-doces",
    name: "Rainha dos Doces",
    addictionId: "doces",
    description: "Recompensa rápida, arrependimento lento.",
    hpMax: 100,
  },

  {
    id: "lorde-game-over",
    name: "Lorde do Game Over",
    addictionId: "games",
    description: "Trava sua vida real.",
    hpMax: 100,
  },
  {
    id: "mestre-do-grind",
    name: "Mestre do Grind",
    addictionId: "games",
    description: "Só mais uma partida.",
    hpMax: 100,
  },

  {
    id: "rei-das-fichas",
    name: "Rei das Fichas",
    addictionId: "apostas",
    description: "Ilusão do 'recuperar tudo'.",
    hpMax: 100,
  },
  {
    id: "fantasma-do-azar",
    name: "Fantasma do Azar",
    addictionId: "apostas",
    description: "'Quase ganhei' é sua arma.",
    hpMax: 100,
  },

  {
    id: "espectro-da-tela",
    name: "Espectro da Tela",
    addictionId: "pornografia",
    description: "Aparece quando você está sozinho.",
    hpMax: 100,
  },
  {
    id: "sombra-da-madrugada",
    name: "Sombra da Madrugada",
    addictionId: "pornografia",
    description: "Chega tarde da noite.",
    hpMax: 100,
  },

  {
    id: "guardiao-tela-azul",
    name: "Guardião da Tela Azul",
    addictionId: "celular",
    description: "Vibrações que te prendem.",
    hpMax: 100,
  },
  {
    id: "ladrao-de-atencao",
    name: "Ladrão de Atenção",
    addictionId: "celular",
    description: "Rouba minutos preciosos.",
    hpMax: 100,
  },

  {
    id: "senhor-das-maratonas",
    name: "Senhor das Maratonas",
    addictionId: "streaming",
    description: "'Só mais um episódio'.",
    hpMax: 100,
  },
  {
    id: "rei-proximo-episodio",
    name: "Rei do Próximo Episódio",
    addictionId: "streaming",
    description: "Dedos eternos no botão 'próximo'.",
    hpMax: 100,
  },

  {
    id: "tirano-homeoffice",
    name: "Tirano do Home Office",
    addictionId: "trabalho",
    description: "Não te deixa desligar.",
    hpMax: 100,
  },
  {
    id: "senhor-das-12h",
    name: "Senhor das 12 Horas",
    addictionId: "trabalho",
    description: "Transforma todo dia em turno extra.",
    hpMax: 100,
  },

  {
    id: "fantasma-do-amanha",
    name: "Fantasma do Amanhã",
    addictionId: "procrastinacao",
    description: "'Depois você faz'.",
    hpMax: 100,
  },
  {
    id: "mestre-dos-adiamentos",
    name: "Mestre dos Adiamentos",
    addictionId: "procrastinacao",
    description: "Transforma prazos simples em caos.",
    hpMax: 100,
  },

  {
    id: "elemental-da-xicara",
    name: "Elemental da Xícara",
    addictionId: "cafeina",
    description: "Sempre quer mais café.",
    hpMax: 100,
  },
  {
    id: "senhor-dos-energeticos",
    name: "Senhor dos Energéticos",
    addictionId: "cafeina",
    description: "Latas no lugar de descanso real.",
    hpMax: 100,
  },

  {
    id: "rainha-do-cartao",
    name: "Rainha do Cartão",
    addictionId: "compras",
    description: "Ama ver o limite sumindo.",
    hpMax: 100,
  },
  {
    id: "colecionador-de-sacolas",
    name: "Colecionador de Sacolas",
    addictionId: "compras",
    description: "Coisas que você nem precisava.",
    hpMax: 100,
  },

  {
    id: "dragao-da-lata",
    name: "Dragão da Lata",
    addictionId: "energeticos",
    description: "Empilha latas vazias.",
    hpMax: 100,
  },
  {
    id: "bicho-da-madrugada",
    name: "Bicho da Madrugada",
    addictionId: "energeticos",
    description: "Só aparece tarde da noite.",
    hpMax: 100,
  },

  {
    id: "sombra-das-ruas",
    name: "Sombra das Ruas",
    addictionId: "drogas-ilicitas",
    description: "Caminho escuro e perigoso.",
    hpMax: 100,
  },
  {
    id: "demonio-do-pacotinho",
    name: "Demônio do Pacotinho",
    addictionId: "drogas-ilicitas",
    description: "Cobra caro pela fuga rápida.",
    hpMax: 100,
  },
];

// -------------------------------------------
// ESTADO DO APP
// -------------------------------------------

const initialState = {
  usuario: null,
  addictionId: null,
  bossId: null,
  xp: 0,
  nivel: 1,
  diasSemVicio: 0,
  bossHp: 100,
  diary: [],
  achievements: [],
};

// A função loadState coleta o estado salvo do jogo no navegador.
// Através do getItem buscamos no localStorage um possível estado salvo.
// Se existir, fazemos a conversão do texto (JSON) para objeto JavaScript usando JSON.parse.
// Se não existir nada salvo, retornamos o initialState definido no início do código.
function loadState() {
  const saved = localStorage.getItem("vicioHeroState_v2");
  if (saved) return JSON.parse(saved);
  return initialState;
}

// "state" guarda o estado atual do jogo em memória.
// Quando algo muda no jogo (XP, dias sem vício, etc), o state é atualizado.
let state = loadState();

// Sempre que o state é alterado, usamos saveState() para salvar o progresso.
// Como o localStorage só aceita texto, precisamos converter o objeto JS para texto
// usando JSON.stringify antes de salvar.
// Depois disso chamamos render() para atualizar a interface com os novos dados.
function saveState() {
  localStorage.setItem("vicioHeroState_v2", JSON.stringify(state));
  render();
}

// ---------- TELAS ----------
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => (s.style.display = "none"));
  document.getElementById(id).style.display = "block";
}

function decideStartScreen() {
  if (!state.usuario) showScreen("screen-login");
  else if (!state.addictionId) {
    buildAddictionList();
    showScreen("screen-addiction");
  } else if (!state.bossId) {
    buildBossList();
    showScreen("screen-boss");
  } else showScreen("screen-dashboard");
}

// ---------- LOGIN ----------
function login() {
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  if (!nome || !email) return alert("Preencha nome e e-mail.");

  state.usuario = { nome, email };
  saveState();
}

function backToLogin() {
  state.addictionId = null;
  state.bossId = null;
  saveState();
  showScreen("screen-login");
}

// ---------- SELEÇÃO DE VÍCIO ----------
function buildAddictionList() {
  addictionList.innerHTML = "";
  addictions.forEach((add) => {
    const div = document.createElement("div");
    div.className = "card-option";
    div.onclick = () => selectAddiction(add.id);
    div.innerHTML = `
            <div class="card-option-title">${add.name}</div>
            <div class="card-option-sub">${add.description}</div>
            <span class="pill">Dificuldade: ${add.difficulty.toUpperCase()}</span>
            <span class="pill">Bosses: ${add.bosses.length}</span>
          `;
    addictionList.appendChild(div);
  });
}

function selectAddiction(id) {
  state.addictionId = id;
  state.bossId = null;
  state.bossHp = 100;
  state.diasSemVicio = 0;
  saveState();
}

function backToAddiction() {
  showScreen("screen-addiction");
}

// ---------- SELEÇÃO DE BOSS ----------
function buildBossList() {
  bossList.innerHTML = "";

  const addiction = addictions.find((a) => a.id === state.addictionId);
  const bossIds = addiction.bosses;

  const filtered = bosses.filter((b) => bossIds.includes(b.id));

  filtered.forEach((boss) => {
    const div = document.createElement("div");
    div.className = "card-option";
    div.onclick = () => selectBoss(boss.id);
    div.innerHTML = `
            <div class="card-option-title">${boss.name}</div>
            <div class="card-option-sub">${boss.description}</div>
            <span class="pill">HP inicial: 100%</span>
          `;
    bossList.appendChild(div);
  });
}

function selectBoss(id) {
  state.bossId = id;
  state.bossHp = 100;
  saveState();
}

// ---------- PROGRESSO ----------
function xpNeeded(level) {
  return level * 150 + level * level * 50;
}

function getTitle(level) {
  if (level <= 5) return "Novato";
  if (level <= 15) return "Guerreiro";
  if (level <= 30) return "Veterano";
  if (level <= 50) return "Campeão";
  return "Lenda";
}

function addXp(qtd) {
  state.xp += qtd;
  let need = xpNeeded(state.nivel);
  while (state.xp >= need) {
    state.nivel++;
    need = xpNeeded(state.nivel);
  }
}

function markCleanDay() {
  state.diasSemVicio++;
  addXp(10);

  if (state.diasSemVicio % 7 === 0) {
    state.bossHp -= 15;
    if (state.bossHp < 0) state.bossHp = 0;
    alert("Você causou dano ao boss! (-15% HP)");
  }

  checkAchievements();
  saveState();
}

function registerRelapse() {
  if (!confirm("Registrar recaída?")) return;

  state.xp = Math.floor(state.xp * 0.8);
  state.diasSemVicio = 0;
  state.bossHp = Math.min(100, state.bossHp + 50);

  checkAchievements();
  saveState();
}

function changeAddiction() {
  showScreen("screen-addiction");
}

// ---------- CONQUISTAS ----------

function unlock(id, name, desc) {
  if (!state.achievements.find((a) => a.id === id)) {
    state.achievements.push({ id, name, desc });
  }
}

function checkAchievements() {
  if (state.diasSemVicio >= 1)
    unlock("first", "Primeiro dia", "Você completou 1 dia limpo.");

  if (state.diasSemVicio >= 7) unlock("week", "Uma semana!", "7 dias limpos.");

  if (state.diasSemVicio >= 30) unlock("month", "Um mês!", "30 dias limpos.");

  if (state.bossHp === 0)
    unlock("boss-defeat", "Boss derrotado", "Você venceu seu vício!");
}

// ---------- DIÁRIO ----------

function saveDiaryEntry() {
  const motiv = motivationInput.value.trim();
  const refl = reflectionInput.value.trim();

  if (!motiv && !refl) return alert("Escreva algo.");

  state.diary.unshift({
    data: new Date().toLocaleString("pt-BR"),
    motivacao: motiv,
    reflexao: refl,
  });

  motivationInput.value = "";
  reflectionInput.value = "";
  saveState();
}

function renderDiary() {
  diaryList.innerHTML = "";

  if (!state.diary.length) {
    const empty = document.createElement("div");
    empty.className = "small";
    empty.textContent = "Nenhuma entrada no diário ainda.";
    diaryList.appendChild(empty);
    return;
  }

  state.diary.forEach((entry) => {
    const entryDiv = document.createElement("div");
    entryDiv.className = "diary-entry";

    const date = document.createElement("strong");
    date.textContent = entry.data;

    const motivation = document.createElement("p");
    motivation.textContent = "Motivação: " + entry.motivacao;

    const reflection = document.createElement("p");
    reflection.textContent = "Reflexão: " + entry.reflexao;

    entryDiv.appendChild(date);
    entryDiv.appendChild(motivation);
    entryDiv.appendChild(reflection);

    diaryList.appendChild(entryDiv);
  });
}
// ---------- RENDER ----------

function render() {
  if (state.usuario) {
    userInfoHeader.innerHTML = `
            Logado como <strong>${state.usuario.nome}</strong><br>
            <span style="color:#9ca3af">${state.usuario.email}</span>
          `;
  }

  decideStartScreen();

  if (!state.usuario || !state.addictionId || !state.bossId) return;

  xpStat.textContent = `${state.xp} XP`;
  levelLabel.textContent = `Nível ${state.nivel} • ${getTitle(state.nivel)}`;

  const need = xpNeeded(state.nivel);
  xpBar.style.width = `${Math.min(100, (state.xp / need) * 100)}%`;
  xpToNextLabel.textContent = `Faltam ${need - state.xp} XP`;

  daysCleanStat.textContent = state.diasSemVicio;

  const boss = bosses.find((b) => b.id === state.bossId);
  const addiction = addictions.find((a) => a.id === state.addictionId);

  bossName.textContent = boss.name;
  bossDesc.textContent = `${boss.description} (${addiction.name})`;
  bossHpBar.style.width = `${state.bossHp}%`;
  bossHpLabel.textContent = `HP atual: ${state.bossHp}%`;

  achievementsList.innerHTML = state.achievements.length
    ? state.achievements
        .map(
          (a) => `
              <div class="diary-entry">
                <div><span class="tag">Conquista</span> <strong>${a.name}</strong></div>
                <div class="small">${a.desc}</div>
              </div>
            `
        )
        .join("")
    : `<div class="small">Nenhuma conquista ainda.</div>`;

  renderDiary();
}

// ----------- INICIAR ----------
checkAchievements();
render();
