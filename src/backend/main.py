from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from hugging_face import classify_fallacy
from llm import ask_question as ask_llm, in_text_dialogue


app = FastAPI()


# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or ["*"] for testing
    allow_credentials=True,
    allow_methods=["*"],                      # <-- this is critical
    allow_headers=["*"],
)

class AskRequest(BaseModel):
    in_text: bool
    text: str
    question: str

@app.post("/api/chat")
def ask(data: AskRequest):
    return in_text_dialogue(data) if data.in_text else ask_llm(data)

class FallacyRequest(BaseModel):
    text: str

@app.post("/api/fallacy")
def fallacy(data: FallacyRequest):
    return classify_fallacy(data.text)
