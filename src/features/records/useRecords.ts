import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchRecords, createRecord } from './studentApi.ts';
import type { StudentDto } from '@/types/record';

export const useRecords = () => {
    const qc = useQueryClient();

    const query = useQuery<StudentDto[], Error>({
        queryKey: ['records'],
        queryFn: fetchRecords,
    });

    const mutation = useMutation<StudentDto, Error, Omit<StudentDto, 'id'>>({
        mutationFn: createRecord,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['records'] });
        },
    });

    return { query, mutation };
};
