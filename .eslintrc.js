module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
  "ignorePatterns": ["src/**/*.d.ts"],
  "overrides": [
    {
      "files": [ "src/**/*.{ts,tsx}"],
    }
  ],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"linebreak-style": [
			"warn",
			"unix"
		],
		"quotes": [
			"warn",
			"double"
		],
		"semi": [
			"warn",
			"always"
		],
    "react/react-in-jsx-scope" : "off",
    "react/jsx-props-no-spreading" : "off",
    "react/no-array-index-key": ["warn"],
	}
};
