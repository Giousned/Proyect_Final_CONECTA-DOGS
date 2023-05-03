"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from api.models import User, Services, Tariffs, Dog                                         # from models import Person
from api.controllers.user import create_user, get_users, get_user, update_user, delete_user
from api.controllers.dog import create_dog, get_dogs, get_dog, update_dog, delete_dog
from api.controllers.service import create_service, get_services, get_service, update_service, delete_service
from api.controllers.tarif import create_tariff, get_tariffs, get_tariff, update_tariff, delete_tariff



ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False


# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://user:pass@localhost/db?charset=utf8"
    # app.config['SQLALCHEMY_CHARSET'] = 'utf8mb4'
    # mysql://user:pass@localhost/db?charset=utf8
    # sqlite:////tmp/test.db        # ORIGINAL CON EL BOILERPLATE

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

#  Configura la extensión Flask-JWT-Extended
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET') # ESTA PALABRA GENERA LOS TOKENS UNICOS Y NO SE DEBE COMPARTIR!!!           (# ¡Cambia las palabras "super-secret" por otra cosa!)
jwt = JWTManager(app)                                       # SE PONE EN ENV PARA NO SUBIRSE A LA NUBE Y QUE SEA SECRETA

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')


# RUTAS PARA EL REGISTRO DE USUARIO Y LAS PETICIONES DE USER(S)/CRUD DESDE EL FRONT
@app.route("/signup", methods=["POST"])
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


@app.route("/users", methods=["GET"])
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


@app.route("/users/<int:id>", methods=["GET","PUT","DELETE"])
def users_id(id):

    try:

        body = request.json

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "GET":
            user_response = get_user(id)

        if request.method == "PUT":
            user_response = update_user(body, id)

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
@app.route("/signup-dog", methods=["POST"])
@jwt_required()
def signup_dog():

    try:

        body = request.json

        # Rellenar la tabla de la DB, con el registro de Perro
        dog_response = create_dog(body)
        if dog_response["code"] != 200:
            return jsonify(dog_response)

        return jsonify({"code": 200, "msg": "Todo ha ido bien"}), 200

    except Exception as error:
        print(error)
        return jsonify(dog_response), dog_response["code"]


@app.route("/dogs", methods=["GET"])
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


@app.route("/dogs/<int:id>", methods=["GET","PUT","DELETE"])
def dogs_id(id):

    try:

        body = request.json

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "GET":
            dog_response = get_dog(id)

        if request.method == "PUT":
            dog_response = update_dog(body, id)

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
@app.route("/signup-service", methods=["POST"])
@jwt_required()
def signup_service():

    try:

        body = request.json

        # Rellenar la tabla de la DB, con el registro de 1 Servicio nuevo por parte de los "cuidadores"
        service_response = create_service(body)
        if service_response["code"] != 200:
            return jsonify(service_response)

        return jsonify({"code": 200, "msg": "Todo ha ido bien"}), 200

    except Exception as error:
        print(error)
        return jsonify(service_response), service_response["code"]


@app.route("/services", methods=["GET"])
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


@app.route("/services/<int:id>", methods=["GET","PUT","DELETE"])
def services_id(id):

    try:

        body = request.json

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "GET":
            service_response = get_service(id)

        if request.method == "PUT":
            service_response = update_service(body, id)

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
@app.route("/signup-tariff", methods=["POST"])
@jwt_required()
def signup_tariff():

    try:

        body = request.json

        # Rellenar la tabla de la DB, con el registro de 1 Servicio nuevo por parte de los "cuidadores"
        tariff_response = create_tariff(body)
        if tariff_response["code"] != 200:
            return jsonify(tariff_response)

        return jsonify({"code": 200, "msg": "Todo ha ido bien"}), 200

    except Exception as error:
        print(error)
        return jsonify(tariff_response), tariff_response["code"]


@app.route("/tariffs", methods=["GET"])
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


@app.route("/tariffs/<int:id>", methods=["GET","PUT","DELETE"])
def tariffs_id(id):

    try:

        body = request.json

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "GET":
            tariff_response = get_tariff(id)

        if request.method == "PUT":
            tariff_response = update_tariff(body, id)

        if request.method == "DELETE":
            tariff_response = delete_tariff(id)

        if tariff_response["code"] != 200:
            return jsonify(tariff_response)

        return jsonify(tariff_response)

    except Exception as error:
        print(error)
        return jsonify(tariff_response), tariff_response["code"]



# RUTA PARA CREAR LOS 3 SERVICIOS EN LA BASE DE DATOS INICIAL CADA VEZ
@app.route("/config-install", methods=["GET"])
def config_services():

    try:

        # Rellenar la tabla de la DB, con el registro de Usuario
        config_response = create_service()

        return jsonify({"code": 200, "msg": "Todo ha ido bien"}), 200

    except Exception as error:
        print(error)
        return jsonify({"code": 500, "msg": "No ha ido bien"})



#############################################################
# Crea una ruta para autenticar a los usuarios y devolver el token JWT.
# La función create_access_token() se utiliza para generar el JWT.
@app.route("/token", methods=["POST"])
def create_token():

    try:
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        if email == None or password == None:
            return {"code": 400, "msg": "Insert and email or password"}

        # Consulta la base de datos por el nombre de usuario y la contraseña
        # user = User.filter.query(email=email).first()                   # No sé como hacer esta query segun el metodo de la academia
        query = db.session.query(User).filter(User.email == email)
        user = db.session.execute(query).scalars().one()

        if user is None:
            # el usuario no se encontró en la base de datos
            return jsonify({"msg": "Bad email or password"}), 401       # SIEMPRE PONER EMAIL O PASS, NUNCA DECIR 1 SOLA DE LAS 2 ESTÁ MAL, MUCHA INFORMACIÓN GRATIS PARA LOS HACKERS


        if password == user.password:
            # crea un nuevo token con la info del usuario y us id dentro
            access_token = create_access_token(identity=user.serialize())
            return jsonify({ "token": access_token, "user": user.serialize() })
        else:
            return jsonify({"msg": "Bad email or password"}), 401
        
    except Exception as error:
        print(error)
        return jsonify({"code": 500, "msg": "Error in server, something was wrong"})




# Protege una ruta con jwt_required, bloquea las peticiones
# sin un JWT válido presente.
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_email = get_jwt_identity()
    # user = User.filter.get(current_user_email)        # No sé como hacer esta query segun el metodo de la academia

    query = db.session.query(User).filter(User.email == current_user_email)

    user = db.session.execute(query).scalars().one()

    return jsonify({"id": user.id, "email": user.email }), 200







# HARCODEANDO PRUEBA FACIL DE EMAIL
# if email != "test" or password != "test":
#     return jsonify({"msg": "Bad email or password"}), 401





###################################################################
# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)