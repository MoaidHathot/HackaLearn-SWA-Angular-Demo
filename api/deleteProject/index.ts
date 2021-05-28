import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as cosmos from "@azure/cosmos"

const endpoint = process.env.CosmosDbEndpoint;
const key = process.env.CosmosDbKey;
const { CosmosClient } = cosmos;

const client = new CosmosClient({ endpoint, key})
const container = client.database("HackaLearn").container("Projects");

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
        
    if(!req.params.name){
        context.log('Bad request, missing data');

        context.res = {
            status: 400
        };
        return;
    }

    const entry = container.item(req.params.name, req.params.name);
    if((await entry.read()).statusCode == 404){
        context.res = {
            status: 404
        };
        return;
    }

    await entry.delete();
// const client = new CosmosClient({ endpoint, key });
// All function invocations also reference the same database and container.
// const container = client.database("MyDatabaseName").container("MyContainerName");

// module.exports = async function (context) {
//     const { resources: itemArray } = await container.items.readAll().fetchAll();
//     context.log(itemArray);
// }
    context.res = {
        // status: 200, /* Defaults to 200 */
      
    };

};

export default httpTrigger;