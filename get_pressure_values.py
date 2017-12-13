import urllib.request
from xml.dom import minidom

# the site doesn't like raw urllib spidering, so we fake a user agent
class AppURLopener(urllib.request.FancyURLopener):
    version = "Mozilla/5.0"

opener = AppURLopener()
response = opener.open('https://www.wrh.noaa.gov/mesowest/getobextXml.php?sid=KPDX')
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

print(list(zip(times, pressures)))