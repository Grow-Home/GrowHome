from flask import Flask
import requests
import json

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/data')
def get_data():
    response_API = requests.get(' https://www.interhyp.de/customer-generation/location/getUnitFromIp')
    return response_API.text

@app.route('/worthBuying')
def check_worth_buying():
    response_API = requests.post(' https://www.interhyp.de/customer-generation/location/buyRentCalculation'
                                 )
    print(response_API.text)
    return response_API.text

@app.route('/marketOverviewSummary')
def market_overview_summary():
    with open('DataForRequests/MarketOverviewSummary.json') as f:
        data = json.load(f)
    print(data)
    response_API = requests.post(' https://www.interhyp.de/customer-generation/interest/marketOverviewSummary',
                                 json=data)
    print(response_API.text)
    return response_API.text

@app.route('/createRepaymentPlan')
def create_repayment_plan():
    response_API = requests.get(' https://www.interhyp.de/customer-generation/calculator/createRepaymentPlan')
    print(response_API.text)
    return response_API.text


if __name__ == '__main__':
    app.run()

