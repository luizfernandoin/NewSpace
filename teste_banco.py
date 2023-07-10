import psycopg2

conn = psycopg2.connect(
        host="localhost",
        database="newspace",
        user='postgres',
        password='armandim')

# Abra um cursor para realizar operações de banco de dados
cur = conn.cursor()

# Execute um comando: isso cria uma nova tabela
# Execute um comando: isso cria uma nova tabela
cur.execute('DROP TABLE IF EXISTS Users;')
cur.execute('CREATE TABLE Users (id serial PRIMARY KEY,'
                                 'nome varchar (150) NOT NULL,'
                                 'username varchar (30) NOT NULL,'
                                 'email varchar (30) NOT NULL,'
                                 'senha varchar (30) NOT NULL);'
                                 )


conn.commit()

cur.close()
conn.close()