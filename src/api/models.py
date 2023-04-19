from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(240), unique=False, nullable=False)
    address = db.Column(db.String(360), unique=False, nullable=False)
    city = db.Column(db.String(80), unique=False, nullable=False)
    post_code = db.Column(db.Integer, unique=False, nullable=False)
    country = db.Column(db.String(25), unique=False, nullable=False)
    birthdate = db.Column(db.Date, unique=False, nullable=False)
    phone_number = db.Column(db.Integer, unique=False, nullable=False)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "address": self.address,
            "city": self.city,
            "post_code": self.post_code,
            "country": self.country,
            "birthday": self.birthday,
            "phone_number": self.phone_number,
            # do not serialize the password, its a security breach
        }

class Cuidador(db.Model):
    __tablename__ = "Cuidador"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey("user.id"))


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "address": self.address,
            "city": self.city,
            "post_code": self.post_code,
            "country": self.country,
            "birthday": self.birthday,
            "phone_number": self.phone_number,
            # do not serialize the password, its a security breach
        }

class Propietario(db.Model):
    __tablename__ = "Propietario"
    id = db.Column(db.Integer, primary_key=True)

    user_id = Column(Integer, ForeignKey("user.id"))
    dog_id = Column(Integer, ForeignKey("dog.id"))

    pet = relationship("Dog", back_populates="owner")


    def serialize(self):
        return {
            "id": self.id,
            # do not serialize the password, its a security breach
        }

class Dog(db.Model):
    __tablename__ = "Dog"
    id = db.Column(db.Integer, primary_key=True)
    photo = db.Column(db.String(240), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    size = db.Column(db.String(30), unique=False, nullable=False)
    weight = db.Column(db.Float, unique=False, nullable=False)
    breed = db.Column(db.String(50), unique=False, nullable=False)
    birthdate = db.Column(db.Date, unique=False, nullable=False)
    gender = db.Column(db.String(20), unique=False, nullable=False)
    neutered = db.Column(db.Boolean, unique=False, nullable=False)
    social_cat = db.Column(db.Boolean, unique=False, nullable=False)
    social_kids = db.Column(db.Boolean, unique=False, nullable=False)
    social_dogs = db.Column(db.Boolean, unique=False, nullable=False)
    microchip = db.Column(db.Integer, unique=False, nullable=False)
    feed = db.Column(db.Float, unique=False, nullable=False)
    feed_time = db.Column(db.String(20), unique=False, nullable=False)
    walk = db.Column(db.String(20), unique=False, nullable=False)
    activity = db.Column(db.String(20), unique=False, nullable=False)
    alone = db.Column(db.Boolean, unique=False, nullable=False)
    house = db.Column(db.Boolean, unique=False, nullable=False)
    other_details = db.Column(db.String(360), unique=False, nullable=False)

    propietario_id = Column(Integer, ForeignKey("propietario.id"))

    owner = relationship("Propietario", back_populates="pet")


    def __repr__(self):
        return f'<Dog {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "photo": self.photo,
            "name": self.name,
            "size": self.size,
            "weight": self.weight,
            "breed": self.breed,
            "birthdate": self.birthdate,
            "gender": self.gender,
            "neutered": self.neutered,
            "social_cat": self.social_cat,
            "social_kids": self.social_kids,
            "social_dogs": self.social_dogs,
            "microchip": self.microchip,
            "feed": self.feed,
            "feed_time": self.feed_time,
            "walk": self.walk,
            "activity": self.activity,
            "alone": self.alone,
            "house": self.house,
            "other_details": self.other_details,
            # do not serialize the password, its a security breach
        }