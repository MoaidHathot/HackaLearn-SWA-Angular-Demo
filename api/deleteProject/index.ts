import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import * as cosmos from "@azure/cosmos";
import { projects } from "../repository";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
        
    if(!req.params.name){
        context.log('Bad request, missing data');

        context.res = {
            status: 400
        };
        return;
    }

    let status = 200;
    if(!projects.delete(req.params.name)){
        //Not found
        status = 404;
    }

    context.res = {
        status: status,      
    };
};

export default httpTrigger;