from api.models import db, User, Tariffs
from flask_jwt_extended import create_access_token, get_jwt_identity
from api.checks.checks_user import check_user
import random
import datetime


# import requests
# import json 


def create_user(body):

    try:

        # checks_response = check_user(body)
        # if checks_response["code"] != 200:
        #     return checks_response["msg"]

        claves_user = body.keys()

        if not "email" in claves_user or not "password" in claves_user or not "name" in claves_user or not "lastName" in claves_user or not "address" in claves_user or not "province" in claves_user or not "postalCode" in claves_user or not "phone" in claves_user or not "country" in claves_user or not "birthdate" in claves_user:           # or not "latitude" in claves_user or not "longitude" in claves_user        
            return {"code": 400, "msg": "¡Información recibida en el Back insuficiente, falta información!"}


        # Crear un nuevo usuario en la base de datos
        new_user = User(
            email = body["email"],
            password = body["password"], 
            name = body["name"], 
            lastName = body["lastName"], 
            address = body["address"], 
            province = body["province"], 
            postalCode = int(body["postalCode"]), 
            phone = int(body["phone"]),
            country = body["country"], 
            birthdate = body["birthdate"],
            userPhoto = "https://static.vecteezy.com/system/resources/previews/005/544/718/large_2x/profile-icon-design-free-vector.jpg",
            is_active = True)

            # access_token = create_access_token(identity=new_user.serialize_register())
            # temporalToken = create_access_token(identity=random.randint(0, 1))
            # dateTaoken = datetime.date()

            # latitude = int(body["latitude"]),
            # longitude = body["longitude"], 

        db.session.add(new_user)
        db.session.commit()
        
        # id_user = new_user.id

        return {"code": 200, "msg": "¡Usuario creado correctamente!" }         # "id": id_user # ID para rutas

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def get_users():

    try:
        
        # Obtener usuarios de la base de datos
        query = db.select(User).order_by(User.id)
        users = db.session.execute(query).scalars()

        user_list = [user.serialize() for user in users]

        return {"code": 200, "msg": "Usuarios existentes obtenidos", "users": user_list}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


    # users = db.session.execute(db.select(User.email).order_by(User.id)).scalars()
    # users = db.session.execute(db.select([User.name, User.email]).order_by(User.id)).scalars()

    # all_users = User.query.all()
    # # planet_serialized = [planet.serialize() for planet in all_planets] array comprehension
    # user_serialized = list(map(lambda user: user.serialize(), all_users))
    #     "result": {
    #         "planets": planet_serialized,
    #         "user": user_serialized }




def get_carers():

    try:

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]
        
        # Obtener usuarios de la base de datos
        query = db.select(User).order_by(User.id)
        users = db.session.execute(query).scalars()

        users_carers_list = [user.serialize() for user in users if len(user.tariffs) != 0 ]

        users_carers_list_without_me = [user for user in users_carers_list if user["id"] != user_id ]

        return {"code": 200, "msg": "Usuarios existentes obtenidos", "users_carers": users_carers_list_without_me}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}

# users_carers_list = list(filter(lambda user.serialize(): len(user.tariffs) != 0, users_carers_list))      # OTRA FORMA DE HACER UN FILTER


def get_user(id):

    try:
    
        # Obtener usuario de la base de datos
        user = db.get_or_404(User, id)
        # user = db.session.execute(db.select(User).filter_by(id)).scalars().one()

        # query = db.select(Tariffs).filter_by(user_id=id)
        # user_tariffs = db.session.execute(query).scalars()

        # serialize_tariffs = [tariff.serialize_books() for tariff in user_tariffs]

        # user = user.serialize()
        # user["book_to"] = serialize_tariffs
        
        return {"code": 200, "msg": "Usuario requerido obtenido", "user": user.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def update_me_user():

    try:

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]
    
        # Obtener usuario de la base de datos
        user = db.get_or_404(User, user_id)

        query = db.select(Tariffs).filter_by(user_id=user_id)
        user_tariffs = db.session.execute(query).scalars()

        serialize_tariffs = [tariff.serialize_books() for tariff in user_tariffs]

        user = user.serialize()
        user["book_to"] = serialize_tariffs

        access_token = create_access_token(identity=user)
        
        return {"code": 200, "msg": "¡Usuario actualizado correctamente!", "user": user, "token": access_token}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def update_user(body, id):

    try:
    
        # Obtener usuario de la base de datos
        user = db.get_or_404(User, id)

        claves_user = body.keys()

        if "password" in claves_user:
            user.password = body["password"]

        if "userPhoto" in claves_user and body["userPhoto"] != "":
            user.userPhoto = body["userPhoto"]
 
        # user.email = body["email"]        # ESTA DISABLED PARA CAMBIAR EN EL FRONT
        user.name = body["name"]
        user.lastName = body["lastName"]
        user.address = body["address"]
        user.province = body["province"]
        user.postalCode = int(body["postalCode"])
        user.phone = int(body["phone"])
        user.country = body["country"]
        user.birthdate = body["birthdate"]
        user.aboutMe = body.get("aboutMe", None)
        user.is_active = True

        # latitude = int(body["latitude"])
        # longitude = body["longitude"]

        db.session.commit()

        return {"code": 200, "msg": "¡Datos del usuario actualizados correctamente!", "user": user.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def delete_user(id):

    try:
    
        # Obtener usuarios de la base de datos
        user = db.get_or_404(User, id)

        db.session.delete(user)
        db.session.commit()

        # query = db.select(User).order_by(User.id)                 # SI DESPUES NECESITA UNA LISTA COMPLETA ACTUALIZADA
        # users = db.session.execute(query).scalars()


        return {"code": 200, "msg": "¡Usuario eliminado correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}





# selected_member = [member for member in users if member["id"] == id]
