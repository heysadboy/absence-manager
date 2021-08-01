import { FC } from 'react';
import { IMember, IAbsence } from '../util/Interfaces';
import AbsenceStatus from './AbsenceStatus';
import '../css/AbsenceItem.css';

interface IAbsenceItemProps {
    member: IMember;
    absence: IAbsence;
}

const AbsenceItem: FC<IAbsenceItemProps> = ({ member, absence }) => {
    return (
        <div id="absence-item" className="ui grid">
            <div className="three wide column">
                <img id="member-image" className="ui avatar image" alt={member.name} src={member.image} />
            </div>
            <div className="thirteen wide column">
                <div className="content">
                    <AbsenceStatus absence={absence} />
                    <span id="member-name">{member.name}</span>
                    <div id="member-description" className="description">
                        <i className="home icon" /> <span id="absence-type">{absence.type}</span><br />
                        <i className="calendar alternate outline icon" /> {absence.startDate} ~ {absence.endDate}<br />
                        {absence.memberNote !== null && absence.memberNote !== "" ? `Member Note: ${absence.memberNote}` : null}<br />
                        {absence.admitterNote !== null && absence.admitterNote !== "" ? `Admitter Note: ${absence.admitterNote}` : null}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AbsenceItem;