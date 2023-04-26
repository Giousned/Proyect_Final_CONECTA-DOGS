from api.models import db, User

def create_user(body):

    try:

        claves_user = body.keys()

        if not "email" in claves_user or not "password" in claves_user or not "name" in claves_user or not "lastName" in claves_user or not "address" in claves_user or not "province" in claves_user or not "postalCode" in claves_user or not "phone" in claves_user:
            return {"code": 400, "msg": "Missing data in the forms"}

        # Crear un nuevo usuario en la base de datos
        new_user = User(
            email = body["email"],
            password = body["password"], 
            name = body["name"], 
            last_name = body["lastName"], 
            address = body["address"], 
            city = body["province"], 
            postal_code = body["postalCode"], 
            phone = body["phone"],
            is_active = True)
            # photo = body["userPhoto"],
            # country = body["country"], 
            # birthdate = body["birthdate"],

        db.session.add(new_user)
        id_user = new_user.id
        
        db.session.commit()

        return {"code": 200, "msg": "All ok", "id": id_user}          #ID para rutas

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}



def get_users():

    try:
    
        # Obtener usuarios de la base de datos
        users = db.session.execute(db.select(User.email).order_by(User.id)).scalars()


        return {"code": 200, "msg": "All ok", "users": list(users)}          #ID para rutas

    except:
        return {"code": 500, "msg": "Error in server, something was wrong"}




# try:       
#         new_member = {     
#         "id": member.get("id",self._generateId()),
#         "first_name": member["first_name"],
#         "last_name": self.last_name,
#         "age": member["age"],
#         "lucky_numbers": member["lucky_numbers"]
#         }

#         self._members.append(new_member)

#         return {"code": 200, "mensaje": "Todo ha ido bien", "members": self._members}

#     except:
#         return {"code": 500}  