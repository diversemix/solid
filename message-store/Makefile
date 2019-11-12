
lint:
	-if [ ! -e "src" ]; then ln -s ./src-end ./src; fi
	-yarn lint

build: lint
	-yarn clean
	-yarn
	-yarn build

run: build
	-yarn start
