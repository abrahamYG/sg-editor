import type { IType } from "./IType";
import type { InitialValue } from "./InitialValue";

export interface Variable {
	array_size?: number;
	guid?: string;
	id: string;
	initial_values?: InitialValue[];
	is_array?: boolean;
	is_constant?: boolean;
	is_id_based_on_name?: boolean;
	name?: string;
	per_element_initial_values?: boolean;
	type: IType;
}
