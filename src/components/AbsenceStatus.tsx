import { FC } from 'react';
import { IAbsence } from '../util/Interfaces';
import { EAbsenceStatus } from '../util/Enums';

interface IAbsenceStatusProps {
    absence: IAbsence
}

const AbsenceStatus: FC<IAbsenceStatusProps> = ({ absence }) => {
    if (absence.confirmedAt != null) {
        return <div className="ui mini green label">{EAbsenceStatus.confirmed}</div>;
    }
    else if (absence.rejectedAt != null) {
        return <div className="ui mini red label">{EAbsenceStatus.rejected}</div>;
    }
    return <div className="ui mini blue label">{EAbsenceStatus.requested}</div>;
}

export default AbsenceStatus;