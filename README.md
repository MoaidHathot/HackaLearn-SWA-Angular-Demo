[[_TOC_]]

## Prerequisites
- #### Visual Studio Code
	- [Download](https://code.visualstudio.com?WT.mc_id=javascript-30250-moaidhathot)
	- [SWA Extension](https://marketplace.visualstudio.com/items?WT.mc_id=javascript-30250-moaidhathot&itemName=ms-azuretools.vscode-azurestaticwebapps)
	- [Azure Functions Extension](https://marketplace.visualstudio.com/items?WT.mc_id=javascript-30250-moaidhathot&itemName=ms-azuretools.vscode-azurefunctions)
	- [REST Client Extension](https://marketplace.visualstudio.com/items?WT.mc_id=javascript-30250-moaidhathot&itemName=humao.rest-client)

- #### Azure Functions CLI
	- [Download](https://www.npmjs.com/package/azure-functions-core-tools?WT.mc_id=javascript-30250-moaidhathot)

- #### Azure Static Webaps CLI (preview)
	- [Docs + Download](https://github.com/Azure/static-web-apps-cli?WT.mc_id=javascript-30250-moaidhathot)



## Generate Template
- [Generate a basic Static Web App with an Angular template](https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?WT.mc_id=javascript-30250-moaidhathot&tabs=angular)
- Clone your newly generated repository	
- npm install
- Test the template with `ng serve`


## Initial Deployment
- Commit & Push your code
- [Use the Azure Extenion to create a new Static Web App](https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?WT.mc_id=javascript-30250-moaidhathot&tabs=angular)


## Add an API
- [Add functions](https://docs.microsoft.com/en-us/azure/static-web-apps/add-api?WT.mc_id=javascript-30250-moaidhathot&tabs=vanilla-javascript)

## Test SWA & API locally
- Run `ng serve`
- Run `swa start http://localhost:4200 --api ./api`
	- [Documentation 1](https://github.com/Azure/static-web-apps-cli?WT.mc_id=javascript-30250-moaidhathot)
	- [Documentation 2](https://docs.microsoft.com/en-us/azure/static-web-apps/local-development?WT.mc_id=javascript-30250-moaidhathot)

## Create Azure Resources
- [Create a Serverless CosmosDb Resource](https://docs.microsoft.com/en-us/azure/cosmos-db/create-cosmosdb-resources-portal?WT.mc_id=javascript-30250-moaidhathot)
- [Create & Connect Application Insights Resource](https://dev.to/azure/getting-logs-from-static-web-apps-apis-m5l?WT.mc_id=javascript-30250-moaidhathot)


## Use CosmosDB in Azure Functions
- [Input Bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-input?WT.mc_id=javascript-30250-moaidhathot&tabs=javascript)
- [Output Bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-output?WT.mc_id=javascript-30250-moaidhathot&tabs=javascript)
- [Install Cosmos DB Client Library](https://docs.microsoft.com/en-us/javascript/api/overview/azure/cosmos-readme?WT.mc_id=javascript-30250-moaidhathot&view=azure-node-latest)
- Add the CosmosDb configuration to `local.settings.json` in `api/`. The file is not under source control


## Configure Authentication & Authorization
- [Create `staticwebapp.config.json` file in the `src/` directory](https://docs.microsoft.com/en-us/azure/static-web-apps/configuration#routes?WT.mc_id=javascript-30250-moaidhathot)
- [Configure the routes](https://github.com/MoaidHathot/HackaLearn-SWA-Angular-Demo/blob/main/src/staticwebapp.config.json?WT.mc_id=javascript-30250-moaidhathot)

## Deploy
- Commit & Push your code
- Add CosmosDb's configuration into the `Configuration` section in Azure Portal
- Add ApplicationInsights instrumentation key into the `Configuration` section in Azure Portal witht he key `APPINSIGHTS_INSTRUMENTATIONKEY`
- Invite users
