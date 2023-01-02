const appDiv = "app";

let routes = {}; // collection with the no paths
let templates = {}; //collection with empty template

let template = (name, templateFunction) => {
    return templates[name] = templateFunction; //The templatFunctions is passed to the template acoring to its name
}

//if there is no path then creating and mapping it, if there is path then returning it
let route = (path, template) => {
    if (typeof template == "function") {
        return routes[path] = template; //for perticular path in routes collection there is defined template
    }
    else if (typeof template == "string") {
        return routes[path] = templates[template]; //for each path coming from routes collection there is unique value
    }
    else {
        return;
    }
};