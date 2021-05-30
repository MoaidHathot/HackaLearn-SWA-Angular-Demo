import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as cosmos from "@azure/cosmos"

const endpoint = process.env.CosmosDbEndpoint;
const key = process.env.CosmosDbKey;
const { CosmosClient } = cosmos;

const client = new CosmosClient({ endpoint, key})
const container = client.database("HackaLearn").container("Projects");

class ProjectsRepository
{
    public async delete(name: string): Promise<boolean> {
        const entry = container.item(name, name);        
        if((await entry.read()).statusCode == 404){
            return false;
        }
    
        await entry.delete();
        return true;
    }
}


const projects = new ProjectsRepository();
export { projects };