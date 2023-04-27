from api.models import db, Tarifs

def create_tarif(body):

    try:

        claves_tarif = body.keys()

        if not "priceNurseryDay" in claves_tarif or not "priceWalk" in claves_tarif or not "priceNurseryNight" in claves_tarif:
            return {"code": 400, "msg": "No one tarif to register"}

        # Crear un nuevo registro en la base de datos
        # if body["priceNurseryDay"]:
        #     new_tarif = tarif(user_id = ???????)
        
        # if body["priceWalk"]:
        #     new_tarif = tarif(user_id = ???????)
        
        # if body["priceNurseryNight"]:
        #     new_tarif = tarif(user_id = ???????)


        db.session.add(new_tarif)
        id_tarif = new_tarif.id
        
        db.session.commit()

        return {"code": 200, "msg": "All ok", "id": id_tarif}          #ID para rutas

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}


def get_tarifs():

    try:
    
        # Obtener registros de la base de datos
        query = db.select(Tarifs).order_by(Tarifs.id)
        tarifs = db.session.execute(query).scalars()
        

        tarif_list = [tarif.serialize() for tarif in tarifs]

        return {"code": 200, "msg": "All ok", "tarifs": tarif_list}

    except:
        return {"code": 500, "msg": "Error in server, something was wrong"}



def get_tarif(id):

    try:
    
        # Obtener registro de la base de datos
        tarif = db.get_or_404(Tarifs, id)
        # tarif = db.session.execute(db.select(tarif).filter_by(id)).scalars().one()
        
        return {"code": 200, "msg": "All ok", "tarif": tarif.serialize()}

    except:
        return {"code": 500, "msg": "Error in server, something was wrong"}


def update_tarif(id):

    try:
    
        # Obtener registro de la base de datos
        tarif = db.get_or_404(Tarifs, id)

        # Crear un nuevo registro en la base de datos
        # if body["priceNurseryDay"]:
        #     new_tarif = tarif(user_id = ???????)
        
        # if body["priceWalk"]:
        #     new_tarif = tarif(user_id = ???????)
        
        # if body["priceNurseryNight"]:
        #     new_tarif = tarif(user_id = ???????)

        db.session.commit()

        return {"code": 200, "msg": "tarif update ok", "tarif": tarif.serialize()}

    except:
        return {"code": 500, "msg": "Error in server, something was wrong"}


def delete_tarif(id):

    try:
    
        # Obtener registros de la base de datos
        tarif = db.get_or_404(Tarifs, id)

        db.session.delete(tarif)
        db.session.commit()

        # query = db.select(tarif).order_by(tarif.id)                 # SI DESPUES SE NECESITA UNA LISTA COMPLETA ACTUALIZADA POR PARTE DEL FRONT
        # tarifs = db.session.execute(query).scalars()

        return {"code": 200, "msg": "Delete tarif ok"}

    except:
        return {"code": 500, "msg": "Error in server, something was wrong"}

