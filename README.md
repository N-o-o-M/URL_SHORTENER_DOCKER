
# URL SHORTENER





## Tech Stack


**Server:** Node, Express, PostgresSQL, Postman, Docker


## Docker Commands


Check Version
```bash
  docker --version 
```



Pull postgres image 
```bash
docker pull postgres 
```
Run postgres in docker container 
```bash
docker run --name postgres-db -e POSTGRES_PASSWORD= -p 5432:5432 -d postgres
```
--name = name of the container.  
-e = environment variables.  
-p mapping the port from the container to your local machine.  
-d run the container in detached mode.


Get info about docker container 
```bash
docker ps
```

Connect to PostgreSQL Container 
```bash
docker exec -it postgres-db psql -U postgres 
```