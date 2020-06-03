<h1 align="center">
  <img width="182" alt="Ecoleta" src="https://user-images.githubusercontent.com/11545976/83693566-b5c94780-a5cc-11ea-893f-dd34d8cb10c1.png">
</h1>

## ♻ Ecoleta | Next Level Week - 1st Edition

In this application it is possible to register collection points and types of materials collected, showing them on maps and allowing you to search for the nearest points.

## Index
- ⚙ [Tecnologies](#-tecnologies)
- 💻 [How to run](#-how-to-run)
- 📷 [Previews](#-previews)

---

## ⚙ Technologies
  - **Back end**
    - NodeJS
    - Express
    - Typescript
    - Sqlite
  
  - **Front end**
    - ReactJS
    - Typescript
    - react-router-dom
    - axios
    - leaflet (Free map)
    - react-leaflet
    
---

## 💻 How to run

  > Cloning the repository
  ```bash
    # Cloning repository
    git clone https://github.com/AugustoMarcelo/ecoleta.git
  ```

  > Running server
  ```bash
    # Accesing server
    cd server

    # Creating tables
    yarn run knex:migrate

    # Creating seeds
    yarn run knex:seed
    
    # Running server
    yarn dev
  ```

  > Running web project
  ```bash
    # Accesing web project
    cd web
    
    # Running web project
    yarn start
  ```

---

## 📷 Previews
> Home Page
![image](https://user-images.githubusercontent.com/11545976/83694247-055c4300-a5ce-11ea-9242-074c8789b583.png)
 
