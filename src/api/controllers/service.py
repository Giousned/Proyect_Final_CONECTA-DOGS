from api.models import db, Services

def create_service(body):

    try:

        claves_service = body.keys()

        if not "nurseryDay" in claves_service or not "walk" in claves_service or not "nurseryNight" in claves_service:
            return {"code": 400, "msg": "No one service to register"}

        # Crear un nuevo registro en la base de datos
        # if body["nurseryDay"]:
        #     new_service = Service(user_id = ???????)
        
        # if body["walk"]:
        #     new_service = Service(user_id = ???????)
        
        # if body["nurseryNight"]:
        #     new_service = Service(user_id = ???????)


        db.session.add(new_service)
        id_service = new_service.id
        
        db.session.commit()

        return {"code": 200, "msg": "All ok", "id": id_service}          #ID para rutas

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}


def get_services():

    try:
    
        # Obtener registros de la base de datos
        query = db.select(Services).order_by(Services.id)
        services = db.session.execute(query).scalars()
        

        service_list = [service.serialize() for service in services]

        return {"code": 200, "msg": "All ok", "services": service_list}

    except:
        return {"code": 500, "msg": "Error in server, something was wrong"}



def get_service(id):

    try:
    
        # Obtener registro de la base de datos
        service = db.get_or_404(Services, id)
        # service = db.session.execute(db.select(service).filter_by(id)).scalars().one()
        
        return {"code": 200, "msg": "All ok", "service": service.serialize()}

    except:
        return {"code": 500, "msg": "Error in server, something was wrong"}


def update_service(id):

    try:
    
        # Obtener registro de la base de datos
        service = db.get_or_404(Services, id)

        # if body["nurseryDay"]:
        #     new_service = Service(user_id = ???????)
        
        # if body["walk"]:
        #     new_service = Service(user_id = ???????)
        
        # if body["nurseryNight"]:
        #     new_service = Service(user_id = ???????)

        db.session.commit()

        return {"code": 200, "msg": "service update ok", "service": service.serialize()}

    except:
        return {"code": 500, "msg": "Error in server, something was wrong"}


def delete_service(id):

    try:
    
        # Obtener registros de la base de datos
        service = db.get_or_404(Services, id)

        db.session.delete(service)
        db.session.commit()

        # query = db.select(service).order_by(service.id)                 # SI DESPUES SE NECESITA UNA LISTA COMPLETA ACTUALIZADA POR PARTE DEL FRONT
        # services = db.session.execute(query).scalars()

        return {"code": 200, "msg": "Delete service ok"}

    except:
        return {"code": 500, "msg": "Error in server, something was wrong"}

