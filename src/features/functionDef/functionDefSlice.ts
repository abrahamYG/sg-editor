import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IFunctionDef } from "../../interfaces/IFunctionDef";
import ActionDefs from "../../definitions/ActionDefs.json";
import ConditionDefs from "../../definitions/ConditionDefs.json";
import EventDefs from "../../definitions/EventDefs.json";
import FunctionDefs from "../../definitions/FunctionDefs.json";

export interface FunctionDefState {
	functions: IFunctionDef[];
	actions: IFunctionDef[];
	events: IFunctionDef[];
	conditions: IFunctionDef[];
}

function functionDefCompare(a: IFunctionDef, b: IFunctionDef): number {
	return a.id.localeCompare(b.id);
}

const initialState: FunctionDefState = {
	functions: (FunctionDefs as IFunctionDef[]).sort(functionDefCompare),
	actions: (ActionDefs as IFunctionDef[]).sort(functionDefCompare),
	events: (EventDefs as IFunctionDef[]).sort(functionDefCompare),
	conditions: (ConditionDefs as IFunctionDef[]).sort(functionDefCompare),
};

export const functionDefSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		addFunction: (state, action: PayloadAction<IFunctionDef>) => {
			// Add a function to the functions array
			state.functions.push(action.payload);
		},
		addAction: (state, action: PayloadAction<IFunctionDef>) => {
			// Add an action to the actions array
			state.actions.push(action.payload);
		},
		addEvent: (state, action: PayloadAction<IFunctionDef>) => {
			// Add an event to the events array
			state.events.push(action.payload);
		},
		addCondition: (state, action: PayloadAction<IFunctionDef>) => {
			// Add a condition to the conditions array
			state.conditions.push(action.payload);
		},
		//increment: (state) => {
		//  // Redux Toolkit allows us to write "mutating" logic in reducers. It
		//  // doesn't actually mutate the state because it uses the Immer library,
		//  // which detects changes to a "draft state" and produces a brand new
		//  // immutable state based off those changes
		//  state.value += 1
		//},
		//decrement: (state) => {
		//  state.value -= 1
		//},
		//incrementByAmount: (state, action: PayloadAction<number>) => {
		//  state.value += action.payload
		//},
	},
});

// Action creators are generated for each case reducer function
export const { addAction, addCondition, addEvent, addFunction } =
	functionDefSlice.actions;

export default functionDefSlice.reducer;
