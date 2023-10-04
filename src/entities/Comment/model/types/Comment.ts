import { User } from "@/entities/User";

export interface Comment {
	id: number;
	comment: string;
	user: User;
}