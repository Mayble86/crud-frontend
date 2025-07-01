import React, { useState } from 'react';
import { useRecords } from './useRecords';

export const AddRecordForm = ({ onClose }: { onClose: () => void }) => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const { mutation } = useRecords();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await mutation.mutateAsync({ name, value });
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:<input value={name} onChange={e => setName(e.target.value)} required />
            </label>
            <label>
                Value:<input value={value} onChange={e => setValue(e.target.value)} required />
            </label>
            <button type="submit">Добавить</button>
        </form>
    );
};
