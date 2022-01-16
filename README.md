# REST API Starter

A boilerplate starter for **Gurukul Jan-22** training session.

In this project we'll create a Books List API. Where we'll have 2 resource endpoints with **CRUD** operations.

- `/api/v1/authors`
- `/api/v1/books`

Notice the `v1` part? We use this for versioning of our APIs. This way we can have different versions of endpoints for breaking changes and upgrades. And also provides a backward compatibility for consumers of the older APIs.

## Getting started

### Clone this repo

```
git clone git@github.com:hirenchauhan2/rest-api-starter.git
```

### Copy `.env.example` to `.env`

**This should be done before installing dependencies!!**

```
cp .env.example .env
```

### Install dependencies

```
yarn install
```

### Create and seed the database
Run the following command to create your SQLite database file. This also creates the Author and Book tables that are defined in `prisma/schema.prisma`:

```
npx prisma migrate dev --name init
```

Now, seed the database with the sample data in `prisma/seed.js` by running the following command:

```
npx prisma db seed
```

### Start dev server

```
yarn dev
```

### Build the production server

```
yarn build
```

### Start production server

```
yarn start
```

## About the project structure
```
rest-api-starter
├── prisma
│   ├── migrations                  # will be generated after npx prisma migrate dev --name init
│   │   ├── 20220116221451_init     # will be generated after npx prisma migrate dev --name init
│   │   │   └── migration.sql       # will be generated after npx prisma migrate dev --name init
│   │   └── migration_lock.toml     # will be generated after npx prisma migrate dev --name init
│   ├── dev.db                      # will be generated after npx prisma migrate dev --name init
│   ├── schema.prisma               # database schema is defined here
│   └── seed.js                     # initial seeder file for development
├── resource-templates              # template files for resource generator (do not edit any file under this folder!)
│   ├── example.controller.js
│   ├── example.dao.js
│   ├── example.routes.js
│   └── example.service.js
├── scripts                         # script to generate resource
│   └── generate-resource.js
├── src
│   ├── components                  # application components (e.g resources)
│   │   └── resource-name           # resource
│   │       ├── resource-name.controller.js
│   │       ├── resource-name.dao.js
│   │       ├── resource-name.routes.js
│   │       └── resource-name.service.js
│   ├── config                      # configurations for project (db, secrets)
│   │   └── prismaClient.js         # Prisma client used for interacting with database
│   ├── utils                       # utilities
│   │   ├── logger.js
│   │   └── normalizePort.js
│   ├── app.js                      # express app and routes
│   └── server.js                   # web server running the express app
├── .editorconfig
├── .env
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .nvmrc
├── .prettierignore
├── .prettierrc.json
├── README.md
├── babel.config.json
├── package.json
└── yarn.lock
```



## Tasks for the session

- [ ] Create CRUD operations for `authors` resource
  - [ ] Create an author record
  - [ ] Get all authors
  - [ ] Get an author's record
  - [ ] Update an author's record
  - [ ] Delete an author's record
  - [ ] Get an author's record along with their books
- [ ] Create CRUD operations for `book` resource
  - [ ] Create a book record
  - [ ] Get all books
  - [ ] Get a book's record
  - [ ] Update a book's record
  - [ ] Delete a book's record

## Some Practice tasks you can do later!

- [ ] Implement book rating feature
- [ ] Implement book likes feature
- [ ] Implement pagination for authors and books
- [ ] Implement testing for APIs
