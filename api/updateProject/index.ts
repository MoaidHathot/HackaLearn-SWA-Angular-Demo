import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Project } from "../model";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    if(!req.params.name || !req.body.category || !req.body.devs || req.body.devs.length <= 0)
    {
        context.log('Bad request, missing data');

        context.res = {
            status: 400
        };

        return;
    }

    if(!context.bindings.existingProject)
    {
        context.log('Project was not found');

        context.res = {
            status: 404
        };

        return;
    }

    const entry = new Project(req.body.name, req.body.name, req.body.category, req.body.devs);

    context.log(`Adding new entry`);

    context.bindings.projectSaver = entry;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: entry,
    };

};

export default httpTrigger;