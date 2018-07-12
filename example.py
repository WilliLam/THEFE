import json
from bs4 import BeautifulSoup
import requests
import time
from random import randint
import csv

def scrape_news_summaries(s):
    time.sleep(randint(0, 2))  # relax and don't let google be angry
    r = requests.get("http://www.google.co.uk/search?q="+s+"&tbm=nws")
    print(r.status_code)  # Print the status code
    content = r.text
    news_summaries = []
    soup = BeautifulSoup(content, "html.parser")
    st_divs = soup.findAll("div", {"class": "st"})
    for st_div in st_divs:
        news_summaries.append(st_div.text)
    return news_summaries


list = scrape_news_summaries("recycling hong kong")
#l = scrape_news_summaries("""T-Notes""")

l = [[i] for i in list]
#print(list)
def chunks(l, n):
    """Yield successive n-sized chunks from l."""
    for i in range(0, len(l), n):
        yield l[i:i+n]

result = [{"title%d" % (i + 1): chunk[i][0] for i in range(len(chunk))}
            for chunk in chunks(l, 7)]
#return result
#list = []
print(result)


with open('data.json', 'w') as outfile:
    json.dump(result, outfile)


