
# 'Lyzted' Demo

This project serves as a redemption project for the Ropes assessment. I learn and practice best by doing projects. I tried to remember the schema from the ropes assesment and made my own project in the spirit of that assessment as a base to sharpen up my skills ahead of my interview. If someone is reading this, this *should* be the easiest project you'll ever start. 

## Requirements before starting
- Docker
- Access to the internet

## Start Project

- `make up`

After containers are up & running:

- `make db-init`

## View Project

- Client: `http://localhost:5173/`
- Server: `http://localhost:8080/listings/` (GET Listings)

After starting, visit the UI, change a price in the table with the ticker or with typing, click green check button to save new price. Alert window should pop if all goes well. 

## Structure

Client: Vite-strapped React Project with Typescript & Tailwind

Server: From-Scratch Node Server with Typescript, Express, pg, nodemon

Local Dev Orchestration: Docker & Makefile 

## Testing 

Currently Lacking. Will write tests. 

## Error handling

Currently lacking. Will upgrade.