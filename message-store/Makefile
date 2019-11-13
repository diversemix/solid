get_deps:
	-if [ ! -e "src" ]; then ln -s ./src-end ./src; fi
	-yarn clean
	-yarn

lint: get_deps
	-yarn lint

build: get_deps lint
	-yarn build

run: get_deps build
	-yarn start
