from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import ForeignKey
# from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "User"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    name = db.Column(db.String(30), unique=False, nullable=False)
    lastName = db.Column(db.String(60), unique=False, nullable=False)
    address = db.Column(db.String(150), unique=False, nullable=False)
    province = db.Column(db.String(35), unique=False, nullable=False)
    postalCode = db.Column(db.Integer, unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=False, nullable=False)
    country = db.Column(db.String(50), unique=False, nullable=False)
    aboutMe = db.Column(db.String(300), unique=False, nullable=True)
    birthdate = db.Column(db.String(20), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    userPhoto = db.Column(db.String(500), unique=False, nullable=True)     # USAR API CLOUDINARY, HACER LLAMADA Y GUARDARSE LA URL DEVUELTA QUE ES LO QUE SE SUBE A LA BASE DE DATOS
    # latitude = db.Column(db.String(40), unique=False, nullable=False)
    # longitude = db.Column(db.String(40), unique=False, nullable=False)

    dogs = db.relationship("Dog", back_populates="user")

    tariffs = db.relationship("Tariffs", back_populates="user_to")
    book_from = db.relationship("Books", back_populates="user_from")


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "address": self.address,
            "province": self.province,
            "postalCode": self.postalCode,
            "phone": self.phone,
            "country": self.country,
            "birthdate": self.birthdate,
            "aboutMe": self.aboutMe,
            "userPhoto": self.userPhoto,
            # "latitude": self.latitude,
            # "longitude": self.longitude,
            "dogs": [dog.serialize() for dog in self.dogs],
            "tariffs": [tariff.serialize() for tariff in self.tariffs],
            "book_from": [book.serialize() for book in self.book_from]
        # ¡¡¡¡DO NOT serialize the password, its a security breach!!!
        }

    def serialize_books(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "address": self.address,
            "province": self.province,
            "postalCode": self.postalCode,
            "phone": self.phone,
            "country": self.country,
            "birthdate": self.birthdate,
            "aboutMe": self.aboutMe,
            "userPhoto": self.userPhoto,
        }


class Dog(db.Model):
    __tablename__ = "Dog"
    id = db.Column(db.Integer, primary_key=True)
    dogName = db.Column(db.String(35), unique=False, nullable=False)
    breed = db.Column(db.String(50), unique=False, nullable=False)
    dogBirth = db.Column(db.String(20), unique=False, nullable=False)
    dogSex = db.Column(db.String(20), unique=False, nullable=False)
    dogSize = db.Column(db.String(20), unique=False, nullable=False)
    neutered = db.Column(db.Boolean, unique=False, nullable=False)
    socialCats = db.Column(db.Boolean, unique=False, nullable=False)
    socialKids = db.Column(db.Boolean, unique=False, nullable=False)
    socialDogs = db.Column(db.Boolean, unique=False, nullable=False)
    microchip = db.Column(db.BigInteger, unique=True, nullable=False)
    dogActivity = db.Column(db.String(20), unique=False, nullable=True)
    observations = db.Column(db.String(500), unique=False, nullable=True)
    dogPhoto = db.Column(db.String(500), unique=False, nullable=True)         # USAR API CLOUDINARY, HACER LLAMADA Y GUARDARSE LA URL DEVUELTA QUE ES LO QUE SE SUBE A LA BASE DE DATOS

    user_id = db.Column(db.Integer, db.ForeignKey("User.id"))

    user = db.relationship("User", back_populates="dogs")


    def __repr__(self):
        return f'<Dog {self.dogName}>'

    def serialize(self):
        return {
            "id": self.id,
            "dogName": self.dogName,
            "breed": self.breed,
            "dogBirth": self.dogBirth,
            "dogSex": self.dogSex,
            "dogSize": self.dogSize,    
            "neutered": self.neutered,
            "socialCats": self.socialCats,
            "socialKids": self.socialKids,
            "socialDogs": self.socialDogs,
            "microchip": self.microchip,
            "dogActivity": self.dogActivity,
            "observations": self.observations,
            "dogPhoto": self.dogPhoto,
            "user_id": self.user_id,
        }


class Services(db.Model):
    __tablename__ = "Services"                                # id = 1 PARA nurseryDay // Guardería de Día         id = 2 PARA walk // Paseo       id = 3 PARA nurseryNight // Alojamiento Nocturno
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(350), unique=True, nullable=False)
    title = db.Column(db.String(40), unique=True, nullable=False)
    description = db.Column(db.String(500), unique=True, nullable=False)

    tariff = db.relationship("Tariffs", back_populates="service")

    def __repr__(self):
        return f'<Services {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "image": self.image,
            "title": self.title,
            "description": self.description,
        }

    def serialize_books(self):
        return {
            "title": self.title,
            "description": self.description,
        }


class Tariffs(db.Model):
    __tablename__ = "Tariffs"
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer, unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("User.id"))
    service_id = db.Column(db.Integer, db.ForeignKey("Services.id"))

    service = db.relationship("Services", back_populates="tariff")
    user_to = db.relationship("User", back_populates="tariffs")

    book = db.relationship("Books", back_populates="tariff")


    def __repr__(self):
        return f'<Tariffs {self.price}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "price": self.price,
            "service": self.service.serialize(),
        }
    
    def serialize_books(self):
        return {
            "id": self.id,
            "price": self.price,
            "user_to": self.user_to.serialize_books(),
            "service": self.service.serialize_books()
        }


# note for a Core table, we use the sqlalchemy.Column construct,
# not sqlalchemy.orm.mapped_column                  # Base.metadata,
books_dogs = db.Table(
    "books_dogs",
    db.Column("Books", db.Integer, db.ForeignKey("Books.id"), primary_key=True),
    db.Column("Dog", db.Integer, db.ForeignKey("Dog.id"), primary_key=True),
)


class Books(db.Model):
    __tablename__ = "Books"
    id = db.Column(db.Integer, primary_key=True)
    fechaEntrega = db.Column(db.String, unique=False, nullable=False)
    fechaRecogida = db.Column(db.String, unique=False, nullable=False)
    horaEntrega = db.Column(db.String, unique=False, nullable=False)
    horaRecogida = db.Column(db.String, unique=False, nullable=False)
    mensajeACuidador = db.Column(db.String(500), unique=False, nullable=True)
    status = db.Column(db.String(20), unique=False, nullable=False, default="Pendiente")

    user_from_id = db.Column(db.Integer, db.ForeignKey("User.id"))
    tarif_id = db.Column(db.Integer, db.ForeignKey("Tariffs.id"))

    tariff = db.relationship("Tariffs", back_populates="book")
    user_from = db.relationship("User", back_populates="book_from")
    dogs = db.relationship("Dog", secondary=books_dogs, backref=db.backref("Books"))
    

    def __repr__(self):
        return f'<Book {self.date}>'

    def serialize(self):
        return {
            "id": self.id,
            "fechaEntrega": self.fechaEntrega,
            "fechaRecogida": self.fechaRecogida,
            "horaEntrega": self.horaEntrega,
            "horaRecogida": self.horaRecogida,
            "mensajeACuidador": self.mensajeACuidador,
            "status": self.status,
            "tariff": self.tariff.serialize_books(),
            "user_from": self.user_from.serialize_books(),
            "dogs": [dog.serialize() for dog in self.dogs]
        }
