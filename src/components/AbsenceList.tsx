import { FC } from 'react';
import { IMemberList, IMember, IAbsence } from '../util/interfaces';
import AbsenceItem from './AbsenceItem';

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
        <div className="ui list">{renderAbsenceList}</div>
    )
};

export default AbsenceList;