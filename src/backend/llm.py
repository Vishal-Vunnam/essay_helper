import requests


def ask_question(data):
    prompt = f"Document:\n{data.text}\n\nQuestion: {data.question}\nAnswer:"

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "mistral",  
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()
    return {"response": result.get("response", "No answer")}

