<h1 align="center">
  <img width="182" alt="Ecoleta" src="https://user-images.githubusercontent.com/11545976/83693566-b5c94780-a5cc-11ea-893f-dd34d8cb10c1.png">
</h1>

## ♻ Ecoleta | Next Level Week - 1st Edition

In this application it is possible to register collection points and types of materials collected, showing them on maps and allowing you to search for the nearest points.

## 🚀 Index
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
    - multer
    - celebrate/Joi
  
  - **Front end**
    - ReactJS
    - Typescript
    - react-router-dom
    - axios
    - leaflet (Free map)
    - react-leaflet
  
  - **Mobile**
    - React Native/Expo
    - Typescript
    - react-navigation
    - axios
    - react-native-picker-select
    - react-native-svg
    - react-native-maps
    - expo-font
    - expo-location
    - expo-mail-composer

---

## 💻 How to run

  > Cloning the repository
  ```bash
    # Cloning repository
    git clone https://github.com/AugustoMarcelo/ecoleta.git
  ```

  Copy the `.env.example` and create `.env` with your *IP* and *PORT* informations

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

  > Running mobile project
  > You will need to download the Expo app. When the application starts, scan the qrcode with the Expo you installed.
  ```bash
    # Accessing mobile project
    cd mobile

    # Change the IP in services/api.ts to connect with the back end
    cd services

    # Running
    yarn start
  ```

---

## 📷 Previews

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/11545976/83932227-93276200-a777-11ea-9a52-f1ccb07bd759.gif" />
</h1>

---

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/11545976/83931639-1f378a80-a774-11ea-8db3-d3f31b1945f7.gif" height="500" />
</h1>
 
