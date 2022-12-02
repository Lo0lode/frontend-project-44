install:
	nmp ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint . 
	npx eslint . --fix
brain-even:
	node bin/brain-even.js
