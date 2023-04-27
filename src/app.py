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
from api.models import User #, Carer, Services, Tarifs, Owner, Dog
from api.controllers.user import create_user, get_users, get_user, update_user, delete_user


#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

#  Configura la extensión Flask-JWT-Extended
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET') # ESTA PALABRA ES LO QUE GENERA LUEGO LOS TOKENS UNICOS Y LO QUE NO SE DEBE COMPARTIR # ¡Cambia las palabras "super-secret" por otra cosa!
jwt = JWTManager(app)                               # LA PONGO EN ENV PARA NO SUBIRLO A LA NUBE Y QUE SEA SECRETA

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


@app.route("/signup", methods=["POST"])
def signup():

    try:

        body = request.json

        # Rellenar la tabla de la DB, con el registro de Usuario
        user_response = create_user(body)
        if user_response["code"] != 200:
            return jsonify(user_response)

        return jsonify({"code": 200, "msg": "Todo ha ido bien"}), 200
            
    except:
        return jsonify(user_response), user_response["code"]
        

@app.route("/users", methods=["GET"])
def users():

    try:

         # Obtener info de las tablas de la DB
        users_response = get_users()

        if users_response["code"] != 200:
            return jsonify(users_response)

        return jsonify(users_response["users"])
            
    except:
        return jsonify(users_response), users_response["code"]


@app.route("/users/<int:id>", methods=["GET","PUT","DELETE"])
def users_id(id):

    try:

        # Obtener, actualizar y borrar info de las tablas de la DB
        if request.method == "GET":
            user_response = get_user(id)

        if request.method == "PUT":
            user_response = update_user(id)

        if request.method == "DELETE":
            user_response = delete_user(id)

        if user_response["code"] != 200:
            return jsonify(user_response)

        return jsonify(user_response)
            
    except:
        return jsonify(user_response), user_response["code"]



































# Crea una ruta para autenticar a los usuarios y devolver el token JWT.
# La función create_access_token() se utiliza para generar el JWT.
@app.route("/token", methods=["POST"])
def create_token():
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
        # crea un nuevo token con el id de usuario dentro
        access_token = create_access_token(identity=email)
        return jsonify({ "token": access_token, "email": email })
    else:
        return jsonify({"msg": "Bad email or password"}), 401

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


# HARCODEANDO PRUEBA FACIL DE EMAIL
# if email != "test" or password != "test":
#     return jsonify({"msg": "Bad email or password"}), 401