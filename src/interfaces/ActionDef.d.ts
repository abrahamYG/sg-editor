export interface ActionDef {
  __base_type?: string;
  based_on?: string;
  editor_config?: EditorConfig;
  grammar_text: string;
  hint_text: string;
  id: string;
  name: string;
  options?: ActionOptions;
  parameters: ParameterDef[];
  path: string;
  return_type?: TypeDef;
  script?: string;
  script_id?: string;
  sub_functions?: SubFunctionDef[];
  template_options?: TemplateOptions;
  type: "Function" | "Action" | "Event";
}

export interface EditorConfig {
  icon?: string;
  node?: string;
}

export interface ActionOptions {
  is_async?: boolean;
  is_deprecated?: boolean;
  is_expression_only?: boolean;
  is_hidden?: boolean;
  is_implemented?: boolean;
  is_inline?: boolean;
  is_native?: boolean;
  is_template?: boolean;
}

export interface ParameterDef {
  allow_multiple?: boolean;
  allowed_presets?: string[];
  default_values?: DefaultValue[];
  guid?: string;
  hint_text?: string;
  id: string;
  inline_separator?: string;
  is_callable?: boolean;
  is_this?: boolean;
  name: string;
  type: TypeDef;
  description?: string;
  preset_value_id?: string;
  same_as_param?: string;
}

export interface DefaultValue {
  function?: any;
  guid?: string;
  preset?: any;
  script?: string;
  type?: string;
  value?: any;
  variable?: any;
}

export interface TypeDef {
  directive?: string;
  implements?: string;
  inner_type?: string;
  param_id?: string;
  sub_directive?: string;
  tags?: string[];
  type: string;
}

export interface SubFunctionDef {
  allowed_functions?: string[];
  guid?: string;
  id: string;
  name: string;
  sub_functionId?: string;
  type: string;
}

export interface TemplateOptions {
  actions?: any[];
  id?: string | null;
  rules?: any[];
  scope?: string;
}