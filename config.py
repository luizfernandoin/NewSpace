import os
from decouple import config as ENV

DEBUG = True

SECRET_KEY = ENV("SECRET_KEY")

SQLALCHEMY_DATABASE_URI = \
    '{SGBD}://{usuario}:{senha}@{servidor}/{database}'.format(
        SGBD = 'postgresql',
        usuario = ENV("USUARIO"),
        senha = ENV("SENHA"),
        servidor = 'dpg-cioa59mnqqlfegc1k420-a.oregon-postgres.render.com',
        database = ENV("DATABASE")
    )
#postgresql://newspace_user:grGlO9TYFLTisJbwmOHzyhrJUT1SsgPL@dpg-cioa59mnqqlfegc1k420-a.oregon-postgres.render.com/newspace

# pegando o nome do caminho absoluto do diretório e concatenando com o diretório uplouds
UPLOAD_PATH = os.path.dirname(os.path.abspath(__file__)) + '/uploads'