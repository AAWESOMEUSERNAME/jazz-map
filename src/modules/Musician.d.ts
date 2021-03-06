interface Musician {
    id: number,
    photoPath: string,
    name: string,
    birth: Date?,
    death: Date?,
    intro: string?,
    profileKey: string?,
    ablums: AlbumBase[]
}

declare type MusicianBasic = Omit<Musician, 'ablums'>
