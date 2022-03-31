
install:
	cd frontend/ && yarn && cd ../api/ && yarn && yarn prisma generate

dev: install
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up --remove-orphans --build

build: 
	docker compose -f docker-compose.yml -f docker-compose.dev.yml build

build-prod: 
	docker compose -f docker-compose.yml -f docker-compose.prod.yml build

prod: 
	docker compose -f docker-compose.yml -f docker-compose.prod.yml up --remove-orphans --build
