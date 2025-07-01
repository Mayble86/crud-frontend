import React, { useState } from 'react';
import { useRecords } from './features/records/useRecords';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { AddRecordForm } from './features/records/AddRecordForm';
import { Table } from './components/Table';

export const App: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const { query } = useRecords();

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Добавить запись в таблицу</Button>
            <Table data={query.data || []} />
            <Modal open={isOpen} onClose={() => setOpen(false)}>
                <AddRecordForm onClose={() => setOpen(false)} />
            </Modal>
        </div>
    );
};
