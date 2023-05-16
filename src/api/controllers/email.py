from api.models import db, User
from smtplib import SMTP_SSL
from flask_jwt_extended import get_jwt_identity
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def send_contact_email(body):

    try:

        claves_email = body.keys()

        msg = MIMEMultipart()

        msg['From'] = 'conectadogs.gns@gmail.com'
        msg['To'] = 'conectadogs.gns@gmail.com'
        msg['Subject'] = 'Formulario de contacto'

        mensajeFront = f'''Nombre de Contacto: {body["nombreContacto"]}, 
                        \nEmail de Contacto: {body["emailContacto"]}, 
                        \nMensaje: {body["mensajeContacto"]}.'''


        msg.attach(MIMEText(mensajeFront, 'plain'))
        
        MSG = msg.as_string()

        smtp = SMTP_SSL('smtp.gmail.com', '465')
        print(smtp)

        smtp.ehlo()
        smtp.login('conectadogs.gns@gmail.com', 'sqzoaqfiokgcnigx')

        smtp.sendmail('conectadogs.gns@gmail.com', 'conectadogs.gns@gmail.com', MSG)

        smtp.quit()

        return {"code": 200, "msg": "¡Email de contacto enviado correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}



def send_carer_email(body, id):

    try:
        
        claves_email = body.keys()

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]

        user_carer = db.get_or_404(User.serialize(), id)

        user_owner = db.get_or_404(User.serialize(), user_id)

        # Enviar emails a los cuidadores

        msg = MIMEMultipart()

        msg['From'] = 'conectadogs.gns@gmail.com'
        msg['To'] = user_carer["email"], user_owner["email"]
        msg['Subject'] = 'Información importante respecto a la reserva'

        mensajeFront = f'''Nombre de Contacto: {body["nombreContacto"]}, 
                        \nEmail de Contacto: {body["emailContacto"]}, 
                        \nMensaje: {body["mensajeContacto"]}.'''


        msg.attach(MIMEText(mensajeFront, 'plain'))
        
        MSG = msg.as_string()

        smtp = SMTP_SSL('smtp.gmail.com', '465')
        print(smtp)

        smtp.ehlo()
        smtp.login('conectadogs.gns@gmail.com', 'sqzoaqfiokgcnigx')

        smtp.sendmail('conectadogs.gns@gmail.com', 'conectadogs.gns@gmail.com', MSG)

        smtp.quit()


        # Obtener usuario de la base de datos
        user = db.get_or_404(User, id)


        return {"code": 200, "msg": "¡Email de información, de mi reserva, al cuidador enviado correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}



# # ENVIAR EMAIL DE CONTACTO
# HOST = "smtp.gmail.com"
# PORT = 465

# SENDER_EMAIL = "conectadogs.gns@gmail.com"
# SENDER_PASS = "sqzoaqfiokgcnigx"

# smtp = SMTP_SSL(HOST, PORT)

# # smtp = smtplib.SMTP(HOST, 587)
# # info = smtp.ehlo()
# # smtp.starttls()
# # info = smtp.ehlo()

# smtp.login(SENDER_EMAIL, SENDER_PASS)

# msg = "hellooooooo"

# # f'''
# # {body["nombreContacto"]}
# # {body["emailContacto"]}
# # {body["mensajeContacto"]}'''

# smtp.sendmail(SENDER_EMAIL, SENDER_EMAIL, msg)

# smtp.quit()