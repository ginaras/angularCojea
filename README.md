# courses-angular

Daca descarcati acest proiect de pe internet, rulati mai intai `npm install` in folderul in care ati creat proiectul.

Tot in folderul in care ati creat proiectul, rulati `ng serve`. In browser deschideti `http://localhost:4200`.

Pentru a rula backend-ul de test, rulati in linia de comanda, in orice folder:

```
json-server https://raw.githubusercontent.com/andreicojea/courses-json-server/main/courses.json
```

Serverul de test este accesibil la portul `3000`. Exemple de request-uri:
```
GET http://localhost:3000/courses
GET http://localhost:3000/instructors
```
