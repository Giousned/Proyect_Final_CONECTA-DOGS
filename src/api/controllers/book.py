from api.models import db, Books
from flask_jwt_extended import get_jwt_identity


def create_book(body):

    try:

        claves_book = body.keys()

        if not "bookDate" in claves_book or not "serviceId" in claves_book or not "hourPick" in claves_book or not "hourDeliver" in claves_book or not "hourDeliver" in claves_book or not "dogsAcepted" in claves_book or not "dogIdAcepted" in claves_book:
            return {"code": 400, "msg": "¡Información recibida en el Back insuficiente, falta información!"}

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]

        service_id = body["serviceId"]

        query = db.select(Books).filter_by(user_from_id=user_id, service_id=service_id)
        book = db.session.execute(query).scalars().first()

        # Crear una nueva reserva en la base de datos
        new_book = book(
            date = body["bookDate"],
            hourPick = body["hourPick"],
            hourDeliver = body["hourDeliver"],
            dogsAcepted = int(body["dogsAcepted"]),
            dogIdAcepted = int(body["dogIdAcepted"]),
            acepted = False)


        db.session.add(new_book)
        db.session.commit()

        return {"code": 200, "msg": "Reserva creada correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def get_books():

    try:
    
        # Obtener usuarios de la base de datos
        query = db.select(Books).order_by(Books.id)
        books = db.session.execute(query).scalars()
        

        book_list = [book.serialize() for book in books]

        return {"code": 200, "msg": "Reservas existentes obtenidas", "books": book_list}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def get_book(id):

    try:
    
        # Obtener usuario de la base de datos
        book = db.get_or_404(Books, id)
        # book = db.session.execute(db.select(book).filter_by(id)).scalars().one()
        
        return {"code": 200, "msg": "Reserva requerida obtenida", "book": book.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def update_book(body, id):

    try:
    
        # Obtener usuario de la base de datos
        book = db.get_or_404(Books, id)

        book.date = body["bookDate"]
        book.hourPick = body["hourPick"]
        book.hourDeliver = body["hourDeliver"]
        book.dogsAcepted = int(body["dogsAcepted"])
        book.dogIdAcepted = int(body["dogIdAcepted"])
        book.acepted = False


        db.session.commit()

        return {"code": 200, "msg": "¡Datos de la reserva actualizados correctamente!", "book": book.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def acepted_book(id):

    try:
    
        # Obtener usuario de la base de datos
        book = db.get_or_404(Books, id)

        book.acepted = True


        db.session.commit()

        return {"code": 200, "msg": "¡Reserva aceptada por el cuidador!", "book": book.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def delete_book(id):

    try:
    
        # Obtener usuarios de la base de datos
        book = db.get_or_404(Books, id)

        db.session.delete(book)
        db.session.commit()

        # query = db.select(book).order_by(book.id)                 # SI DESPUES SE NECESITA UNA LISTA COMPLETA ACTUALIZADA POR PARTE DEL FRONT
        # books = db.session.execute(query).scalars()

        return {"code": 200, "msg": "¡Reserva eliminada correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}