"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity
from api.utils import generate_sitemap, APIException
from api.models import User, Services, Tariffs, Dog, Books                                       # from models import Person
from api.controllers.user import create_user, get_users, get_user, get_carers, update_user, delete_user, update_me_user
from api.controllers.dog import create_dog, get_dogs, get_dog, update_dog, delete_dog
from api.controllers.service import create_service, get_services, get_service, update_service, delete_service
from api.controllers.tarif import create_tariff, get_tariffs, get_tariff, update_tariff, delete_tariff
from api.controllers.book import create_book, get_books, get_book, update_book, delete_book, acepted_book, rejected_book
from api.controllers.install import install_examples



api = Blueprint('api', __name__)


# RUTAS PARA EL REGISTRO DE USUARIO Y LAS PETICIONES DE USER(S)/CRUD DESDE EL FRONT
@api.route("/signup", methods=["POST"])
def signup_user():

    try:

        body = request.json

        # Rellenar la tabla de la DB, con el registro de Usuario
        user_response = create_user(body)
        if user_response["code"] != 200:
            return jsonify(user_response)

        return jsonify(user_response), 200

    except Exception as error:
        print(error)
        return jsonify(user_response), user_response["code"]


@api.route("/users", methods=["GET"])
def users():

    try:

         # Obtener info de las tablas de la DB
        users_response = get_users()

        if users_response["code"] != 200:
            return jsonify(users_response)

        return jsonify(users_response["users"])

    except Exception as error:
        print(error)
        return jsonify(users_response), users_response["code"]

@api.route("/carers", methods=["GET"])
@jwt_required()
def carers():

    try:

         # Obtener info de las tablas de la DB
        users_response = get_carers()

        if users_response["code"] != 200:
            return jsonify(users_response)

        return jsonify(users_response["users_carers"])

    except Exception as error:
        print(error)
        return jsonify(users_response), users_response["code"]


@api.route("/users/<int:id>", methods=["GET","PUT","DELETE"])
def users_id(id):

    try:

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "PUT":
            body = request.json
            user_response = update_user(body, id)

        if request.method == "GET":
            user_response = get_user(id)

        if request.method == "DELETE":
            user_response = delete_user(id)

        if user_response["code"] != 200:
            return jsonify(user_response)

        return jsonify(user_response)

    except Exception as error:
        print(error)
        return jsonify(user_response), user_response["code"]


###################################################################
# RUTAS PARA EL REGISTRO DE PERROS Y LAS PETICIONES DE DOG(S)/CRUD DESDE EL FRONT
@api.route("/signup-dog", methods=["POST"])
@jwt_required()
def signup_dog():

    try:

        body = request.json

        # Rellenar la tabla de la DB, con el registro de Perro
        dog_response = create_dog(body)
        if dog_response["code"] != 200:
            return jsonify(dog_response)

        return jsonify(dog_response), 200

    except Exception as error:
        print(error)
        return jsonify(dog_response), dog_response["code"]


@api.route("/dogs", methods=["GET"])
def dogs():

    try:

        # Obtener info de las tablas de la DB
        dogs_response = get_dogs()

        if dogs_response["code"] != 200:
            return jsonify(dogs_response)

        return jsonify(dogs_response["dogs"])

    except Exception as error:
        print(error)
        return jsonify(dogs_response), dogs_response["code"]


@api.route("/dogs/<int:id>", methods=["GET","PUT","DELETE"])
def dogs_id(id):

    try:

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "PUT":
            body = request.json
            dog_response = update_dog(body, id)

        if request.method == "GET":
            dog_response = get_dog(id)

        if request.method == "DELETE":
            dog_response = delete_dog(id)

        if dog_response["code"] != 200:
            return jsonify(dog_response)

        return jsonify(dog_response)

    except Exception as error:
        print(error)
        return jsonify(dog_response), dog_response["code"]


###################################################################
# RUTAS PARA EL REGISTRO DE SERVICIOS POR PARTE DE LOS "CUIDADORES" Y LAS PETICIONES DE SERVICIO(S)/CRUD DESDE EL FRONT
@api.route("/signup-service", methods=["POST"])
@jwt_required()
def signup_service():

    try:

        body = request.json

        # Rellenar la tabla de la DB, con el registro de 1 Servicio nuevo por parte de los "cuidadores"
        service_response = create_service(body)
        if service_response["code"] != 200:
            return jsonify(service_response)

        return jsonify(service_response), 200

    except Exception as error:
        print(error)
        return jsonify(service_response), service_response["code"]


@api.route("/services", methods=["GET"])
def services():

    try:

        # Obtener info de las tablas de la DB
        services_response = get_services()

        if services_response["code"] != 200:
            return jsonify(services_response)

        return jsonify(services_response["services"])

    except Exception as error:
        print(error)
        return jsonify(services_response), services_response["code"]


@api.route("/services/<int:id>", methods=["GET","PUT","DELETE"])
def services_id(id):

    try:

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "PUT":
            body = request.json
            service_response = update_service(body, id)

        if request.method == "GET":
            service_response = get_service(id)

        if request.method == "DELETE":
            service_response = delete_service(id)

        if service_response["code"] != 200:
            return jsonify(service_response)

        return jsonify(service_response)

    except Exception as error:
        print(error)
        return jsonify(service_response), service_response["code"]



###################################################################
# RUTAS PARA EL REGISTRO DE TARIFAS POR PARTE DE LOS "CUIDADORES" Y LAS PETICIONES DE TARIFA(S)/CRUD DESDE EL FRONT
@api.route("/signup-tariff", methods=["POST"])
@jwt_required()
def signup_tariff():

    try:

        body = request.json

        # Rellenar la tabla de la DB, con el registro de 1 Servicio nuevo por parte de los "cuidadores"
        tariff_response = create_tariff(body)
        if tariff_response["code"] != 200:
            return jsonify(tariff_response)

        return jsonify(tariff_response), 200

    except Exception as error:
        print(error)
        return jsonify(tariff_response), tariff_response["code"]


@api.route("/tariffs", methods=["GET"])
def tariffs():

    try:

        # Obtener info de las tablas de la DB
        tariffs_response = get_tariffs()

        if tariffs_response["code"] != 200:
            return jsonify(tariffs_response)

        return jsonify(tariffs_response["tariffs"])

    except Exception as error:
        print(error)
        return jsonify(tariffs_response), tariffs_response["code"]


@api.route("/tariffs/<int:id>", methods=["GET","PUT","DELETE"])
def tariffs_id(id):

    try:

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "PUT":
            body = request.json
            tariff_response = update_tariff(body, id)

        if request.method == "GET":
            tariff_response = get_tariff(id)

        if request.method == "DELETE":
            tariff_response = delete_tariff(id)

        if tariff_response["code"] != 200:
            return jsonify(tariff_response)

        return jsonify(tariff_response)

    except Exception as error:
        print(error)
        return jsonify(tariff_response), tariff_response["code"]



###################################################################
# RUTAS PARA EL REGISTRO DE RESERVAS POR PARTE DE LOS "PROPIETARIOS" Y LAS PETICIONES DE RESERVA(S)/CRUD DESDE EL FRONT
@api.route("/signup-book", methods=["POST"])
@jwt_required()
def signup_book():

    try:

        body = request.json

        # Rellenar la tabla de la DB, con el registro de 1 Reserva nueva por parte de los "propietarios"
        book_response = create_book(body)
        if book_response["code"] != 200:
            return jsonify(book_response)

        return jsonify(book_response)

    except Exception as error:
        print(error)
        return jsonify(book_response), book_response["code"]


@api.route("/books", methods=["GET"])
def books():

    try:

        # Obtener info de las tablas de la DB
        books_response = get_books()

        if books_response["code"] != 200:
            return jsonify(books_response)

        return jsonify(books_response["books"])

    except Exception as error:
        print(error)
        return jsonify(books_response), books_response["code"]


@api.route("/books/<int:id>", methods=["GET","PUT","DELETE"])
def books_id(id):

    try:

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "PUT":
            body = request.json
            book_response = update_book(body, id)

        if request.method == "GET":
            book_response = get_book(id)

        if request.method == "DELETE":
            book_response = delete_book(id)

        if book_response["code"] != 200:
            return jsonify(book_response)

        return jsonify(book_response)

    except Exception as error:
        print(error)
        return jsonify(book_response), book_response["code"]


@api.route("/acepted-book/<int:id>", methods=["GET"])
def confirm_book(id):

    try:

        # Obtener info de las tablas de la DB
        books_response = acepted_book(id)

        if books_response["code"] != 200:
            return jsonify(books_response)

        return jsonify(books_response["books"])

    except Exception as error:
        print(error)
        return jsonify(books_response), books_response["code"]


@api.route("/rejected-book/<int:id>", methods=["GET"])
def deny_book(id):

    try:

        # Obtener info de las tablas de la DB
        books_response = rejected_book(id)

        if books_response["code"] != 200:
            return jsonify(books_response)

        return jsonify(books_response["books"])

    except Exception as error:
        print(error)
        return jsonify(books_response), books_response["code"]




############################################################
# Actualizar mi usuario
@api.route("/update-user", methods=["GET"])
@jwt_required()
def get_me_user():

    try:

        user_response = update_me_user()

        return jsonify(user_response)

    except Exception as error:
        print(error)
        return jsonify({"code": 500, "msg": "¡Error en el servidor, algo fue mal!"})



#############################################################
# Crea una ruta para autenticar a los usuarios y devolver el token JWT.
# La función create_access_token() se utiliza para generar el JWT.
@api.route("/token", methods=["POST"])
def create_token():

    try:
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        if email == None or password == None:
            return {"code": 400, "msg": "Introduzca un email o una contraseña"}

        # Consulta la base de datos por el nombre de usuario y la contraseña
        # user = User.filter.query(email=email).first()                   # No sé como hacer esta query segun el metodo de la academia
        query = db.session.query(User).filter(User.email == email)
        user = db.session.execute(query).scalars().one()

        if user == None:        # user is None
            # el usuario no se encontró en la base de datos
            return jsonify({"msg": "No hay coincidencias en la base de datos"}), 401       # SIEMPRE PONER EMAIL O PASS, NUNCA DECIR 1 SOLA DE LAS 2 ESTÁ MAL, MUCHA INFORMACIÓN GRATIS PARA LOS HACKERS


        if password == user.password:
            # crea un nuevo token con la info del usuario y us id dentro
            access_token = create_access_token(identity=user.serialize())
            return jsonify({"code": 200, "msg": "Inicio de sesión correcto", "token": access_token, "user": user.serialize() })
        else:
            return jsonify({"msg": "Error en el email o en la contraseña"}), 401

    except Exception as error:
        print(error)
        return jsonify({"code": 500, "msg": "¡Error en el servidor, algo fue mal!"})


# EJEMPLO DE RUTA PROTEGIDA - PARA PODER HACER USEEFFECT EN FRONT Y SEGUIR LOGUEADO
# Protege una ruta con jwt_required, bloquea las peticiones sin un JWT válido presente.
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user = get_jwt_identity()
    # user = User.filter.get(current_user_email)        # No sé como hacer esta query segun el metodo de la academia

    query = db.session.query(User).filter(User.email == current_user["email"])
    user = db.session.execute(query).scalars().one()

    access_token = create_access_token(identity=user.serialize())

    return jsonify({ "code": 200, "msg": "Inicio de sesión correcto", "token": access_token, "user": user.serialize() }), 200


# return jsonify({"id": user.id, "email": user.email }), 200
# HARCODEANDO PRUEBA FACIL DE EMAIL
# if email != "test" or password != "test":
#     return jsonify({"msg": "Bad email or password"}), 401




# RUTA PARA CREAR LOS 3 SERVICIOS + USUARIOS/PERROS/TARIFAS EN LA BASE DE DATOS INICIAL CADA VEZ
@api.route("/install-services-users-dogs-books-tarifs", methods=["GET"])
def config_services_examples():

    try:

        # Rellenar la tabla de la DB, con el registro de Todo
        install_response = install_examples()

        if install_response["code"] != 200:
            return jsonify(install_response)

        return jsonify(install_response)

    except Exception as error:
        print(error)
        return jsonify({"code": 500, "msg": "¡Error en el servidor, algo fue mal!"})


# RUTA PARA CREAR LOS 3 SERVICIOS EN LA BASE DE DATOS INICIAL CADA VEZ
@api.route("/config-install", methods=["GET"])
def config_services():

    try:

        # Rellenar la tabla de la DB, con el registro de los Servicios
        config_response = create_service()

        if config_response["code"] != 200:
            return jsonify(config_response)

        return jsonify(config_response)

    except Exception as error:
        print(error)
        return jsonify({"code": 500, "msg": "¡Error en el servidor, algo fue mal!"})




# EJEMPLO DE PRUEBA
# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200