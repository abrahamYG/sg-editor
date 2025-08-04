import type { IFunctionDef } from "../interfaces/IFunctionDef";

export default function functionDefToString(
    functionDef: IFunctionDef
): string {
    // Get function name
    const name = functionDef.name || functionDef.id || "UnnamedFunction";

    // Get parameters (IParameterDef[])
    const params = (functionDef.parameters || [])
        .map(param => {
            // param.id is always present, but you may want to expand this if you add more fields
            return param.id;
        })
        .join(", ");

    // Get return type (ReturnTypeDef)
    let returnType = "void";
    if (functionDef.return_type && functionDef.return_type.type) {
        returnType = functionDef.return_type.type;
    }

    // Get function type (Function, Action, Event, Condition)
    const type = functionDef.type || "Function";

    // Format pseudocode string
    return `${type.toLowerCase()} ${name}(${params}): ${returnType}`;
}