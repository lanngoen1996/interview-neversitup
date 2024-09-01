# interview neversitup

This repo for interview neversitup only can't be use in publish

### Section

### Check list task

- [x] Frontend
- [x] Backend Unit 1
- [x] Backend Unit 2
- [ ] Backend Unit 3
- [ ] Backend Unit 4

#### Section One [Frontend (Vue.js)] (todo-apps)

- node version v22.7.0
- NuxtJS version 3.13.1

#### Section Two [Backend (Node.js)]

##### Unit 1 Structure project (MVC)

```
.
├── .vscode
│   ├── setting.json
├── .docker
│   ├── Docker.local
│   ├── Docker.prod -- multiple stage for minimal image
│   ├── Docker.test
├── src
│   ├── models
│   │   ├── user
│   │   ├── role
│   ├── controllers
│   │   ├── auth_controller
│   │   ├── user_controller
│   ├── middlewares
│   │   ├── authentication
│   │   ├── acl
│   ├── validators
│   ├── common
│   ├── types
│   ├── utils
│   ├── providers
│   │   ├── s3
│   │   ├── redis
│   │   ├── queue
│   ├── constant
│   ├── config
│   ├── database
│   │   ├── migration
│   │   ├── seeder
│   │   ├── faker
│   ├── public
│   │   ├── storage
│   │   ├── share
│   ├── routes
│   │   ├── auth
│   │   ├── user
│   │   ├── role
│   ├── __test__
│   │   ├── mock
│   │   ├── src
│   │   │   ├── controller
│   │   │   ├── ....
│   ├── main.{ts,js,go}
│   ├── .env
│   ├── .env.example
│   ├── .env.test
│   ├── .eslintrc -- base system on eslint or prettier
│   ├── package.json
│   ├── package-lock.json -- for cache on builder
│   ├── .... -- required by framework in use
├── .gitlab-ci.yml
├── ....
└── README.md
```
