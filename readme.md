# Web Technology course work by 00013086

## About The App
Simple application for writing enthusiasts that enables users
to publish/read blogs and like/dislike blogs. Application uses
nodejs+epxress as a backend and pug templating engine to serve
frontend. Storage implementation is done using JSON file. Error handling is done using decorator pattern to keep codebase simpler. Logging is done using third party winston libray.

## Instructions On How To Run The Project
1. npm install
2. npm start

## Dependencies list
`
{
    "body-parser": "^1.20.2",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "pug": "^3.0.2",
    "winston": "^3.8.2"
}
`

## [Source code](https://github.com/00013086/web-tech-cw2.git)
## [Hosted app](https://ambitious-leaf-wrist.glitch.me) For some reasons application is not functioning properly on glitch.com. I used fetch() in client side and it is failing because of cors error. However, application functions correctly on localhost.