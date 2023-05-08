
def check_user(body):
    print("holaaaa")

    claves_user = body.keys()

    if not "email" in claves_user or not "password" in claves_user or not "name" in claves_user or not "lastName" in claves_user or not "address" in claves_user or not "province" in claves_user or not "postalCode" in claves_user or not "phone" in claves_user or not "country" in claves_user or not "birthdate" in claves_user:           # or not "latitude" in claves_user or not "longitude" in claves_user        
        return {"code": 400, "msg": "¡Información recibida en el Back insuficiente, falta información!"}

    if "email" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}

    if "password" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}

    if "name" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}

    if "lastName" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}

    if "address" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}

    if "province" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}

    if "postalCode" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}

    if "phone" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}
    
    if "country" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}

    if "birthdate" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}
    
    if "latitude" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}

    if "longitude" in claves_user:
        return {"code": 200, "msg": "¡Información recibida correcta!"}