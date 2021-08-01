import { FC } from 'react';
import { TDateRange } from '../util/Types';
import { EAbsenceType } from '../util/Enums';
import '../css/HeaderBar.css';

interface IHeaderBarProp {
    title: string;
    absenceType: EAbsenceType;
    setDateRange: (dateRange: TDateRange) => void;
    setAbsenceType: (absenceType: EAbsenceType) => void;
}

const HeaderBar: FC<IHeaderBarProp> = ({ title, absenceType, setDateRange, setAbsenceType }) => {

    const typeSelect = (e: any) => {
        setAbsenceType(e.target.dataset.value);
    };

    return (
        <div id="header-bar" className="ui top fixed menu">
            <div className="ui container">
                <div id="header-title">{title}</div>
                <div className="right menu">
                    <div className="ui simple selection dropdown">
                        <i className="dropdown icon"></i>
                        <div className="text">{absenceType}</div>
                        <div className="menu">
                            <div className={`${absenceType === EAbsenceType.all ? 'active' : ''} item`} onClick={typeSelect} data-value={EAbsenceType.all}>{EAbsenceType.all}</div>
                            <div className={`${absenceType === EAbsenceType.sickness ? 'active' : ''} item`} onClick={typeSelect} data-value={EAbsenceType.sickness}>{EAbsenceType.sickness}</div>
                            <div className={`${absenceType === EAbsenceType.vacation ? 'active' : ''} item`} onClick={typeSelect} data-value={EAbsenceType.vacation}>{EAbsenceType.vacation}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;