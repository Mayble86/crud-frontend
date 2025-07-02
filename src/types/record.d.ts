export interface StudentDto {
    id: number;
    name: string;
    surname: string;
    fathername: string;
    group: number;
}

export interface StudentCreateDto {
    name: string;
    surname: string;
    fathername: string;
    group: number;
}
