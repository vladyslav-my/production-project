import { CounterSchema } from "entities/Counter";
import { LoginFormSchema } from "features/AuthByUsername";
import { UserSchema } from "entities/User";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginFormSchema;
}
