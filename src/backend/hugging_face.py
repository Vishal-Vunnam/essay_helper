
from transformers import pipeline

fallacy_classifier = pipeline("text-classification", model="MidhunKanadan/roberta-large-fallacy-classification")

def classify_fallacy(request):
    text = request
    results = fallacy_classifier(text)
    print(f"Classification results: {results}")
    if results:
        label = results[0]['label']
        score = results[0]['score']
        if score < .7: 
            return {"fallacy": "Undetected", "confidence": 0.0}
        else: 
            return {"fallacy": label, "confidence": score}
    else:
        return {"fallacy": "Unknown", "confidence": 0.0}