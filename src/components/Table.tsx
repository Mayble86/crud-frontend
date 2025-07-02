import React from 'react';
import type { StudentDto } from '@/types/record';

interface TableProps {
    data: StudentDto[]
}

export const Table: React.FC<TableProps> = ({ data }) => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Fathername</th>
            <th>Group</th>
        </tr>
        </thead>
        <tbody>
        { data.map(student => (
            <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.fathername}</td>
                <td>{student.group}</td>
            </tr>
        ))}
        </tbody>
    </table>
);
