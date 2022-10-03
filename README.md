# Integrate your EasyForm in a simple way into your existing react project.


## Setup in your project

1. create .npmrc file in your project root that contains: @uzh-bf:registry:https://npm.pkg.github.com
2. execute `npm login --scope=@uzh-bf --registry=https://npm.pkg.github.com` in your command line and enter your username and your personal token as password. You can generate a new token [here](https://github.com/settings/tokens)
3. install the package
4. use the component with `import {EasyFormsEmbed} from "@uzh-bf/easyformsembed"`

## Alternative: Install directly from GitHub

npm install https://github.com/uzh-bf/easy-forms-embed

## Update package
- Login with `npm login --scope=@uzh-bf --registry=https://npm.pkg.github.com`
- change package.json version
- `npm publish`