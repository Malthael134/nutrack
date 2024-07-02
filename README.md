# NuTrack

This is mainly for my personal need. Here's what I wanted to make, and also why:

> I want to be able to track everything I eat and at what time. Then I want to be able to calculate the nutritients I consumed in my food.
>
> Now, that I know how many nutrients I at least _should_ have consumed, I want to be able to calculate the missing nutrients in form of the nutritional supplements I have at home (simply pills with stuff like Vitamin A-Z and stuff).
>
> This is simply because always doing this by hand would be taking AGES. Mainly because many of those pills, e.g. 4000 units of Vitamin-D, not only contain those 4000 units of Vitamin-D, but also often contain stuff like Omega-3 or Zinc, meaning I _probably_ already have consumed more than enough of, let's say Zinc, simply by taking the other pills. This makes calculating it much more tedious and perfect for a calculating/tracking app of food and nutrients. Therefore: **NuTrack**.

## Development

### Dev Tools

- **PNPM**
    The JavaScript package manager used in this project.
    [https://pnpm.io](https://pnpm.io)

- **NodeJS**
    The JavaScript runtime environment version `LTS 20.XX` _or newer_.
    [https://nodejs.org/en](https://nodejs.org/en)

- **Docker**:
    Docker is used to run the PostgreSQL DB locally together with Adminer as a Database GUI.
    You can also use an alternative like Podman if you prefer that.
    [https://docker.com](https://docker.com)

### Configuring environment variables

#### Creating the initial .env file

The fastest way to get started is by running:

```sh
# in /app
# copy '.env.example' into '.env'
cp .env.example .env
```

#### Obtaining the GitHub OAuth App Secrets

Go to [https://github.com/settings/developers](https://github.com/settings/developers) and create a new applications with the values:

- **Applications name:** _`whateveryouwant.txt`_
- **Homepage URL:** [`http://localhost:3000`](http://localhost:3000)
- **Authorization callback URL:** [`http://localhost:3000/auth/callback/github`](http://localhost:3000/auth/callback/github)

Next, copy the `Client ID` value into the [`.env`](./app/.env) file as the value of `GITHUB_CLIENT_ID`.

Lastly, also generate a `Client Secret` and paste it in as the value of `GITHUB_CLIENT_SECRET`.

### Starting the Database

You can start the database using Docker, but also use any other way to run Postgres. Just make sure it either runs on `localhost:5432` or you change the respective environment variables (`DATABASE_HOST` and `DATABASE_PORT`) in the [**.env**](.env) file.

In the [`/app`](/app) directory, run

```sh
# in /app run:
docker compose -f compose.dev.yaml up -d
```

### Installing node_modules

```sh
# in /app
pnpm install
```

### Set up the database schema

```sh
# in /app
pnpm db:push
```
