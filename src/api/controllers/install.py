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
            dogPhoto = "https://img.freepik.com/vector-premium/avatar-perros-lindos-retrato-cabeza-perrito-adorable-hocico-cachorro-pura-raza-labrador-cara-cachorros-felices-lengua-fuera-ilustracion-vector-plano-hocico-mascotas-encantador-aislado-sobre-fondo-blanco_633472-124.jpg?w=2000",
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
            dogPhoto = "https://img.freepik.com/vector-premium/avatar-perros-lindos-retrato-cabeza-perrito-adorable-hocico-cachorro-pura-raza-labrador-cara-cachorros-felices-lengua-fuera-ilustracion-vector-plano-hocico-mascotas-encantador-aislado-sobre-fondo-blanco_633472-124.jpg?w=2000",
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
            dogPhoto = "https://img.freepik.com/vector-premium/avatar-perros-lindos-retrato-cabeza-perrito-adorable-hocico-cachorro-pura-raza-labrador-cara-cachorros-felices-lengua-fuera-ilustracion-vector-plano-hocico-mascotas-encantador-aislado-sobre-fondo-blanco_633472-124.jpg?w=2000",
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
        # new_book1 = Books(
        #     fechaEntrega = "2023-04-10",
        #     fechaRecogida = "2023-04-10",
        #     horaEntrega = "22:00",
        #     horaRecogida = "23:00",
        #     user_from_id = 1,
        #     tarif_id = 2,
        #     dogs = [<Dog Thor>],
        #     mensajeACuidador = "Esto es una prueba de una reserva",
        #     acepted = False)

        # db.session.add(new_book1)
        

        db.session.commit()
            

        return {"code": 200, "msg": "¡Usuarios, Perros y Tarifas de prueba + Servicios creados correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}