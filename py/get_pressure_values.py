import urllib.request
from xml.dom import minidom

# the site doesn't like raw urllib spidering, so we fake a user agent
class AppURLopener(urllib.request.FancyURLopener):
    version = "Mozilla/5.0"

opener = AppURLopener()
response = opener.open(
    'https://www.wrh.noaa.gov/mesowest/getobextXml.php?sid=KPDX&num=72')
xmldoc = minidom.parse(response)

times = []
for subelement in xmldoc.getElementsByTagName("ob"):
    if subelement.hasAttribute("utime"):
        times.append(subelement.attributes['utime'].value)

pressures = []
for subelement in xmldoc.getElementsByTagName("variable"):
    if subelement.hasAttribute("description"):
        if subelement.attributes['description'].value == "Station Pressure":
            pressures.append(subelement.attributes['value'].value)

# TODO: eventually this ought to be Lambda -> API Gateway endpoint

data = str(list(zip(times, pressures)))
formatted_data = data
formatted_data = formatted_data.replace('[', '')
formatted_data = formatted_data.replace(']', '')
formatted_data = formatted_data.replace(')', ']')
formatted_data = formatted_data.replace('(', '[')
formatted_data = formatted_data.replace('\'', '')

file_name = 'data.json'
file = open(file_name, 'w')
file.writelines(formatted_data)