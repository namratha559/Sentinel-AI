from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.database.crud import get_history

router = APIRouter()


@router.get("/history")

def history(db: Session = Depends(get_db)):

    return get_history(db)