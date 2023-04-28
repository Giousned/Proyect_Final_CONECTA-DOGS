from api.models import db, Dog

def create_dog(body):

    try:

        claves_dog = body.keys()

        if not "dogName" in claves_dog or not "breed" in claves_dog or not "Date" in claves_dog or not "dogSex" in claves_dog or not "radioSizeDog" in claves_dog or not "neutered" in claves_dog or not "socialCats" in claves_dog or not "socialKids" in claves_dog or not "socialDogs" in claves_dog or not "radioActivity" in claves_dog or not "microchip" in claves_dog or not "observations" in claves_dog:
            return {"code": 400, "msg": "Missing data in the forms"}

        # Crear un nuevo usuario en la base de datos
        new_dog = Dog(
            name = body["dogName"],
            breed = body["breed"],
            birthdate = body["Date"],
            sex = body["dogSex"],
            dog_size = body["radioSizeDog"],
            sterilized = body["neutered"],
            social_cats = body["socialCats"],
            social_kids = body["socialKids"],
            social_dogs = body["socialDogs"],
            activity_level = body["radioActivity"],
            microchip = int(body["microchip"]),
            observations = body["observations"])
            # photo = body["dogPhoto"],

        db.session.add(new_dog)
        id_dog = new_dog.id
        
        db.session.commit()

        return {"code": 200, "msg": "All ok", "id": id_dog}          #ID para rutas

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}


def get_dogs():

    try:
    
        # Obtener usuarios de la base de datos
        query = db.select(Dog).order_by(Dog.id)
        dogs = db.session.execute(query).scalars()
        

        dog_list = [dog.serialize() for dog in dogs]

        return {"code": 200, "msg": "All ok", "dogs": dog_list}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}


def get_dog(id):

    try:
    
        # Obtener usuario de la base de datos
        dog = db.get_or_404(Dog, id)
        # dog = db.session.execute(db.select(dog).filter_by(id)).scalars().one()
        
        return {"code": 200, "msg": "All ok", "dog": dog.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}


def update_dog(body, id):

    try:
    
        # Obtener usuario de la base de datos
        dog = db.get_or_404(Dog, id)

        dog.name = body["dogName"]
        dog.birthdate = body["Date"]
        dog.breed = body["breed"]
        dog.sex = body["dogSex"]
        dog.dog_size = body["radioSizeDog"]
        dog.sterilized = body["neutered"]
        dog.social_cats = body["socialCats"]
        dog.social_kids = body["socialKids"]
        dog.social_dogs = body["socialDogs"]
        dog.activity_level = body["radioActivity"]
        dog.microchip = int(body["microchip"])
        dog.observations = body["observations"]

        db.session.commit()

        return {"code": 200, "msg": "dog update ok", "dog": dog.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}


def delete_dog(id):

    try:
    
        # Obtener usuarios de la base de datos
        dog = db.get_or_404(Dog, id)

        db.session.delete(dog)
        db.session.commit()

        # query = db.select(dog).order_by(dog.id)                 # SI DESPUES SE NECESITA UNA LISTA COMPLETA ACTUALIZADA POR PARTE DEL FRONT
        # dogs = db.session.execute(query).scalars()

        return {"code": 200, "msg": "Delete dog ok"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}