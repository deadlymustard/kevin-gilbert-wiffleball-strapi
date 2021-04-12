# Kevin Gilbert Wiffleball Strapi

This strapi application contains all of the types used to maintain the Kevin Gilbert Scholarship fund website.

## Local Development

### Database
Begin by creating a local postgres database for your strapi application to write to.

`docker run --name strapi-postgres -e POSTGRES_DB=strapidb -e POSTGRES_PASSWORD=postgres -d -p 5555:5432 postgres`

The `config/database.js` is configured to use the values for this created DB.

If the database has already been created on your machine but has been stopped, you can restart it with this command:
`docker start strapidb`

### Running the App
After the database is running, you can run the app by running:
`npm run develop`


## Deploying
This application is hosted via Heroku. It uses Heroku's Postgres Plugin to read/write data. Perform the following steps to setup your local environment for deploying:

`heroku login`
`heroku git:remote -a ktg-wiffleball-strapi`

To deploy, run the following command after you've committed your changes:

`git push heroku HEAD:main`



