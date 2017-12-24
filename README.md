# Amalgam

A culmination of functionality for all of WSBF Clemson!

## Required Installs

- Install [npm](https://www.npmjs.com/)
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)

## Getting build up and running

### Initial Setup

clone the directory

```bash
git clone https://github.com/wsbf/amalgam.git
```

We are going to want to make sure we have all of our required modules installed.

```bash
cd amalgam
npm install
```

### Running

Assuming you have everything ready...

- Start the database (this runs mongod with test data)
- You should maybe run this in another terminal window (or use screen/tmux)

```bash
npm run database
```

- Run the thing

```bash
npm run start
```

Go to `http://localhost:3000` to check out the result!

## Notes

There has been a lot of work done to simplify this applications
structure. The main idea is that we have the server separate from the
view. I will give the ability to 'inject' the routes into the view in
the near future.

Right now, the view is compiled into `bundle.js`, which is consumed by
`index.html` in the `./public/` folder. `./public/` is also where
static resources are (`/resources/`).


## Citations

Setup inspired originally by [Typescript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter),
which was inspired by Sahat's [Hackathon Starter project](https://github.com/sahat/hackathon-starter).
