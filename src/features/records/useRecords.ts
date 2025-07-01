import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchRecords, createRecord } from './recordsAPI';
import { Record } from '@/types/record';

export const useRecords = () => {
    const qc = useQueryClient();

    const query = useQuery<Record[]>(['records'], fetchRecords);
    const mutation = useMutation(createRecord, {
        onSuccess: () => qc.invalidateQueries(['records']),
    });

    return { query, mutation };
};
