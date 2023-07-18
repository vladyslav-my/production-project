import { StateSchema } from "@/app/providers/StoreProvider";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import axios from "axios";

type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: false });

export class TestAsyncThunk<Return, Arg, RejectedValue> {
	dispatch: jest.MockedFn<any>;

	getState: () => StateSchema;

	actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
	
	api: typeof mockedAxios;

	navigate: jest.MockedFn<any>;

	constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
		this.api = mockedAxios;
		this.navigate = jest.fn();
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg);
		const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

		return result;
	}
}
