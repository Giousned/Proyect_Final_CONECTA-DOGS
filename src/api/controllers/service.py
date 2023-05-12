from api.models import db, Services

def create_service():

    try:

        query = db.select(Services).order_by(Services.id)
        services = db.session.execute(query).scalars()

        service_list = [service.serialize() for service in services]

        if len(service_list) != 0:
            return {"code": 403, "msg": "Los servicios ya existen en la Base de Datos"}


        # Crear los servicios en la base de datos
        initial_services = [
        {
            "image": "https://cdn.pixabay.com/photo/2017/01/17/16/46/sun-1987414_960_720.png",
            "title": "Guardería de Día",
            "description": "Deja a tu perro durante el día, en casa de un cuidador de Gudog, hasta un máximo de 10 horas al día. De esta manera puedes relajarte en tu trabajo, o cuando estás fuera de casa la mayor parte del día.",
        },
        {
            "image": "https://cdn.pixabay.com/photo/2016/03/31/21/38/canines-1296551_960_720.png",
            "title": "Paseo",
            "description": "¿No puedes pasear a tu perro tanto como te gustaría? Encuentra un paseador que pueda sacarlo tanto tiempo y tan lejos como sea necesario. 60 minutos de paseo para tu perro. La recogida y entrega será en tu casa. ¡No olvides la correa!",
        },
        {
            "image": "https://cdn.pixabay.com/photo/2017/01/17/16/45/night-1987408_960_720.png",
            "title": "Alojamiento Nocturno",
            "description": "¿Buscas a alguien para cuidar de tu perro durante la noche? Elije a uno de nuestros cuidadores para que cuide a tu mascota en su casa cuando te vayas. No olvides entregar su comida, premios, cama, cartilla veterinaria y su juguete favorito.",
        }
        ]

        for service in initial_services:
            new_service = Services(
                image = service["image"],
                title = service["title"], 
                description = service["description"], 
            )
            db.session.add(new_service)
            db.session.commit()

        return {"code": 200, "msg": "¡Servicios creados correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def get_services():

    try:
    
        # Obtener registros de la base de datos
        query = db.select(Services).order_by(Services.id)
        services = db.session.execute(query).scalars()
        

        service_list = [service.serialize() for service in services]

        return {"code": 200, "msg": "Servicios existentes obtenidos", "services": service_list}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}



def get_service(id):

    try:
    
        # Obtener registro de la base de datos
        service = db.get_or_404(Services, id)
        # service = db.session.execute(db.select(service).filter_by(id)).scalars().one()
        
        return {"code": 200, "msg": "Servicio requerido obtenido", "service": service.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def update_service(body, id):

    try:
    
        # Obtener registro de la base de datos
        service = db.get_or_404(Services, id)

        service.image = body["image"]
        service.title = body["title"]
        service.description = body["description"]

        db.session.commit()

        return {"code": 200, "msg": "¡Servicio actualizado correctamente!", "service": service.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def delete_service(id):

    try:
    
        # Obtener registros de la base de datos
        service = db.get_or_404(Services, id)

        db.session.delete(service)
        db.session.commit()

        # query = db.select(service).order_by(service.id)                 # SI DESPUES SE NECESITA UNA LISTA COMPLETA ACTUALIZADA POR PARTE DEL FRONT
        # services = db.session.execute(query).scalars()

        return {"code": 200, "msg": "¡Servicio eliminado correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}
