import React from 'react';
import { Record } from '@/types/record';

interface TableProps { data: Record[] }
export const Table: React.FC<TableProps> = ({ data }) => (
    <table>
        <thead><tr><th>ID</th><th>Name</th><th>Value</th></tr></thead>
        <tbody>
        {data.map(r => (
            <tr key={r.id}>
                <td>{r.id}</td><td>{r.name}</td><td>{r.value}</td>
            </tr>
        ))}
        </tbody>
    </table>
);
