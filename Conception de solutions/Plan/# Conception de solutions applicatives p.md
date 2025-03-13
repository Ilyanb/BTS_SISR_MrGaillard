# Conception de solutions applicatives pour l'orientation SISR/SLAM 

# Feuille de route : Application ou site web utilisant la caméra pour répondre à des questions en analysant des images

---

## 1. Phase de planification

### 1.1. Objectifs du projet
- L'application ou le site permettra aux utilisateurs :
  - D'utiliser la caméra du téléphone pour capturer une image.
  - D'obtenir des réponses ou des informations basées sur l'image (reconnaissance d'objets ou extraction de texte).

### 1.2. Cas d'utilisation
- **Cas 1 : Reconnaissance d'objets**
  - L'utilisateur montre un objet à la caméra, et l'application ou le site fournit des informations pertinentes.
- **Cas 2 : Identification de texte**
  - L'utilisateur pointe la caméra vers du texte pour extraire et utiliser les informations.

### 1.3. Technologies choisies
#### Application mobile :
- **Framework** : React Native ou Flutter.
- **Caméra** : React Native Camera ou Flutter Camera.
- **Modèle IA** : TensorFlow Lite ou Google ML Kit.

#### Site web (PWA - Progressive Web App) :
- **Frontend** : React.js, Vue.js ou Angular.
- **Backend** : Node.js (Express), Python (Flask/Django), ou Firebase.
- **Modèle IA** :
  - Vision par ordinateur : TensorFlow.js ou Google Cloud Vision API.
  - OCR : Tesseract.js ou Google Cloud Vision OCR.
- **Caméra** : WebRTC ou l’API HTML5 `<input type="file" accept="image/*" capture="environment">`.

---

## 2. Phase de conception

### 2.1. Design UX/UI
#### Application mobile :
- **Page principale** :
  - Bouton pour activer la caméra.
  - Interface intuitive avec des options comme "Capturer", "Analyser" ou "Historique".
- **Résultats** :
  - Affichage des informations sous forme de texte, images ou liens cliquables.

#### Site web :
- **Page principale** :
  - Bouton pour activer la caméra ou sélectionner une image.
  - Interface claire et accessible, optimisée pour les mobiles.
- **Résultats** :
  - Affichage des informations analysées sous forme textuelle ou graphique.

### 2.2. Architecture logicielle
- **Frontend** :
  - Composant pour capturer ou télécharger des images.
  - Composant pour afficher les résultats.
- **Backend** :
  - API REST pour traiter les images, les analyser et retourner les résultats.
  - Stockage des images et métadonnées dans une base de données.
- **Base de données** :
  - Firebase, MongoDB ou toute base NoSQL pour les informations liées aux images.

---

## 3. Phase de développement

### 3.1. Développement pour application mobile
- **Accès à la caméra** :
  - Utiliser React Native Camera (ou Flutter Camera).
  - Implémenter les permissions nécessaires pour Android et iOS.
- **Capture et envoi d’images** :
  - Envoyer les images au backend via une requête HTTP.
- **Affichage des résultats** :
  - Construire une interface pour afficher les réponses.

### 3.2. Développement pour site web
- **Accès à la caméra** :
  - Utiliser WebRTC ou l’API HTML5 `<input type="file" accept="image/*" capture="environment">`.
  - Gérer les permissions pour accéder à la caméra.
- **Capture et envoi d’images** :
  - Permettre aux utilisateurs de capturer une image ou de télécharger une photo existante.
- **Affichage des résultats** :
  - Construire une interface réactive pour afficher les réponses.

### 3.3. Backend
- **API pour analyser les images** :
  - Créer une API REST pour recevoir les images et retourner les résultats.
  - Intégrer un modèle IA (TensorFlow.js, TensorFlow Lite, ou Google Cloud Vision).
- **Stockage** :
  - Sauvegarder les images dans Firebase Storage ou AWS S3.

### 3.4. Fonctionnalités IA
- **Reconnaissance d’objets** :
  - Utiliser TensorFlow.js pour les sites ou TensorFlow Lite pour les mobiles.
- **Reconnaissance de texte** :
  - Intégrer Tesseract.js (web) ou Google ML Kit (mobile).

---

## 4. Phase de test

### 4.1. Tests unitaires
- Vérifier chaque fonctionnalité indépendamment (capture d’image, envoi au backend, réception des résultats).

### 4.2. Tests fonctionnels
- Tester l’application ou le site sur différents téléphones et navigateurs pour s'assurer de la compatibilité.

### 4.3. Tests utilisateurs
- Collecter des retours sur l’ergonomie et les performances.

---

## 5. Phase de déploiement

### 5.1. Déploiement pour application mobile
- **Android** :
  - Générer un APK signé et publier sur Google Play Store.
- **iOS** :
  - Publier sur l’App Store via Apple Developer.

### 5.2. Déploiement pour site web
- **Hébergement** :
  - Héberger le site sur une plateforme comme Vercel, Netlify, ou Firebase Hosting.
- **Progressive Web App (PWA)** :
  - Ajouter des fonctionnalités PWA (manifest.json, Service Workers) pour permettre une utilisation hors ligne et l’installation sur le téléphone.

---

## 6. Phase d’amélioration continue

### 6.1. Amélioration des modèles IA
- Ajouter de nouvelles catégories d'objets ou améliorer la précision des prédictions.

### 6.2. Nouvelles fonctionnalités
- Traduction automatique.
- Mode hors ligne avec TensorFlow Lite ou IndexedDB pour les fonctions de base sur le site.
- Historique partagé entre appareils grâce à Firebase.

### 6.3. Collecte des retours utilisateurs
- Intégrer des outils d’analyse pour prioriser les améliorations.

---

## Outils recommandés

### Application mobile :
- **Framework** : React Native, Expo ou Flutter.
- **Backend** : Node.js, Flask/Django.
- **Vision par ordinateur** : TensorFlow Lite, Google ML Kit.
- **OCR** : Google ML Kit Text Recognition.

### Site web :
- **Frontend** : React.js, Vue.js ou Angular.
- **Backend** : Node.js, Flask/Django.
- **Vision par ordinateur** : TensorFlow.js, Google Cloud Vision API.
- **OCR** : Tesseract.js, Google Cloud Vision OCR.

### Stockage et base de données :
- Firebase Storage, AWS S3.
- Firebase Firestore ou MongoDB.
