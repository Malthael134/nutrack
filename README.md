# NuTrack

This is mainly for my personal need. Here's what I wanted to make, and also why:

> I want to be able to track everything I eat and at what time. Then I want to be able to calculate the nutritients I consumed in my food.
>
> Now, that I know how many nutrients I at least _should_ have consumed, I want to be able to calculate the missing nutrients in form of the nutritional supplements I have at home (simply pills with stuff like Vitamin A-Z and stuff).
>
> This is simply because always doing this by hand would be taking AGES. Mainly because many of those pills, e.g. 4000 units of Vitamin-D, not only contain those 4000 units of Vitamin-D, but also often contain stuff like Omega-3 or Zinc, meaning I _probably_ already have consumed more than enough of, let's say Zinc, simply by taking the other pills. This makes calculating it much more tedious and perfect for a calculating/tracking app of food and nutrients. Therefore: **NuTrack**.

## Development

How to develop/run this thing locally.

### Dev Tools

- **PNPM**
    The JavaScript package manager used in this project.
    [https://pnpm.io](https://pnpm.io)

- **Docker**:
    Docker is used to run the PostgreSQL DB locally together with Adminer as a Database GUI.
    You can also use an alternative like Podman if you prefer that.
    [https://docker.com](https://docker.com)

### Configuring environment variables

For testing purposes it will suffice to just copy the example ENV-file ([.env.example](.env.example)).

The fastest way to get this done is by running:

```sh
# copy '.env.example' into '.env'
cp .env.example .env
```

### Starting the Database

You can start the database using Docker, but also use any other way to run Postgres. Just make sure it either runs on `localhost:5432` or you change the respective environment variables (`DATABASE_HOST` and `DATABASE_PORT`) in the [**.env**](.env) file.

```sh
docker compose -f compose.dev.yaml up -d
```

### Set up the database schema

--- this is WIP, will be done using DrizzleORM hopefully

### Installing node_modules

In the [`/app`](/app) directory, run
