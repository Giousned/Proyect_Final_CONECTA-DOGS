# import smtplib
from smtplib import SMTP_SSL
from flask_jwt_extended import get_jwt_identity

# from api.models import db


def send_contact_email(body):

    try:

        claves_email = body.keys()


        # sub_token = get_jwt_identity()
        # user_id = sub_token["id"]

        # body["emailContacto"]
        # body["nombreContacto"]

        HOST = "smtp.gmail.com"
        PORT = 465

        SENDER_EMAIL = "conectadogs.gns@gmail.com"
        SENDER_PASS = "sqzoaqfiokgcnigx"

        smtp = SMTP_SSL(HOST, PORT)

        # smtp = smtplib.SMTP(HOST, 587)
        # info = smtp.ehlo()
        # smtp.starttls()
        # info = smtp.ehlo()

        smtp.login(SENDER_EMAIL, SENDER_PASS)

        msg = "hellooooooo"
        
        # f'''
        # {body["nombreContacto"]}
        # {body["emailContacto"]}
        # {body["mensajeContacto"]}'''

        smtp.sendmail(SENDER_EMAIL, SENDER_EMAIL, msg)
        print("holaaa", body)


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



# # ENVIAR EMAIL DE CONTACTO
        # # smtp = SMTP_SSL(HOST, PORT)
        # smtp = smtplib.SMTP(HOST, 587)
        # info = smtp.ehlo()
        
        # smtp.starttls()

        # info = smtp.ehlo()

        # print(info)

        # smtp.login(SENDER_EMAIL, SENDER_PASS)

        # msg = f'''
        # {body["nombreContacto"]}
        # {body["emailContacto"]}
        # {body["mensajeContacto"]}''' 

        # smtp.sendmail(SENDER_EMAIL, SENDER_EMAIL, msg)

        # smtp.quit()      
#         # creates SMTP session
#         s = smtplib.SMTP('smtp.gmail.com', 587)
        
#         # start TLS for security
#         s.starttls()
        
#         # Authentication
#         s.login("conectadogs.gns@gmail.com", "sqzoaqfiokgcnigx")              # s.login("sender_email_id", "sender_email_id_password")
        
#         # message to be sent
#         message = body["mensajeContacto"]
        
#         # sending the mail
#         s.sendmail("conectadogs.gns@gmail.com", body["emailContacto"], message)             # s.sendmail("sender_email_id", "receiver_email_id", message)

#         # OTRA FORMA
#         # subject = "Formulario de Contacto"
#         # body = body["mensajeContacto"]
#         # sender = "sender@gmail.com"
#         # recipients = ["recipient1@gmail.com", "recipient2@gmail.com"]
#         # password = "password"

#         # send_email(subject, body, sender, recipients, password)
        


#         # terminating the session
#         s.quit()