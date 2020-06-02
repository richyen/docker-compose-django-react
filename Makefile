IMAGE ?= ismp

DOCKER_COMPOSE ?= docker-compose -f ./docker-compose.yml
DOCKER_COMPOSE_TEST ?= docker-compose -f ./docker-compose.test.yml
DOCKER_COMPOSE_ALL ?= docker-compose -f ./docker-compose.yml -f ./docker-compose.test.yml
DOCKER_COMPOSE_PULL ?= $(DOCKER_COMPOSE) pull

.PHONY: dev
dev: docker
	@echo "Running dev containers"
	$(DOCKER_COMPOSE) up

.PHONY: buildtest
buildtest:
	@echo "Building test containers"
	$(DOCKER_COMPOSE_TEST) build test-backend
#	$(DOCKER_COMPOSE_TEST) build test-frontend

.PHONY: test
test: buildtest
	@echo "Running test containers"
	$(DOCKER_COMPOSE_TEST) run --rm test-backend
#	$(DOCKER_COMPOSE_TEST) run --rm test-frontend

.PHONY: docker
docker:
	@echo "Ensuring docker containers are up-to-date"
	$(DOCKER_COMPOSE_PULL)

.PHONY: clean
clean:
	@echo "Cleaning up workdir"
	$(DOCKER_COMPOSE_ALL) down --remove-orphans
