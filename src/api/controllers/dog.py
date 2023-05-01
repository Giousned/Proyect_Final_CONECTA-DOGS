from api.models import db, Dog
from flask_jwt_extended import get_jwt_identity

# import requests
# import json 

def create_dog(body):

    try:

        claves_dog = body.keys()

        if not "dogName" in claves_dog or not "breed" in claves_dog or not "dogBirth" in claves_dog or not "dogSex" in claves_dog or not "radioSizeDog" in claves_dog or not "neutered" in claves_dog or not "socialCats" in claves_dog or not "socialKids" in claves_dog or not "socialDogs" in claves_dog or not "radioActivity" in claves_dog or not "microchip" in claves_dog or not "observations" in claves_dog:
            return {"code": 400, "msg": "Missing data in the forms"}

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]       

        # Crear un nuevo usuario en la base de datos
        new_dog = Dog(
            user_id = user_id,
            dogName = body["dogName"],
            breed = body["breed"],
            dogBirth = body["dogBirth"],
            dogSex = body["dogSex"],
            sizeDog = body["dogSize"],
            neutered = body["neutered"],
            socialCats = body["socialCats"],
            socialKids = body["socialKids"],
            socialDogs = body["socialDogs"],
            activity_level = body["dogActivity"],
            microchip = int(body["microchip"]),
            observations = body["observations"])
        
        # if body["dogPhoto"]:
            #     cloudinary.uploader.upload(dog.name + ".mp4", 
            #         folder = body["dogPhoto"],                 # "myfolder/mysubfolder/" 
            #         public_id = dog.name,            # "my_dog"
            #         overwrite = True, 
            #         notification_url = "http://res.cloudinary.com/drlf5uatk", 
            #         resource_type = "photo")
            #     res = requests.get('https://api.cloudinary.com/v1_1/drlf5uatk')
            #     response = json.loads(res.text)
            #     Dog(photo = response)

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

        dog.dogName = body["dogName"]
        dog.dogBirth = body["dogBirth"]
        dog.breed = body["breed"]
        dog.dogSex = body["dogSex"]
        dog.dogSize = body["dogSize"]
        dog.neutered = body["neutered"]
        dog.socialCats = body["socialCats"]
        dog.socialKids = body["socialKids"]
        dog.socialDogs = body["socialDogs"]
        dog.dogActivity = body["dogActivity"]
        dog.microchip = int(body["microchip"])
        dog.observations = body["observations"]

        # if body["dogPhoto"]:
            #     cloudinary.uploader.upload(dog.name + ".mp4", 
            #         folder = body["dogPhoto"],                 # "myfolder/mysubfolder/" 
            #         public_id = dog.name,            # "my_dog"
            #         overwrite = True, 
            #         notification_url = "http://res.cloudinary.com/drlf5uatk", 
            #         resource_type = "photo")
            #     res = requests.get('https://api.cloudinary.com/v1_1/drlf5uatk')
            #     response = json.loads(res.text)
            #     dog.photo = response

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