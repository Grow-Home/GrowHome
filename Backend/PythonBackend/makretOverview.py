from flask import Flask
import requests
import json

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'



@app.route('/marketOverviewSummary')
def market_overview_summary():
    with open('DataForRequests/MarketOverviewSummary.json') as f:
        data = json.load(f)
    print(data)
    response_API = requests.post(' https://www.interhyp.de/customer-generation/interest/marketOverviewSummary',
                                 json=data)

    data1 = json.loads(response_API.text)
    monthlyPayment=data1[0]["monthlyPayment"]
    totalDuration=data1[0]["totalDuration"]["years"]
    print(monthlyPayment)
    print(totalDuration)

    return response_API.text

if __name__ == '__main__':
    app.run()

