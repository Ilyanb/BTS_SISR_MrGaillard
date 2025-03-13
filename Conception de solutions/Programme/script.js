// Sélection des éléments HTML
const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const resultText = document.getElementById('result');
const questionText = document.getElementById('question');
const loadingMessage = document.getElementById('loading');
const newQuestionButton = document.getElementById('new-question');

let model;
let currentQuestion = "";

// Liste des questions possibles
const questions = [
    "un clavier",
    "un serveur",
    "un switch",
    "un routeur"
];

// Charger le modèle COCO-SSD
cocoSsd.load().then(loadedModel => {
    model = loadedModel;
    console.log("Modèle COCO-SSD chargé !");
    loadingMessage.style.display = 'none'; // Masquer le message de chargement lorsque le modèle est chargé
}).catch(err => {
    console.error("Erreur de chargement du modèle :", err);
    loadingMessage.textContent = "Échec du chargement du modèle.";
});

// Demander une nouvelle question
function askNewQuestion() {
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionText.innerHTML = `Question : Trouvez <span class="object-highlight">${currentQuestion}</span>.`;
    resultText.textContent = "Résultat : En attente de réponse...";
}

// Initialiser la caméra
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(err => {
        console.error("Erreur d'accès à la caméra :", err);
    });

// Fonction pour analyser les objets dans l'image capturée
function detectObjectsInCapturedImage() {
    if (!model) {
        console.log("Modèle non chargé.");
        return;
    }

    model.detect(video).then(predictions => {
        console.log("Prédictions :", predictions);

        // Afficher toutes les classes détectées dans la console
        predictions.forEach(prediction => {
            console.log("Objet détecté : " + prediction.class);
        });

        // Vérifier si l'objet demandé est détecté parmi les objets reconnus par COCO-SSD
        const found = predictions.some(prediction => 
            prediction.class.toLowerCase() === currentQuestion.toLowerCase()
        );

        if (found) {
            resultText.textContent = `Résultat : Bravo, vous avez trouvé ${currentQuestion} !`;
        } else {
            resultText.textContent = `Résultat : ${currentQuestion} non détecté. Réessayez !`;
        }
    }).catch(err => {
        console.error("Erreur lors de l'analyse :", err);
        resultText.textContent = "Erreur lors de l'analyse. Réessayez.";
    });
}

// Capturer l'image lorsque l'utilisateur clique sur le bouton "Capturer"
captureButton.addEventListener('click', () => {
    detectObjectsInCapturedImage();
});

// Générer une nouvelle question au démarrage
newQuestionButton.addEventListener('click', askNewQuestion);
askNewQuestion();

