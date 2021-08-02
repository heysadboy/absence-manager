import { useState, FC } from 'react';
import { EAbsenceType } from '../util/Enums';
import { TDateRange } from '../util/Types';
import '../css/HeaderBar.css';

interface IHeaderBarProp {
    title: string;
    absenceType: EAbsenceType;
    setDateRange: (dateRange: TDateRange) => void;
    setAbsenceType: (absenceType: EAbsenceType) => void;
}

const HeaderBar: FC<IHeaderBarProp> = ({ title, absenceType, setDateRange, setAbsenceType }) => {
    const [dateError, setDateError] = useState(false);
    const [date, setDate] = useState("");

    const getAbsenceType = (aType: EAbsenceType) => {
        switch (aType) {
            case EAbsenceType.all: return "All absence";
            case EAbsenceType.sickness: return "Sickness";
            case EAbsenceType.vacation: return "Vacation";
        }
    }

    const typeSelect = (e: any) => {
        setAbsenceType(e.target.dataset.value);
    };

    const getPosition = (string: string, subString: string, index: number) => {
        return string.split(subString, index).join(subString).length;
    }

    const getSelectedDate = (e: any) => {
        setDate(e.target.value);
        setDateRange({ start: null, end: null })
        if (date === "") {
            setDateError(false);
        }
    };

    const getDateRange = () => {

        let tempDateRange = date;
        tempDateRange = tempDateRange.replace(/\s/g, '');
        const i = getPosition(tempDateRange, '-', 3);
        const startDate = new Date(tempDateRange.substring(0, i));
        const endDate = new Date(tempDateRange.substring(i + 1));

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            setDateError(true);
        }
        else {
            setDateError(false);
            setDateRange({ start: startDate, end: endDate })
        }
    }

    return (
        <div id="header-bar" className="ui top fixed vertical menu">
            <p id="header-title">{title}</p>
            <div id="date-filter" className={`ui action input ${dateError ? `error` : ``}`}>
                <input value={date} onChange={getSelectedDate} className="ui input" placeholder="yyyy-mm-dd - yyyy-mm-dd" />
                <button onClick={getDateRange} className={`ui ${dateError ? `red` : ``} icon button`}>
                    <i className="calendar icon"></i>
                </button>
            </div>
            <div id="type-filter" className="ui simple selection dropdown">
                <i className="dropdown icon"></i>
                <div className="text">{getAbsenceType(absenceType)}</div>
                <div className="menu">
                    <div className={`${absenceType === EAbsenceType.all ? 'active' : ''} item`} onClick={typeSelect} data-value={EAbsenceType.all}>All absence</div>
                    <div className={`${absenceType === EAbsenceType.sickness ? 'active' : ''} item`} onClick={typeSelect} data-value={EAbsenceType.sickness}>Sickness</div>
                    <div className={`${absenceType === EAbsenceType.vacation ? 'active' : ''} item`} onClick={typeSelect} data-value={EAbsenceType.vacation}>Vacation</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;