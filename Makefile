.PHONY: up down rebuild logs shell-server shell-db db-init

up:
	docker compose up

db-init: 
	docker compose exec server npm run db:init

down:
	docker compose down

rebuild:
	docker compose up --build

recreate-client:
	docker compose up --build --force-recreate client

recreate-server:
	docker compose up --build --force-recreate server

recreate-db:
	docker compose up --build --force-recreate db

logs:
	docker compose logs -f

shell-server:
	docker compose exec server sh

shell-db:
	docker compose exec db sh

db-init:
	docker compose exec server npm run db:init