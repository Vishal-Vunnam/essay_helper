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

def in_text_dialogue(data):
    print(data.text)
    prompt = f"""
    You are a logical reasoning assistant that reviews essays.

    This is an essay:
    {data.text}
    That is the end of the essay.

    If there are any logical fallacies, false statements, or argumentative issues, return them in **this exact JSON format**. Please keep only one key per issue.

    {{"in_text_issues": [{{"issue": "Scientific fallacy in sentence: The world is flat. A solution may be to fix sentence to world is round "}},{{"issue": "Bandwagon fallacy in sentence: Everyone believes in astrology."}}]}}

    if there are no issues, return an empty JSON object like this:
    {{}}
    """
    print(prompt)

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "mistral",  
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()
    print(result.get("response", "No answer"))
    return {"response": result.get("response", "No answer")}

