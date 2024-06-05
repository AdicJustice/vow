const questions = [
    "Te numești Pîrlea Adic, născut în 1995, căruia i-a murit mama și a crescut fără tată? 👶😢",
    "Dorești să slăbești frumos pentru întâlnirea cu absolvenții de pe 24 august? 📅🎓",
    "Juri pe viața ta în fața Creatorului că până pe 24 august 2024 nu vei consuma zahăr și produse care conțin vădit zahăr 🍬🍫 (bomboane, napolitane, tort, chifle dulci, halva, înghețată, prăjituri, învălăcite, plăcinte dulci, colțunași cu fructe etc.)?",
    "Juri pe viața ta că înainte de orice consum caloric, mai întâi notezi caloriile în MyFitnessPal 📱 și apoi consumi? 🍽️",
    "Juri că zilnic ai să parcurgi 10 mii de pași 🚶‍♂️👟?",
    "Juri că zilnic vei da Cancel Diary în MyFitnessPal 📊 și nu vei depăși norma indicată acolo? ✅",
    "Juri să mergi de fiecare dată la sală 🏋️‍♂️ când aceasta este disponibilă? ⛹️‍♂️"
];

const answers = [
    "Exact! ✅",
    "Doresc! 💪",
    "Jur în fața marelui Creator, Dumnezeu Atotputernic! 🙏",
    "Jur în fața Marelui Hegemon, Creator al tuturor văzutelor și nevăzutelor! 🌌",
    "Jur pe picioarele mele că voi parcurge zilnic 10 mii pași! 🚶‍♂️👟",
    "Jur în fața multiubitului Dumnezeu, Stăpânul Suprem! ✝️",
    "Jur în fața Domnului Isus Hristos! ✝️"
];

let currentQuestionIndex = 0;

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestionIndex];
        document.getElementById('answer-button').textContent = answers[currentQuestionIndex];
    } else {
        document.getElementById('question-container').innerHTML = `
            <div class="conclusion">
                AI ÎNCHEIAT UN JURĂMÂNT CU DUMNEZEU 🙏<br>
                Eclesiastul spune: "Când faci un jurământ înaintea lui Dumnezeu, nu întârzia să-l împlineşti, căci Lui nu-I plac nesăbuiţii. Aşadar, împlineşte-ţi jurământul! Este mai bine să nu faci jurăminte, decât să faci jurăminte şi să nu le împlineşti." 📜
            </div>
        `;
        showNote();
    }
}

function showNote() {
    const noteContainer = document.getElementById('note-container');
    noteContainer.classList.remove('hidden');
    setTimeout(() => {
        noteContainer.style.opacity = 1;
    }, 10);
}

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'tzBEpdfCRqw',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}