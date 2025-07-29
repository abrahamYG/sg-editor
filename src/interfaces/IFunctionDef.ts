import type { FunctionType } from "./FunctionType";
import type { TemplateOptions } from "./TemplateOptions";
import type { IParameterDef } from "./IParameterDef";
import type { ReturnTypeDef } from "./ReturnTypeDef";
import type { EditorConfig } from "./EditorConfig";

export interface IFunctionDef {
	__base_type?: string;
	based_on?: string;
	editor_config?: EditorConfig;
	grammar_text?: string;
	hint_text?: string;
	id: string;
	name?: string;
	options?: {
		is_template?: boolean;
	};
	parameters?: IParameterDef[];
	path?: string;
	return_type?: ReturnTypeDef;
	script?: string;
	script_id?: string;
	sub_functions?: IFunctionDef[];
	template_options?: TemplateOptions;
	type: FunctionType;
	// Sometimes there are extra fields
}
