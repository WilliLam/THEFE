from flask import Flask
from flask import render_template, json, url_for, jsonify
import os

app = Flask(__name__)
with open('data.json') as f:
    j = json.load(f)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/company')
def company():
    return render_template('company.html')

@app.route('/farm')
def farm():
    return render_template('farm.html')
@app.route('/individual')
def individual():
    return render_template('individual.html')

@app.route('/food_bank')
def food_bank():
    return render_template('food_bank.html')


@app.route('/json',methods=['GET','POST'])
def json():
    #= [{"id":1, "username":"john"},{"id":2,"username":"doe"}]
   return jsonify(j=j)

app.run(host='0.0.0.0',port=5005,debug=False)