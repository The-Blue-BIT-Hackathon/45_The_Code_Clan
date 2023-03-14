from flask import Flask, request
import pandas as pd
from flask_cors import CORS
import json
import sqlite3

app = Flask(__name__)
CORS(app)


data = pd.read_csv("mh_tourism1.csv")


@app.route('/get_destination', methods=['POST'])
def get_destination():

    req_data = request.get_json()


    district = req_data['district']
    region = req_data['region']
    activity = req_data['activity']
    price_range = req_data['price_range']
    recommended_for = req_data['recommended_for']



    filtered_data = data.loc[(data['Districts'] == district) &
                         (data['Region'] == region) &
                         (data['Activities'] == activity) &
                         (data['Price_range'] == price_range) &
                         (data['Reccomended_for'] == recommended_for)]


    # if len(filtered_data) == 0:
    #     return {'error': 'No match found'}


    destination = filtered_data['Destination'].values[0]
    name = destination
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM my_table WHERE name=?', (name,))
    rows = cursor.fetchall()
    conn.close()
    data1 = []
    for row in rows:
        data1.append({'name': row[0], 'description': row[1], 'url':row[2]})
    # return jsonify(data)
    res = {
        "description": row[1],
        "name": row[0],
        "url":row[2]

    }
    print("res", res)
    res = json.dumps(res)
    res = json.loads(res)
    return {'context': res}, 200





if __name__=='main':
    app.run(debug=True)
