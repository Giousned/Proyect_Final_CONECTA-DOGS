from api.models import db, Dog, Books, Tariffs
from flask_jwt_extended import get_jwt_identity


def create_book(body):

    try:

        claves_book = body.keys()

        if not "tariffId" in claves_book or not "fechaEntrega" in claves_book or not "fechaRecogida" in claves_book or not "horaEntrega" in claves_book or not "horaRecogida" in claves_book or not "dogs" in claves_book:
            return {"code": 400, "msg": "¡Información recibida en el Back insuficiente, falta información!"}

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]

        tariff = db.get_or_404(Tariffs, int(body["tariffId"]))

        dogs_list = []


        for dog in body["dogs"]:
            query = db.select(Dog).filter_by(id=dog["id"])
            dog = db.session.execute(query).scalars().first()
            dogs_list.append(dog)

        # Crear una nueva reserva en la base de datos
        new_book = Books(
            fechaEntrega = body["fechaEntrega"],
            fechaRecogida = body["fechaRecogida"],
            horaEntrega = body["horaEntrega"],
            horaRecogida = body["horaRecogida"],
            user_from_id = user_id,
            tarif_id = tariff.id,
            dogs = dogs_list,
            mensajeACuidador = body.get("mensajeACuidador", None),
            status= "Pendiente")

        db.session.add(new_book)
        db.session.commit()

        return {"code": 200, "msg": "Reserva creada correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def get_books():

    try:
    
        # Obtener reservas de la base de datos
        query = db.select(Books).order_by(Books.id)
        books = db.session.execute(query).scalars()
        

        book_list = [book.serialize() for book in books]

        return {"code": 200, "msg": "Reservas existentes obtenidas", "books": book_list}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def get_book(id):

    try:
    
        # Obtener reserva de la base de datos
        book = db.get_or_404(Books, id)
        # book = db.session.execute(db.select(book).filter_by(id)).scalars().one()
        
        return {"code": 200, "msg": "Reserva requerida obtenida", "book": book.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def update_book(body, id):

    try:
    
        # Obtener reserva de la base de datos
        book = db.get_or_404(Books, id)

        book.fechaEntrega = body["fechaEntrega"]
        book.fechaRecogida = body["fechaRecogida"]
        book.horaEntrega = body["horaEntrega"]
        book.horaRecogida = body["horaRecogida"]
        # book.user_from_id = user_id
        # book.tarif_id = tariff
        # book.dogs = dogs_list
        book.mensajeACuidador = body.get("mensajeACuidador", None)


        db.session.commit()

        return {"code": 200, "msg": "¡Datos de la reserva actualizados correctamente!", "book": book.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def acepted_book(id):

    try:
    
        # Obtener reserva de la base de datos
        book = db.get_or_404(Books, id)

        book.status = "Aceptada"


        db.session.commit()

        return {"code": 200, "msg": "¡Reserva aceptada por el cuidador!", "book": book.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def rejected_book(id):

    try:
    
        # Obtener reserva de la base de datos
        book = db.get_or_404(Books, id)

        book.status = "Rechazada"


        db.session.commit()

        return {"code": 200, "msg": "¡Reserva rechazada por el cuidador!", "book": book.serialize()}

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



# def create_book(body):

#     try:

#         claves_book = body.keys()

#         if not "bookDate" in claves_book or not "serviceId" in claves_book or not "hourPick" in claves_book or not "hourDeliver" in claves_book or not "hourDeliver" in claves_book or not "dogsAcepted" in claves_book or not "dogIdAcepted" in claves_book:
#             return {"code": 400, "msg": "¡Información recibida en el Back insuficiente, falta información!"}

#         books = body["books"]

#         sub_token = get_jwt_identity()
#         user_id = sub_token["id"]

#         for book in books:
#             carer_id = book["carerId"]
#             service_id = book["serviceId"]                # Id del servicio: id = 1 PARA nurseryDay // Alojamiento        id = 2 PARA walk // Paseo       id = 3 PARA nurseryNight // Guardería de Día
#             price = int(book["price"])                          # Precio de cada servicio ofrecido por el usuario

#             query = db.select(Tariffs).filter_by(user_id=carer_id, service_id=service_id)
#             tarif = db.session.execute(query).scalars().first()

#             # query = db.select(Books).filter_by(user_from_id=user_id, service_id=service_id)
#             # book = db.session.execute(query).scalars().first()

#             for dog in book["dogs"]:
#                 # query = db.select(Dogs).filter_by(user_id=user_id, dog_id=dog_id)
#                 # dog = db.session.execute(query).scalars().first()

#                 # Crear una nueva reserva en la base de datos
#                 new_book = Book(
#                     date = body["bookDate"],
#                     hourPick = body["hourPick"],
#                     hourDeliver = body["hourDeliver"],
#                     user_from_id = user_id,
#                     tarif_id = tarif,
#                     acepted = False)
#                     # dogsAcepted = int(body["dogsAcepted"]),