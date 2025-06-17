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

def text_response_to_json(text):
    lines = text.split("\n")
    lines = [line.strip() for line in lines if line.strip()] 
    return {"lines": lines}

def in_text_dialogue(data):
    print(data.text)
    prompt = f"""
    You are a logical reasoning assistant that reviews essays.

    This is an essay:
    {data.text}
    That is the end of the essay.

    If there are any logical fallacies, false statements, or argumentative issues, return them with each issue on a new line. 
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

    # print(response.text.response)

    result = response.json()
    parsed_response = text_response_to_json(result.get("response", "No answer"))
    print(parsed_response)
    return {"response": parsed_response}
