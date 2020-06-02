<h1 align="center"></h1>

## ♻ Ecoleta | Next Level Week - 1st Edition

In this application it is possible to register collection points and types of materials collected, showing them on maps and allowing you to search for the nearest points.

## Index
- ⚙ [Tecnologies](#-tecnologies)
- 💻 [How to run](#-how-to-run)

---

## ⚙ Technologies
  - **Back end**
    - NodeJS
    - Express
    - Typescript
    - Sqlite
    
---

## 💻 How to run

  ```bash
    # Cloning repository
    git clone https://github.com/AugustoMarcelo/ecoleta.git

    # Accesing server
    cd server

    # Creating tables
    yarn run knex:migrate

    # Creating seeds
    yarn run knex:seed
    
    # Running server
    yarn dev
  ```
 
