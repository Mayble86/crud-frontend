import axiosClient from '@/services/axiosClient';
import { Record } from '@/types/record';

export const fetchRecords = async (): Promise<Record[]> => {
    const { data } = await axiosClient.get('/records');
    return data;
};

export const createRecord = async (rec: Omit<Record, 'id'>): Promise<Record> => {
    const { data } = await axiosClient.post('/records', rec);
    return data;
};
