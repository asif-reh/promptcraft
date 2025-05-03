import os
from fastapi import FastAPI
import psycopg2
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

@app.get("/db-test")
async def test_db():
    try:
        conn = psycopg2.connect(os.getenv("DATABASE_URL"))
        conn.close()
        return {"message": "Database connection successful"}
    except Exception as e:
        return {"message": f"Database connection failed: {str(e)}"}