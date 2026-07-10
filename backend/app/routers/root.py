from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def root():
    return {
        "message": "Sentinel AI Backend Running 🚀"
    }