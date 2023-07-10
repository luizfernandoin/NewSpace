from app import db


class Users(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(150), nullable=False)
    username = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(30), nullable=False)
    senha = db.Column(db.String(30), nullable=False, unique=True)

    def __init__(self, nome, username, email, senha) -> None:
        self.nome = nome
        self.username = username
        self.email = email
        self.senha = senha

    @staticmethod
    def create(nome, username, email, senha):
        new_user = Users(nome, username, email, senha)
        db.session.add(new_user)
        db.session.commit()
    
    def __repr__(self):
        return f'User %r>' % self.nome