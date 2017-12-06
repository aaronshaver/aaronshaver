from xml.dom import minidom

xmldoc = minidom.parse('sample_data.xml')

for subelement in xmldoc.getElementsByTagName("variable"):
    if subelement.hasAttribute("description"):
        if subelement.attributes['description'].value == "Station Pressure":
            print(subelement.attributes['value'].value)