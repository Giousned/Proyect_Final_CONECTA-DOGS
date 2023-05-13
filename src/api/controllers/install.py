from api.models import db, Dog, User, Tariffs, Services, Books
from api.controllers.service import create_service
from flask_jwt_extended import get_jwt_identity

def install_examples():
    try:

        # Rellenar la tabla de la DB, con el registro de Todo

        # CREANDO SERVICIOS
        config_response = create_service()

        
        # CREANDO USUARIOS
        new_user1 = User(
            email = "dog@gmail.com",
            password = "test", 
            name = "Luis", 
            lastName = "Sanchez", 
            address = "Calle China", 
            province = "Valencia", 
            postalCode = int(30007), 
            phone = int(602457444),
            country = "Spain",
            userPhoto = "https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-style-male-user-avatar-png-image_6531251.jpg",
            birthdate = "2002-02-02",
            is_active = True)

            # latitude = int(body["latitude"]),
            # longitude = body["longitude"], 

        db.session.add(new_user1)

        new_user2 = User(
            email = "asd@gmail.com",
            password = "test", 
            name = "Juan", 
            lastName = "Garcia", 
            address = "Calle Madrid", 
            province = "Cuenca", 
            postalCode = int(50005), 
            phone = int(658789451),
            country = "Spain",
            birthdate = "2001-01-01",
            userPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkPJCbBS9ITxlH3KrAJkxDFRM6jVLj7lcEOm4qp0nQoF1sek6XRScK2uWal5WzIdgWbY&usqp=CAU",
            is_active = True)

            # latitude = int(body["latitude"]),
            # longitude = body["longitude"], 

        db.session.add(new_user2)

        new_user3 = User(
            email = "test@gmail.com",
            password = "test", 
            name = "Pepe", 
            lastName = "Alcaraz", 
            address = "Calle Mayor", 
            province = "Gerona", 
            postalCode = int(70007), 
            phone = int(652145236),
            country = "Spain", 
            birthdate = "2003-03-03",
            userPhoto = "https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-male-user-avatar-png-image_6531261.jpg",
            is_active = True)

            # latitude = int(body["latitude"]),
            # longitude = body["longitude"], 

        db.session.add(new_user3)


        # CREANDO PERROS
        new_dog1 = Dog(
            user_id = 1,
            dogName = "Thor",
            breed = "Callejero",
            dogBirth = "1995-12-21",
            dogSex = "Macho",
            dogSize = "Pequeño",
            neutered = bool(True),
            socialCats = bool(False),
            socialKids = bool(False),
            socialDogs = bool(True),
            dogActivity = "Baja",
            microchip = int(4587111454),
            dogPhoto = "https://img.freepik.com/vector-premium/lindo-perro-marron-avatar_79416-70.jpg?w=2000",
            observations = "El mejor amigo del gato")

        db.session.add(new_dog1)


        new_dog2 = Dog(
            user_id = 1,
            dogName = "Perry",
            breed = "Golden",
            dogBirth = "1991-04-04",
            dogSex = "Macho",
            dogSize = "Mediano",
            neutered = bool(True),
            socialCats = bool(False),
            socialKids = bool(False),
            socialDogs = bool(True),
            dogActivity = "Media",
            microchip = int(1654485541),
            dogPhoto = "https://thumbs.dreamstime.com/b/perro-avatar-de-burdeos-104871472.jpg",
            observations = "El mejor amigo del hombre")

        db.session.add(new_dog2)


        new_dog3 = Dog(
            user_id = 3,
            dogName = "Thor",
            breed = "Husky",
            dogBirth = "1985-02-15",
            dogSex = "Hembra",
            dogSize = "Grande",
            neutered = bool(True),
            socialCats = bool(False),
            socialKids = bool(True),
            socialDogs = bool(False),
            dogActivity = "Alta",
            microchip = int(989745131),
            dogPhoto = "https://static.vecteezy.com/system/resources/previews/000/544/700/original/vector-cute-friendly-cartoon-dog.jpg",
            observations = "El peor perro del mundo")

        db.session.add(new_dog3)


        # CREANDO TARAIFAS/CUIDADORES
        new_tarif1 = Tariffs(
            price = 15,
            user_id = 2,
            service_id = 2)
        
        db.session.add(new_tarif1)

        new_tarif2 = Tariffs(
            price = 35,
            user_id = 2,
            service_id = 3)

        db.session.add(new_tarif2)

        new_tarif3 = Tariffs(
            price = 25,
            user_id = 1,
            service_id = 1)

        db.session.add(new_tarif3)


        # CREANDO RESERVA
        dog_l1 = []
        query1 = db.select(Dog).filter_by(id=1)
        dog1 = db.session.execute(query1).scalars().first()

        dog_l1.append(dog1)

        new_book1 = Books(
            fechaEntrega = "2023-04-10",
            fechaRecogida = "2023-04-10",
            horaEntrega = "22:00",
            horaRecogida = "23:00",
            user_from_id = 1,
            tarif_id = 2,
            dogs = dog_l1,
            mensajeACuidador = "Esto es una prueba de una reserva",
            status = "Pendiente")

        db.session.add(new_book1)
        
        dog_l2 = []
        query2 = db.select(Dog).filter_by(id=2)
        dog2 = db.session.execute(query2).scalars().first()

        dog_l2.append(dog2)


        new_book2 = Books(
            fechaEntrega = "2023-02-05",
            fechaRecogida = "2023-02-05",
            horaEntrega = "17:00",
            horaRecogida = "20:00",
            user_from_id = 1,
            tarif_id = 2,
            dogs = dog_l2,
            mensajeACuidador = "Esto es otra reserva",
            status = "Pendiente")

        db.session.add(new_book2)

        dog_l3 = []
        query3 = db.select(Dog).filter_by(id=3)
        dog3 = db.session.execute(query3).scalars().first()

        dog_l3.append(dog3)

        new_book3 = Books(
            fechaEntrega = "2020-10-20",
            fechaRecogida = "2020-10-20",
            horaEntrega = "10:00",
            horaRecogida = "18:00",
            user_from_id = 3,
            tarif_id = 1,
            dogs = dog_l3,
            mensajeACuidador = "Esto una reserva final",
            status = "Pendiente")

        db.session.add(new_book3)
        

        db.session.commit()
            

        return {"code": 200, "msg": "¡Usuarios, Perros, Tarifas, Reservas (+) Servicios, de inicio/prueba, creados correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}