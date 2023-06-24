from api.models import db, User
from smtplib import SMTP_SSL
from flask_jwt_extended import get_jwt_identity
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from api.password.password import generate_password



def send_contact_email(body):

    try:

        claves_email = body.keys()

        # ENVIAR EMAIL DE CONTACTO

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

        smtp.ehlo()
        smtp.login('conectadogs.gns@gmail.com', 'sqzoaqfiokgcnigx')

        smtp.sendmail('conectadogs.gns@gmail.com', 'conectadogs.gns@gmail.com', MSG)

        smtp.quit()

        return {"code": 200, "msg": "¡Email de contacto enviado correctamente!"}


    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def send_recovery_email(body):

    try:

        claves_email = body.keys()

        # ENVIAR EMAIL DE RECUPERACIÓN DE PASSWORD

        msg = MIMEMultipart()

        new_pass = str(generate_password())

        msg['From'] = 'conectadogs.gns@gmail.com'
        msg['To'] = 'conectadogs.gns@gmail.com' # body["emailRecovery"]
        msg['Subject'] = 'Email con una nueva contraseña generada'

        mensajeFront = f'''Nombre de Contacto: {body["nombreRecovery"]},  
                        \nMensaje: Aquí le mandamos su nueva contraseña.
                        \n Su nueva contraseña es: {new_pass}.
                        \n¡Haga el favor de actualizarla en cuanto inicie sesión desde su perfil!'''

        msg.attach(MIMEText(mensajeFront, 'plain'))
        
        MSG = msg.as_string()

        smtp = SMTP_SSL('smtp.gmail.com', '465')

        smtp.ehlo()
        smtp.login('conectadogs.gns@gmail.com', 'sqzoaqfiokgcnigx')

        smtp.sendmail('conectadogs.gns@gmail.com', 'conectadogs.gns@gmail.com', MSG)

        smtp.quit()

        return {"code": 200, "msg": "¡Email de recuperación de contraseña enviado correctamente!"}


    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}
      
      

def send_carer_email(body, id):

    try:
        
        claves_email = body.keys()

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]

        user_carer = db.get_or_404(User, id)

        user_owner = db.get_or_404(User, user_id)

        # ENVIAR EMAIL A LOS CUIDADORES Y A LOS PROPIETARIOS PARA QUE SEPAN QUE HAN ENVIADO

        msg = MIMEMultipart()

        msg['From'] = 'conectadogs.gns@gmail.com'
        msg['To'] = [user_carer.email, user_owner.email]
        msg['Subject'] = 'Información importante respecto a la reserva'

        mensajeFront = f'''Nombre de Contacto: {body["nombreContacto"]}, 
                        \nEmail de Contacto: {body["emailContacto"]}, 
                        \nMensaje: {body["mensajeContacto"]}.'''


        msg.attach(MIMEText(mensajeFront, 'plain'))
        
        MSG = msg.as_string()

        smtp = SMTP_SSL('smtp.gmail.com', '465')

        smtp.ehlo()
        smtp.login('conectadogs.gns@gmail.com', 'sqzoaqfiokgcnigx')

        smtp.sendmail('conectadogs.gns@gmail.com', 'conectadogs.gns@gmail.com', MSG)

        smtp.quit()


        # Obtener usuario de la base de datos
        user = db.get_or_404(User, id)


        return {"code": 200, "msg": "¡Email de información, de mi reserva, enviado correctamente al cuidador!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}
