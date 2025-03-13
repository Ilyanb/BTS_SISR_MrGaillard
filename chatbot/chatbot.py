import requests
import json

class MistralChatbot:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.mistral.ai/v1/chat/completions"
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        self.conversation_history = []

    def send_message(self, user_input):
        """
        Envoie un message à l'API de Mistral et récupère la réponse.
        """
        # Ajouter le message de l'utilisateur à l'historique
        self.conversation_history.append({"role": "user", "content": user_input})

        # Créer la payload avec l'historique de la conversation
        payload = {
            "model": "mistral-base",  # Remplace par un modèle valide
            "messages": self.conversation_history,
        }

        try:
            # Effectuer la requête POST à l'API Mistral
            response = requests.post(self.base_url, headers=self.headers, json=payload)
            
            if response.status_code != 200:
                print("Erreur: ", response.status_code)
                print("Réponse brute: ", response.text)
                return f"Erreur lors de l'appel à l'API: {response.status_code}"

            # Analyser la réponse JSON
            response_data = response.json()

            # Vérifier si la structure attendue est présente
            if 'choices' in response_data and len(response_data['choices']) > 0:
                bot_reply = response_data['choices'][0]['message']['content']
            else:
                print("Réponse invalide de l'API, structure manquante.")
                return "Erreur: Structure de la réponse API invalide"

            # Ajouter la réponse du bot à l'historique
            self.conversation_history.append({"role": "assistant", "content": bot_reply})

            return bot_reply

        except requests.exceptions.RequestException as e:
            return f"Erreur lors de l'appel à l'API: {str(e)}"

    def chat(self):
        """
        Interface de chat avec l'utilisateur.
        """
        print("Chatbot Mistral: Bonjour! Que puis-je faire pour vous aujourd'hui?")
        while True:
            user_input = input("Vous: ")
            if user_input.lower() in ['exit', 'quit', 'bye']:
                print("Chatbot Mistral: Au revoir!")
                break

            bot_reply = self.send_message(user_input)
            print(f"Chatbot Mistral: {bot_reply}")

# Remplace 'ton_api_key' par ta clé API Mistral
api_key = "cVNm0mmoLNndvLhdOkxY1IrlWjIcq6fY"
chatbot = MistralChatbot(api_key)
chatbot.chat()
