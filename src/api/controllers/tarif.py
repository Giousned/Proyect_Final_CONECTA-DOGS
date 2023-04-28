from api.models import db, Tariffs

def create_tariff(body):

    try:

        claves_tariff = body.keys()

        if not "price" in claves_tariff:
            return {"code": 400, "msg": "No one tariff to register"}

        new_tariff = Tariffs(
            price = body["price"],
        )


        db.session.add(new_tarif)
        id_tariff = new_tariff.id
        
        db.session.commit()

        return {"code": 200, "msg": "All ok", "id": id_tariff}          #ID para rutas

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}


def get_tariffs():

    try:
    
        # Obtener registros de la base de datos
        query = db.select(Tariffs).order_by(Tariffs.id)
        tariffs = db.session.execute(query).scalars()
        

        tariff_list = [tariff.serialize() for tariff in tariffs]

        return {"code": 200, "msg": "All ok", "tariffs": tariff_list}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}
        

def get_tariff(id):

    try:
    
        # Obtener registro de la base de datos
        tariff = db.get_or_404(Tariffs, id)
        # tariff = db.session.execute(db.select(Tariff).filter_by(id)).scalars().one()
        
        return {"code": 200, "msg": "All ok", "tariff": tariff.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}


def update_tariff(body, id):

    try:
    
        # Obtener registro de la base de datos
        tariff = db.get_or_404(Tarifs, id)

        tarif.price = body["price"]


        db.session.commit()

        return {"code": 200, "msg": "tariff update ok", "tariff": tarif.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}


def delete_tariff(id):

    try:
    
        # Obtener registros de la base de datos
        tariff = db.get_or_404(Tariffs, id)

        db.session.delete(tariff)
        db.session.commit()

        # query = db.select(Tariff).order_by(Tariff.id)                 # SI DESPUES SE NECESITA UNA LISTA COMPLETA ACTUALIZADA POR PARTE DEL FRONT
        # tariffs = db.session.execute(query).scalars()

        return {"code": 200, "msg": "Delete tariff ok"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "Error in server, something was wrong"}

