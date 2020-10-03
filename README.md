# [GeoInfo](https://ukrainedn.herokuapp.com/)

Geographic information system(GIS) where you can combine and monitor different geodata.

![review](https://user-images.githubusercontent.com/40334272/94373473-81930d00-010e-11eb-87b2-08c9d24173cc.png)

## [Review](https://www.youtube.com/watch?v=_H1fAfAuQLM)
[![Review](https://user-images.githubusercontent.com/40334272/94373616-39c0b580-010f-11eb-9b60-ce61c8a5ff1c.png)](https://www.youtube.com/watch?v=_H1fAfAuQLM)

Geographic information system(GIS) where you can combine and monitor different geodata. Display geodata from SpaceX and NASA, the position of satellites(Starlink), ISS. Topographic maps, air pollution, atmospheric parameters, and more.

## 🌎 [Demo online](https://geo-info.vercel.app/) (vercel)

  Додаток онлайн - [GeoInfo](https://geo-info.vercel.app/).

## 📂 Folder structure 

 ```
   ├── dist                      /* generate build in production mode
   └── public                    /* static files
   |     ├── index.html          /* change title and static html here
   |     └── favicon
   └── src 
   |     └── assets              /* images, fonts, additional files
   |      ...   
   |     ├── components          /* react components  
   |          └── common         /* reusable react components       
   |     ├── hooks               /* custom react hooks        
   |     └── store               /* store  
   |          ├── api            /* api
   |          ├── sagas          /* redux-saga generators
   |          ├── actions        /* actions 
   |          ├── constants      /* constants 
   |          ├── reducers       /* reducers
   |          ├── selectors      /* selectors
   |          ├── state          /* initial state
   |          ├── types          /* typescript types
   |          └── store.js       /* create store         
   |     ├── scss                /* general style, reset & normalaize
   |     ├── utils               /* utils, handlers
   |     ├── App.js              /* general component, router
   |     └── index.js            /* app starts here ;)
   |      ...
   ├── .babelrc                  /* babel config
   ├── .eslintrc                 /* eslint config
   ├── .prettierrc               /* prettier config
   ├── package.json              /* dependencies
   ├── webpack.config.dev.babel  /* webpack config for development
   ├── webpack.config.prod.babel /* webpack config for production
   └── .gitignore                /* ignore folders & files
    
```
## 💻 Technology stack
- ### ARCHITECTURE 
   - UI(React), BLL(Redux), DAL(Redux-Saga).
- ### Shell  
   - Збірка на основі webpack + babel, з можливістю поступової інтеграції TypeScript.
- ### LAYOUT  
   - Для стилізації використовував sass + BEM. Для зручного комбінування класів підключив бібліотеку classnames.
- ### STORE 
   - Для зберігання глобального стану додатка використовував традиційно redux, react-redux, щоб зручно використовувати redux всередині react.  
- ### API  
   - Для того щоб мати можливість створювати асинхронні action, сайд ефекти, підключив redux-saga.  

 ## 💻 FUNCTIONAL
 - ### **SPACE** 
   - *Відображення масиву супутників Starlink(оновлення кожних 10хв), площі покриття зв'язком, кількість виведених на орбіту, детальну інформацію про кожний супутник.*
   - *Відображення МКС в режимі реального часу, пройденої траекторії, зони видимості з землі.*

## 🚀 Getting Started (development)
###[Demo online ](http://test.grenvalz.kl.com.ua/main)

You can run aplication on your local dev environment in 5 minutes with these steps:
1. **Install Node.js** [download](https://nodejs.org/en/). 
2. **Install Yarn** [download](https://classic.yarnpkg.com/en/docs/install#windows-stable). 
3. **Clone repository** . 
4. **Install dependencies** .

   Open CLI in aplication folder and set up in a single command:
  
   ```shell
   yarn install
   
   ```
5. **Start aplication in development mode** .

   Set up in a single command in CLI:
  
   ```shell
   yarn start
   
   ```
![Screenshot_1](https://user-images.githubusercontent.com/40334272/92362988-780f1a00-f0f9-11ea-879f-77af2b98dd37.png)

 ## 📷 Screenshots
![s1](https://user-images.githubusercontent.com/40334272/94373474-822ba380-010e-11eb-8905-2486f99d01b9.png)


