"""
module docstring
"""

import json
import datetime
import myfitnesspal

def init_client(date):
    """
    boot up mfp with steviehuh
    """
    client = myfitnesspal.Client('steviehuh')
    client_day = client.get_date(date['year'], date['month'], date['day'])
    return (client, client_day)


def parse_date(arg):
    """
    to be used if passing date from node
    """
    date = arg.split('/')
    return dict({'day':date[0], 'month':date[1], 'year':date[2]})

def get_readable_date(date):
    """
    convert a dict date to readable string form
    """
    res = str(date['month']) + '/' + str(date['day']) + '/' + str(date['year'])
    return res


def get_today():
    """
    return current date as dict
    """
    now = datetime.datetime.now()
    return dict({'month':now.month, 'day':now.day, 'year':now.year})

def get_dt_today():
    """
    get today's date as a datettime obj
    """
    today = get_today()
    return datetime.date(today['year'], today['month'], today['day'])

def get_weight(client, date):
    """
    god
    """
    return client.get_measurements('Weight', get_dt_today())[get_dt_today()]

def get_water(client_day):
    """
    this is mfp semantics, the client has a day associated with it.
    """
    return client_day.water

def get_totals(client_day):
    """
    god
    """
    return client_day.totals

def combine_info(weight, water, totals, date):
    """
    aggs
    """
    return {'water' : water, **totals, 'weight' : weight, 'date': date}

def main():
    """
    god
    """
    today = get_today()
    #print(today)
    info = init_client(today)
    client = info[0]
    client_day = info[1]
    weight = get_weight(client, today)
    #print("weight", weight)
    totals = get_totals(client_day)
    #print(totals)
    water = get_water(client_day)
    #print(water)
    res = combine_info(weight, water, totals, get_readable_date(today))
    print(json.dumps(res))

main()
