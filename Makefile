.DEFAULT_GOAL := check

init:
	@yarn install

start:
	@yarn start

check:
	@yarn lint
	@yarn test-ci
	@yarn build


