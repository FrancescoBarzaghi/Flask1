#import dellla classe Flask da flask
from flask import Flask, jsonify
from flask_cors import CORS
#inizializziamo flask
#app rappresenta il nostro server
app = Flask(__name__)
CORS(app)
#il decoratore route definisce gli ENDPOINT
#"quando siamo alla route "/" richiama il metodo associato"
@app.route("/")
def index():
    #ora una stringa, dopo un json, prossimamente una select da un db
    data = "ciao stronzo"
    return data

@app.route("/profilo")
def profilo():
    profilo_data = {
        "nome": "Francesco",
        "professione": "professionista nella vita boomber",
        "status": "altolocato"
    }
    return jsonify(profilo_data)
if __name__ == "__main__":
    #avviamo il server
    #debug=True permette il riavvio automatico del server
    #quando modifichiamo il codice
    #e mostra errori dettagliati
    app.run(debug=True,port=5000)