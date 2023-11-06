export interface User {
	id: number;
	username: string;
	avatar: string;
}

export interface UserSchema {
	authData?: User;
	_inited: boolean;
}
