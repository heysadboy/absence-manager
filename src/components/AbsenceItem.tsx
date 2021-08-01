import { FC } from 'react';
import { IMember, IAbsence } from '../util/interfaces';
import '../css/AbsenceItem.css';

interface IAbsenceItemProps {
    member: IMember;
    absence: IAbsence;
}

const AbsenceItem: FC<IAbsenceItemProps> = ({ member, absence }) => {
    console.log(member.image);
    return (
        <div id="absence-item" className="item">
            <img id="member-image" className="ui avatar image" alt={member.name} src={member.image} />
            <div className="content">
                <div id="member-name">{member.name}</div>
                <div className="description">
                    <p>
                       <i className="home icon" /> <span id="absence-type">{absence.type}</span> <i className="calendar alternate outline icon" /> {absence.startDate} ~ {absence.endDate}<br />
                       Member Note: {absence.memberNote}<br />
                       Admitter Note: {absence.admitterNote}<br />
                    </p>
                </div>
            </div>
        </div>
    )
};

export default AbsenceItem;