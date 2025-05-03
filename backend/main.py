from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str
    model: str
    tone: int
    specificity: int

class PromptResponse(BaseModel):
    suggestions: list[str]

@app.get("/")
async def root():
    return {"message": "PromptCraft Backend"}

@app.post("/rephrase", response_model=PromptResponse)
async def rephrase_prompt(request: PromptRequest):
    # Mock rephrasing for now
    suggestions = [
        f"{request.prompt} with a professional tone",
        f"Detailed: {request.prompt}",
        f"Creative: {request.prompt}",
    ]
    return {"suggestions": suggestions}