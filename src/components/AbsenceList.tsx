import { FC } from 'react';
import { IMemberList, IMember, IAbsence } from '../util/Interfaces';
import AbsenceItem from './AbsenceItem';
import '../css/AbsenceList.css';

interface IAbsenceListProps {
    members: IMemberList;
    absences: IAbsence[];
}

const AbsenceList: FC<IAbsenceListProps> = ({ members, absences }) => {
    const renderAbsenceList = absences.map(absence => {
        let member: IMember = members[absence.userId];
        return (<AbsenceItem key={absence.id} absence={absence} member={member} />);
    })

    return (
        <div id="absence-list" className="ui relaxed divided list">{renderAbsenceList}</div>
    )
};

export default AbsenceList;