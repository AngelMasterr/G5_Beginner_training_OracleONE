import requests
from bs4 import BeautifulSoup

# URL del sitio web que contiene los resultados de la lotería de Santander
url = 'https://www.loteriasantander.gov.co/resultados/'

# Realizar una solicitud GET al sitio web y obtener su contenido HTML
response = requests.get(url)
html = response.content

# Crear una instancia de BeautifulSoup y analizar el contenido HTML
soup = BeautifulSoup(html, 'html.parser')

# Encontrar la tabla que contiene los resultados de la lotería de Santander
tabla_resultados = soup.find('table', {'class': 'table-resultados'})

# Crear una lista vacía para almacenar los resultados
resultados = []

# Iterar a través de todas las filas de la tabla de resultados y extraer los números ganadores
for fila in tabla_resultados.find_all('tr'):
    numeros_ganadores = [int(numeros.text.strip()) for numeros in fila.find_all('td', {'class': 'numeros-ganadores'})]
    if len(numeros_ganadores) > 0:
        resultados.append(numeros_ganadores)

# Imprimir los resultados
print(resultados)