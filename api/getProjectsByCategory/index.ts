import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Project } from "../model";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: context.bindings.projects as Array<Project>
    };

};

export default httpTrigger;