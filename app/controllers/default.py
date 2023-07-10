from app import app, db
from flask import render_template, request, redirect, session, flash, url_for, send_from_directory
from ..models.tables import Users
import os
import time

@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/noticias")
def noticias():
    return render_template('news.html')

@app.route("/estude")
def estude():
    return render_template('study.html')

@app.route("/nsmidia")
def gallery():
    return render_template('gallery.html')

@app.route("/missoes")
def missoes():
    if session['usuario_logado']:
        usuario = Users.query.filter_by(username=session['usuario_logado']).first()
        return render_template('missions.html', user=usuario.id)
    return render_template('missions.html')

@app.route("/sobre")
def sobre():
    return render_template('aboult.html')

if __name__ == "__main__":
    app.run(debug=True)


@app.route('/login')
def login():
    proxima = request.args.get('proxima')
    return render_template('signin.html', proxima=proxima, titulo='Sig-in')

@app.route('/signup')
def signup():
    proxima = request.args.get('proxima')
    return render_template('signup.html', proxima=proxima, titulo='Cadastre-se')

@app.route('/autenticar', methods=['POST',])
def autenticar():
    usuario = Users.query.filter_by(username=request.form['usuario']).first()
    if usuario:
        if request.form['senha'] == usuario.senha:
            session['usuario_logado'] = usuario.username
            flash(usuario.username + ' logado com sucesso!')
            proxima_pagina = request.form['proxima']
            return redirect(proxima_pagina)
        else:
            flash('Usuário ou senha incorretos!')
            return redirect(url_for('login'))
    else:
        flash('Usuário ou senha incorretos!')
        return redirect(url_for('login'))

@app.route('/cadastrar_user', methods=['POST',])
def cadastrar_user():
    nome = request.form['nome']
    username = request.form['usuario']
    email = request.form['email']
    senha = request.form['senha']
    usuario = Users.query.filter_by(username=request.form['usuario']).first()

    if usuario:
        flash('Usuario já existe!')
        return redirect(url_for('signup'))
    else:
        Users.create(nome, username, email, senha)
        flash('Usuário cadastrado com sucesso!')
        session['usuario_logado'] = username
        flash(username + ' logado com sucesso!')
        proxima_pagina = request.form['proxima']
        return redirect(proxima_pagina)

@app.route('/logout')
def logout():
    session['usuario_logado'] = None
    flash('Logout efetuado com sucesso!')
    return redirect(url_for('index'))
