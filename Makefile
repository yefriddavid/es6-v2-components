
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ".:*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean:
	rm -rf dist

buildDevelopment: clean
buildDevelopment: ## Build development
	npm run build:development

#$$EDITOR dist/index.html

buildProduction: clean
buildProduction: ## Build
	npm run build:production

run: kill buildDevelopment start
run: ## Local Run
	@echo "finish"

start:
start: ## Local Run
	nohup cd dist && http-serve -o &

#sensible-browser http://172.22.0.1:8080

kill:
kill:
	pgrep node | xargs kill 2>/dev/null
# npm link
