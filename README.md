
# Checklist Application

This app demonstrates how I build a front-end app using Next.js

## Features

- Create a checklist
- Update a checklist
- Delete a checklist
- List of checklist with search and/or filter
- Internet connection handler

## Stacks

- Next.js
- TypeScript
- Tailwind CSS
- TanStack Query

## Design Pattern

- Domain Driven Design pattern
- Feature-first folder structure

## Setup

1. Clone or [download zip](https://github.com/ardiwinardi/nextjs-checklist-app/archive/master.zip) this repository
2. Run on your local mechine :
	- open the terminal, go to the app directory
	- install dependencies `$ npm install`
	- run with npm or bun.sh (optional)  
	   Installing bun:
	   ``` curl https://bun.sh/install | bash```
	   run command: 
	   ``` bun run dev```	
3. Or run with Docker
   - open the terminal, go to the app directory
   - build docker image: 
    `docker build -t checklist-docker-dev -f dev.Dockerfile .`
   - run docker image on port 3000:
    `docker run -p 3000:3000 checklist-docker-dev`
4. Checklist app should run on port 3000

## Questions

If you have any questions, write [here](https://github.com/ardiwinardi/nextjs-checklist-app/issues).
