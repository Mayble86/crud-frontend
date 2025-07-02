import React, { useState } from 'react';
import { useRecords } from './useRecords';

export const AddRecordForm = ({ onClose }: { onClose: () => void }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [fathername, setFathername] = useState('');
    const [group, setGroup] = useState(Number.NaN);

    const { mutation } = useRecords();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await mutation.mutateAsync({ name, surname, fathername, group });
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:<input value={name} onChange={e => setName(e.target.value)} required/>
            </label>
            <label>
                Surname:<input value={surname} onChange={e => setSurname(e.target.value)} required/>
            </label>
            <label>
                Fathername:<input value={fathername} onChange={e => setFathername(e.target.value)} required/>
            </label>
            <label>
                Group:<input value={group} onChange={e => setGroup(parseInt(e.target.value))} required/>
            </label>
            <button type="submit">Добавить</button>
        </form>
    );
};
