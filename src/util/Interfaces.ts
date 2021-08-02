export interface IAbsence {
    admitterId: number | null;
    admitterNote: string | null,
    confirmedAt: string | null,
    createdAt: string | null,
    crewId: number,
    endDate: string | null,
    id: number,
    memberNote: string | null,
    rejectedAt: string | null,
    startDate: string | null,
    type: string | null,
    userId: number
}

export interface IMember {
    crewId: number,
    id: number,
    image: string,
    name: string,
    userId: number
}

export interface IMemberList {
    [id: number]: IMember
}