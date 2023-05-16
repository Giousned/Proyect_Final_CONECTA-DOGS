import smtplib
from flask_jwt_extended import get_jwt_identity

# from api.models import db


def send_contact_email(body):

    try:

        claves_email = body.keys()

        # sub_token = get_jwt_identity()
        # user_id = sub_token["id"]

        # body["emailContacto"]
        # body["nombreContacto"]

        print(body)
    
        # ENVIAR EMAIL DE CONTACTO
        # creates SMTP session
        s = smtplib.SMTP('smtp.gmail.com', 587)
        
        # start TLS for security
        s.starttls()
        
        # Authentication
        s.login("conectadogs.gns@gmail.com", "hfyggrqsrpsjtkxs")              # s.login("sender_email_id", "sender_email_id_password")
        
        # message to be sent
        message = body["mensajeContacto"]
        
        # sending the mail
        s.sendmail(body["emailContacto"], "conectadogs.gns@gmail.com", message)             # s.sendmail("sender_email_id", "receiver_email_id", message)

        # OTRA FORMA
        # subject = "Formulario de Contacto"
        # body = body["mensajeContacto"]
        # sender = "sender@gmail.com"
        # recipients = ["recipient1@gmail.com", "recipient2@gmail.com"]
        # password = "password"

        # send_email(subject, body, sender, recipients, password)
        


        # terminating the session
        s.quit()
        

        return {"code": 200, "msg": "Email de contacto enviado correctamente"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def send_carer_email(body, id):

    try:
        
        claves_email = body.keys()

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]

        # Enviar emails a los cuidadores


        # Obtener usuario de la base de datos
        user = db.get_or_404(User, id)


        return {"code": 200, "msg": "Email de contacto enviado correctamente"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}