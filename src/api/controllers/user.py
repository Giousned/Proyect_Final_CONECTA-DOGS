from api.models import db, User

def create_user(body):
    
    print(body)

    if body["email"] == None or body["password"] == None:
        return {"code": 400, "msg": "Insert and email or password"}


    # Crear un nuevo usuario en la base de datos
    new_user = User(
        email = body["email"],
        password = body["password"], 
        is_active = True)
        # , 
        # photo = body["photoUser"], name = body["nameUser"], last_name = body["lastnameUser"], address = body["address"], city = body["province"], postal_code = body["postalCode"], phone_number = body["phone"])     # country = body["email"], birthdate = body["email"],

    db.session.add(new_user)
    id_user = new_user.id
    db.session.commit()
    return {"code": 200, "msg": "All ok"}