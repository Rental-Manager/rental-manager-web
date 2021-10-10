.DEFAULT_GOAL := check

init:
	nvm use
	@yarn install

start:
	@yarn start

check:
	@yarn lint
	@yarn test-ci
	@yarn build


