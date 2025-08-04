import type { Expression } from "../interfaces/Expression";
import type { FunctionCall } from "../interfaces/FunctionCall";

export default function functionCallToString(
    functionCall: FunctionCall
): string {
    // Helper to stringify an Expression
    function expressionToString(expr: Expression): string {
        if (!expr) return "";
        switch (expr.type) {
            case "Function":
                if (expr.function) return functionCallToString(expr.function);
                return "<function>";
            case "Value":
                if (expr.value && typeof expr.value.value !== 'undefined') return String(expr.value.value);
                return "<value>";
            case "Variable":
                if (expr.variable && expr.variable.variable_id) return expr.variable.variable_id;
                return "<variable>";
            case "Preset":
                if (expr.preset && expr.preset.preset_id) return `Preset:${expr.preset.preset_id}`;
                return "<preset>";
            case "Script":
                if (expr.script) return `Script:${expr.script}`;
                return "<script>";
            default:
                // fallback: try value
                if (expr.value && typeof expr.value.value !== 'undefined') return String(expr.value.value);
                return "<expr>";
        }
    }

    // Get function name from function_id
    const name = functionCall.function_id || "UnnamedFunctionCall";

    // Get arguments from parameters
    const args = (functionCall.parameters || []).map(param => {
        // Each parameter has expressions: Expression[]
        if (Array.isArray(param.expressions)) {
            return param.expressions.map(expressionToString).join(", ");
        }
        return "";
    });

    return `${name}(${args.join(", ")})`;
}