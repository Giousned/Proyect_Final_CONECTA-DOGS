
def check_user(body):
    print("holaaaa")

    claves_user = body.keys()

    if not "email" in claves_user or not "password" in claves_user or not "name" in claves_user or not "lastName" in claves_user or not "address" in claves_user or not "province" in claves_user or not "postalCode" in claves_user or not "phone" in claves_user or not "country" in claves_user or not "birthdate" in claves_user:           # or not "latitude" in claves_user or not "longitude" in claves_user        
        return {"code": 400, "msg": "¡Información recibida en el Back insuficiente, falta información!"}

    if "email" in claves_user:
        if "@" in body["email"] and "." in body["email"]:
            return {"code": 200, "msg": "¡Email recibido correctamente!"}
        else:
            return {"code": 400, "msg": "¡No es una dirección de email correcta!"}

    if "password" in claves_user:
        if len(body["password"]) > 4:
            return {"code": 200, "msg": "¡Contraseña recibida correctamente!"}
        else:
            return {"code": 400, "msg": "¡La longitud de la contraseña es demasiado corta!"}

    if "name" in claves_user:
        if body["name"].isalpha():
            return {"code": 200, "msg": "¡Nombre recibido correctamente!"}
        else:
            return {"code": 400, "msg": "¡El nombre contiene números y no es correcto!"}

    if "lastName" in claves_user:
        if body["lastName"].isalpha():
            return {"code": 200, "msg": "¡Apellido recibido correctamente!"}
        else:
            return {"code": 400, "msg": "¡El apellido contiene números y no es correcto!"}

    if "address" in claves_user:
        return {"code": 200, "msg": "¡Dirección recibida correctamente!"}

    if "province" in claves_user:
        return {"code": 200, "msg": "¡Localidad recibida correctamente!"}

    if "postalCode" in claves_user:
        if body["postalCode"].isdigit():
            return {"code": 200, "msg": "¡Código postal recibido correctamente!"}
        elif len(body["postalCode"]) > 5:
            return {"code": 400, "msg": "¡Código postal demasiado largo!"}
        else:
            return {"code": 400, "msg": "¡Código postal contiene letras y no es correcto!"}

    if "phone" in claves_user:
        if body["phone"].isdigit():
            return {"code": 200, "msg": "¡Teléfono recibido correctamente!"}
        elif len(body["postalCode"]) > 9:
            return {"code": 400, "msg": "¡Teléfono demasiado largo!"}
        else:
            return {"code": 400, "msg": "¡¡Teléfono contiene letras y no es correcto!"}
    
    if "country" in claves_user:
        return {"code": 200, "msg": "¡País recibido correctamente!"}

    if "birthdate" in claves_user:
        return {"code": 200, "msg": "¡Fecha nacimiento recibida correctamente!"}
    
    if "latitude" in claves_user:
        return {"code": 200, "msg": "¡Latitud recibida correctamente!"}

    if "longitude" in claves_user:
        return {"code": 200, "msg": "¡Longitud recibida correctamente!"}