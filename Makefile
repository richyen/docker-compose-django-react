IMAGE ?= ismp

DOCKER_COMPOSE ?= docker-compose -f ./docker-compose.yml
DOCKER_COMPOSE_ALL ?= docker-compose -f ./docker-compose.yml -f ./docker-compose.test.yml
DOCKER_COMPOSE_RUN ?= $(DOCKER_COMPOSE_ALL) run --rm
DOCKER_COMPOSE_PULL ?= $(DOCKER_COMPOSE_ALL) pull

.PHONY: dev
dev: docker
	@echo "Running dev containers"
	$(DOCKER_COMPOSE) up

.PHONY: test
test:
	@echo "Running test containers"
	$(DOCKER_COMPOSE_RUN) test-backend
#	$(DOCKER_COMPOSE_RUN) test-frontend

.PHONY: docker
docker:
	@echo "Ensuring docker containers are up-to-date"
	$(DOCKER_COMPOSE_PULL)

.PHONY: clean
clean:
	@echo "Cleaning up workdir"
	$(DOCKER_COMPOSE_ALL) down --remove-orphans
