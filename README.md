# [Quiz game](https://quiz-game-lemon.vercel.app/)

![title](https://user-images.githubusercontent.com/40334272/95118237-9f85f080-0752-11eb-9750-c88ec799114f.png)

## 🌎 [Architecture](https://www.figma.com/file/UDRBo24svrulzgGRmlmBZT/Quiz-Game-Architecture?node-id=0%3A1)
  Architecture - [Figma](https://www.figma.com/file/UDRBo24svrulzgGRmlmBZT/Quiz-Game-Architecture?node-id=0%3A1).
![Arch](https://user-images.githubusercontent.com/40334272/95118235-9e54c380-0752-11eb-8752-6726c9e09aa4.png)

## 🌎 [Demo online](https://quiz-game-lemon.vercel.app/) (vercel)

  Додаток онлайн - [Quiz game](https://quiz-game-lemon.vercel.app/).

## 📂 Folder structure 

 ```
   ├── dist                      /* generate build in production mode
   └── public                    /* static files
   |     ├── index.html          /* change title and static html here
   |     ├── config.json         /* configuration quiz
   |     └── favicon
   └── src 
   |     └── assets              /* images, fonts, additional files
   |      ...   
   |     ├── components          /* react components  
   |          ├── containers     /* containers component
   |          └── common         /* reusable react components              
   |     └── store               /* store  
   |          ├── api            /* api
   |          ├── sagas          /* redux-saga generators
   |          ├── actions        /* actions 
   |          ├── constants      /* constants 
   |          ├── reducers       /* reducers
   |          ├── selectors      /* selectors
   |          ├── state          /* initial state
   |          ├── store.js       /* create store  
   |     ├── types               /* typescript types     
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
   - UI(React), BLL(Redux), DAL(Redux-Saga), TypeScript.
- ### Shell  
   - Збірка на основі webpack + babel + typescript. Налаштований eslint + prettier(airbnb). Автоматична перевірка при створенні коміту - husky. 
- ### LAYOUT  
   - Для стилізації використовував sass + BEM. Для зручного комбінування класів підключив бібліотеку classnames.
- ### STORE 
   - Для зберігання глобального стану додатка використовував традиційно redux, react-redux, щоб зручно використовувати redux всередині react.  
- ### API  
   - Для того щоб мати можливість створювати асинхронні action, сайд ефекти, підключив redux-saga.  

## 🚀 Getting Started (development)
###[Demo online ](https://quiz-game-lemon.vercel.app)

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

 ## 📷 Screenshots
![title](https://user-images.githubusercontent.com/40334272/95010790-d960d500-0634-11eb-9664-2b0447a1e32d.png)


