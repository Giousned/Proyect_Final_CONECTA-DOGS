from api.models import db, User

def create_user(body):

    try:
    
        #  claves_user = body.keys()

#         if not "first_name" in claves_member or not "age" in claves_member or not "lucky_numbers" in claves_member:
#             return {"code": 400, "mensaje": "Falta el nombre, edad o los números favoritos"}
# if not type(x) is int:
#   raise TypeError("Only integers are allowed") 
#   raise Exception("Sorry, no numbers below zero")

        if body["email"] == None or body["password"] == None:
            return {"code": 400, "msg": "Insert and email or password"}


        # Crear un nuevo usuario en la base de datos
        new_user = User(
            email = body["email"],
            password = body["password"], 
            is_active = True)
            # photo = body["photoUser"],
            # name = body["nameUser"], 
            # last_name = body["lastnameUser"], 
            # address = body["address"], 
            # city = body["province"], 
            # postal_code = body["postalCode"], 
            # phone_number = body["phone"])     
            # # country = body["email"], birthdate = body["email"],

        db.session.add(new_user)
        id_user = new_user.id

        db.session.commit()

        return {"code": 200, "msg": "All ok", "user": new_user, "id": id_user}

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