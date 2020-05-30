
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ".:*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean:
	rm -rf dist

buildApp: clean
buildApp: ## Build
	npm run build
	ls -la build
	$$EDITOR dist/index.html

run:
run: ## Local Run
	npm run serve
