# courses-angular

## Aplicatia de Angular

Daca descarcati acest proiect de pe internet, rulati mai intai in folderul in care ati creat proiectul:
```
npm install
```

Tot in folderul in care ati creat proiectul, rulati:
```
ng serve
```

In browser deschideti `http://localhost:4200`.


## Backend-ul de test

Rulati in linia de comanda, in orice folder:

```
json-server https://raw.githubusercontent.com/andreicojea/courses-json-server/main/courses.json
```

Backend-ul de test este accesibil la portul `3000`. Exemple de request-uri:
```
GET http://localhost:3000/courses
GET http://localhost:3000/instructors
```
