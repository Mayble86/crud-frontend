import axiosClient from '@/services/axiosClient';
import type {StudentCreateDto, StudentDto} from '@/types/record';

export const fetchRecords = async (): Promise<StudentDto[]> => {
    const { data } = await axiosClient.get('/students');
    return data;
};

export const createRecord = async (rec: Omit<StudentCreateDto, 'id'>): Promise<StudentCreateDto> => {
    const { data } = await axiosClient.post('/students', rec);
    return data;
};
