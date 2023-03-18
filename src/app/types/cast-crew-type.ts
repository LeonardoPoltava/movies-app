export type castCrewType = {
    cast: [{
        adult: boolean,
        gender: number,
        id: number,
        name: string,
        character: string,
        profile_path: string
    }],
    crew: [{
        adult: boolean,
        gender: number,
        id: number,
        name: string,
        profile_path: string,
        department: string,
        job: string
    }]
};
