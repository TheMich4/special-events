export interface SpecialEvent {
	name: string;
	track: string;
	date: string;
	cars?: string[];
	type?: 'Team Event' | 'Super Session';
	endDate?: Date;
	id?: string;
	cover?: string;
	fullName?: string;
}
