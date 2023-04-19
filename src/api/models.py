from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    # photo = db.Column(db.String(200), unique=True, nullable=False)
    # name = db.Column(db.String(20), unique=False, nullable=False)
    # last_name = db.Column(db.String(50), unique=False, nullable=False)
    # address = db.Column(db.String(100), unique=False, nullable=False)
    # city = db.Column(db.String(50), unique=False, nullable=False)
    # postal_code = db.Column(db.Integer, unique=False, nullable=False)
    # country = db.Column(db.String(50), unique=False, nullable=False)
    # birthdate = db.Column(db.Date, unique=False, nullable=False)
    # phone_number = db.Column(db.Integer, unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)


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
            # "phone_number": self.phone_number,
            # do not serialize the password, its a security breach
        }


# class Cuidador(db.Model):
#     __tablename__ = "Cuidador"
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, ForeignKey("user.id"))

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id
#         }


# class Propietario(db.Model):
#     __tablename__ = "Propietario"
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = Column(Integer, ForeignKey("user.id"))
#     dog_id = Column(Integer, ForeignKey("dog.id"))

#     pet = relationship("Dog", back_populates="owner")

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "dog_id": self.dog_id
#         }


# class Dog(db.Model):
#     __tablename__ = "Dog"
#     id = db.Column(db.Integer, primary_key=True)
#     photo = db.Column(db.String(240), unique=False, nullable=False)
#     name = db.Column(db.String(120), unique=False, nullable=False)
#     breed = db.Column(db.String(50), unique=False, nullable=False)
#     birthdate = db.Column(db.Date, unique=False, nullable=False)
#     sex = db.Column(db.String(20), unique=False, nullable=False)
#     dog_size = db.Column(db.String(30), unique=False, nullable=False)
#     sterilized = db.Column(db.String(30), unique=False, nullable=False)
#     social_cats = db.Column(db.Boolean, unique=False, nullable=False)
#     social_kids = db.Column(db.Boolean, unique=False, nullable=False)
#     social_dogs = db.Column(db.Boolean, unique=False, nullable=False)
#     microchip = db.Column(db.Integer, unique=False, nullable=False)
#     observations = db.Column(db.String, unique=False, nullable=False)
#     daily_food_rations = db.Column(db.String, unique=False, nullable=False)
#     meal_times = db.Column(db.String, unique=False, nullable=False)
#     schedule_walks = db.Column(db.String, unique=False, nullable=False)
#     activity_level = db.Column(db.String, unique=False, nullable=False)
#     caretaker_comments	= db.Column(db.String, unique=False, nullable=False)
#     propietario_id = Column(Integer, ForeignKey("propietario.id"))

#     owner = relationship("Propietario", back_populates="pet")


#     def __repr__(self):
#         return f'<Dog {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "photo": self.photo,
#             "name": self.name,
#             "size": self.size,
#             "weight": self.weight,
#             "breed": self.breed,
#             "birthdate": self.birthdate,
#             "gender": self.gender,
#             "neutered": self.neutered,
#             "social_cat": self.social_cat,
#             "social_kids": self.social_kids,
#             "social_dogs": self.social_dogs,
#             "microchip": self.microchip,
#             "feed": self.feed,
#             "feed_time": self.feed_time,
#             "walk": self.walk,
#             "activity": self.activity,
#             "alone": self.alone,
#             "house": self.house,
#             "other_details": self.other_details,
#             # do not serialize the password, its a security breach
#         }