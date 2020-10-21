# market-api

## Developing

### Install Depenencies
```
npm install
```

### Compiles and minifies for production
```
npm run dev
```

### Contributing
1. Do not commit directly to master, commit to alternate branches with the name of particular feature 
2. Format code with Prettier
3. Lower case commit messages

### Connecting to your database

1. Create a mongoDB database
2. Create a .env file in root project folder with your pre-formatted connection string, replacing \<password\> and \<dbname\> with your database credentials
```
MONGODB_URI=<pre-formatted connection string>
```
