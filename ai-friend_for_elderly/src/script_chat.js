// === ЧАТ ===

const chatToggleBtn = document.getElementById("chatToggleBtn");
const chatSection = document.getElementById("chatSection");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

// Показать/скрыть чат
chatToggleBtn.addEventListener("click", () => {
  chatSection.classList.toggle("hidden");
});

// Отправка сообщения
sendBtn.addEventListener("click", () => {
  const userMsg = chatInput.value.trim();
  if (userMsg !== "") {
    addMessage("Вы", userMsg);
    chatInput.value = "";
    setTimeout(() => {
      aiReply(userMsg);
    }, 500); // задержка как будто "думает"
  }
});

// Добавление сообщений
function addMessage(sender, text) {
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Имитация ИИ-ответа
function aiReply(userMsg) {
  const replies = [
    "Я здесь, расскажите, что у вас на душе.",
    "Очень важно, что вы делитесь. Я рядом.",
    "Хочется вас поддержать. Вы не один.",
    "Спасибо, что написали. Давайте поговорим.",
    "Расскажите, что вас волнует?",
  ];
  const reply = replies[Math.floor(Math.random() * replies.length)];
  addMessage("Друг на связи", reply);
}

// ------------

// === ХОББИ ===

const hobbyBtn = document.getElementById("hobbyBtn");
const hobbyResult = document.getElementById("hobbyResult");

const hobbies = [
  "Рисование или скетчинг",
  "Садоводство на подоконнике",
  "Прослушивание аудиокниг",
  "Изучение рецептов и кулинария",
  "Прогулки на свежем воздухе",
  "Участие в онлайн-клубе по интересам",
  "Ведение личного дневника",
  "Сканворды и головоломки",
  "Уход за комнатными растениями",
  "Звонки друзьям и знакомым",
];

// Кнопка "Узнать хобби"
hobbyBtn.addEventListener("click", () => {
  const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
  hobbyResult.textContent = `✨ Попробуйте: ${randomHobby}`;
});
