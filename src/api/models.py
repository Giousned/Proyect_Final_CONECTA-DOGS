from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "User"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    name = db.Column(db.String(30), unique=False, nullable=False)
    last_name = db.Column(db.String(60), unique=False, nullable=False)
    address = db.Column(db.String(150), unique=False, nullable=False)
    city = db.Column(db.String(35), unique=False, nullable=False)
    postal_code = db.Column(db.Integer, unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=False, nullable=False)
    # photo = db.Column(db.String(500), unique=True, nullable=True)     # USAR API CLOUDINARY, HACER LLAMADA Y GAURDARSE LA URL DEVUELTA QUE ES LO QUE SE SUBE A LA BASE DE DATOS
    # country = db.Column(db.String(50), unique=False, nullable=False)
    # birthdate = db.Column(db.Date, unique=False, nullable=False)

#     asistant = relationship("Cuidador", back_populates="user")
#     owner = relationship("Propietario", back_populates="user")


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # "photo": self.photo,
            # "name": self.name,
            # "last_name": self.last_name,
            # "address": self.address,
            # "city": self.city,
            # "postal_code": self.postal_code,
            # "country": self.country,
            # "birthday": self.birthday,
            # "phone": self.phone,
            # do not serialize the password, its a security breach
        }


# class Carer(db.Model):
#     __tablename__ = "Carer"
#     id = db.Column(db.Integer, primary_key=True)

#     user_id = db.Column(db.Integer, ForeignKey("User.id"))

#     user = relationship("User", back_populates="asistant")
#     tarif = relationship("Tarifs", back_populates="cost")


#     def __repr__(self):
#         return f'<Cuidador {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#         }


# class Services(db.Model):
#     __tablename__ = "Services"
#     id = db.Column(db.Integer, primary_key=True)
#     image = db.Column(db.String(350), unique=True, nullable=False)
#     title = db.Column(db.String(35), unique=True, nullable=False)
#     description = db.Column(db.String(500), unique=True, nullable=False)

#     cuidador_id = db.Column(db.Integer, ForeignKey("Cuidador.id"))

#     tarif = relationship("Tarifs", back_populates="service")


#     def __repr__(self):
#         return f'<Servicios {self.title}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "image": self.image,
#             "title": self.title,
#             "description": self.description,
#             "cuidador_id": self.cuidador_id,
#         }


# class Tarifs(db.Model):
#     __tablename__ = "Tarifs"
#     id = db.Column(db.Integer, primary_key=True)
#     price = db.Column(db.Integer, unique=False, nullable=False)

#     cuidador_id = db.Column(db.Integer, ForeignKey("Cuidador.id"))
#     servicios_id = db.Column(db.Integer, ForeignKey("Servicios.id"))

#     cost = relationship("Carer", back_populates="tarif")
#     service = relationship("Services", back_populates="tarif")


#     def __repr__(self):
#         return f'<Tarifas {self.price}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "price": self.price,
#             "cuidador_id": self.cuidador_id,
#             "servicios_id": self.servicios_id,
#         }


# class Owner(db.Model):
#     __tablename__ = "Owner"
#     id = db.Column(db.Integer, primary_key=True)

#     user_id = Column(Integer, ForeignKey("User.id"))
#     dog_id = Column(Integer, ForeignKey("Dog.id"))

#     pet = relationship("Dog", back_populates="owner")
#     user = relationship("User", back_populates="owner")


#     def __repr__(self):
#         return f'<Propietario {self.id}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "dog_id": self.dog_id,
#         }


# class Dog(db.Model):
#     __tablename__ = "Dog"
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(35), unique=False, nullable=False)
#     photo = db.Column(db.String(500), unique=True, nullable=True)         # USAR API CLOUDINARY, HACER LLAMADA Y GAURDARSE LA URL DEVUELTA QUE ES LO QUE SE SUBE A LA BASE DE DATOS
#     breed = db.Column(db.String(50), unique=False, nullable=False)
#     birthdate = db.Column(db.Date, unique=False, nullable=False)
#     sex = db.Column(db.String(20), unique=False, nullable=False)
#     dog_size = db.Column(db.String(20), unique=False, nullable=True)
#     sterilized = db.Column(db.Boolean, unique=False, nullable=False)
#     social_cats = db.Column(db.Boolean, unique=False, nullable=False)
#     social_kids = db.Column(db.Boolean, unique=False, nullable=False)
#     social_dogs = db.Column(db.Boolean, unique=False, nullable=False)
#     microchip = db.Column(db.Integer, unique=True, nullable=False)
#     activity_level = db.Column(db.String(20), unique=False, nullable=True)
#     observations = db.Column(db.String(500), unique=False, nullable=True)

#     propietario_id = Column(db.Integer, ForeignKey("Propietario.id"))

#     owner = relationship("Owner", back_populates="pet")


#     def __repr__(self):
#         return f'<Dog {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "photo": self.photo,
#             "breed": self.breed,
#             "birthdate": self.birthdate,
#             "sex": self.sex,
#             "dog_size": self.dog_size,    
#             "sterilized": self.sterilized,
#             "social_cats": self.social_cats,
#             "social_kids": self.social_kids,
#             "social_dogs": self.social_dogs,
#             "microchip": self.microchip,
#             "activity_level": self.activity_level,
#             "observations": self.observations,
#         }




#     daily_food_rations = db.Column(db.String, unique=False, nullable=False)
#     meal_times = db.Column(db.String, unique=False, nullable=False)
#     schedule_walks = db.Column(db.String, unique=False, nullable=False)
#     caretaker_comments = db.Column(db.String, unique=False, nullable=False)
