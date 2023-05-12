from api.models import db, Dog
from flask_jwt_extended import get_jwt_identity

# import requests
# import json 

def create_dog(body):

    try:

        claves_dog = body.keys()

        if not "dogName" in claves_dog or not "breed" in claves_dog or not "dogBirth" in claves_dog or not "dogSex" in claves_dog or not "neutered" in claves_dog or not "socialCats" in claves_dog or not "socialKids" in claves_dog or not "socialDogs" in claves_dog or not "microchip" in claves_dog:
            return {"code": 400, "msg": "¡Información recibida en el Back insuficiente, falta información!"}

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]

        # Crear un nuevo perro en la base de datos
        new_dog = Dog(
            user_id = user_id,
            dogName = body["dogName"],
            breed = body["breed"],
            dogBirth = body["dogBirth"],
            dogSex = body["dogSex"],
            dogSize = body["dogSize"],
            neutered = bool(body["neutered"]),
            socialCats = bool(body["socialCats"]),
            socialKids = bool(body["socialKids"]),
            socialDogs = bool(body["socialDogs"]),
            dogActivity = body.get("dogActivity", None),
            microchip = int(body["microchip"]),
            dogPhoto = body.get("dogPhoto", None),
            observations = body.get("observations", None))
        

        db.session.add(new_dog)
        db.session.commit()

        # id_dog = new_dog.id

        return {"code": 200, "msg": "Perro creado correctamente!"}         # "id": id_dog #ID para rutas

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def get_dogs():

    try:
    
        # Obtener usuarios de la base de datos
        query = db.select(Dog).order_by(Dog.id)
        dogs = db.session.execute(query).scalars()
        

        dog_list = [dog.serialize() for dog in dogs]

        return {"code": 200, "msg": "Perros existentes obtenidos", "dogs": dog_list}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def get_dog(id):

    try:
    
        # Obtener usuario de la base de datos
        dog = db.get_or_404(Dog, id)
        # dog = db.session.execute(db.select(dog).filter_by(id)).scalars().one()
        
        return {"code": 200, "msg": "Perro requerido obtenido", "dog": dog.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def update_dog(body, id):

    try:
    
        # Obtener usuario de la base de datos
        dog = db.get_or_404(Dog, id)

        dog.dogName = body["dogName"]
        dog.dogBirth = body["dogBirth"]
        dog.breed = body["breed"]
        dog.dogSex = body["dogSex"]
        dog.dogSize = body["dogSize"]
        neutered = bool(body["neutered"])
        socialCats = bool(body["socialCats"])
        socialKids = bool(body["socialKids"])
        socialDogs = bool(body["socialDogs"])
        dog.dogActivity = body.get("dogActivity", None)
        dog.observations = body.get("observations", None)
        dog.dogPhoto = body.get("dogPhoto", None)
        # dog.microchip = int(body["microchip"])        # ESTA DISABLED PARA CAMBIAR EN EL FRONT


        db.session.commit()

        return {"code": 200, "msg": "¡Datos del perro actualizados correctamente!", "dog": dog.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def delete_dog(id):

    try:
    
        # Obtener usuarios de la base de datos
        dog = db.get_or_404(Dog, id)

        db.session.delete(dog)
        db.session.commit()

        # query = db.select(dog).order_by(dog.id)                 # SI DESPUES SE NECESITA UNA LISTA COMPLETA ACTUALIZADA POR PARTE DEL FRONT
        # dogs = db.session.execute(query).scalars()

        return {"code": 200, "msg": "¡Perro eliminado correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}