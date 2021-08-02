import { useState, useEffect } from 'react';
import absenceData from '../data/absences.json';
import memberData from '../data/members.json';
import { IMemberList, IAbsence } from '../util/Interfaces';
import { TPageIndex, TDateRange } from '../util/Types';
import { EPageStatus, EAbsenceType } from '../util/Enums';
import AbsenceList from './AbsenceList';
import PaginationFooter from './PaginationFooter';
import HeaderBar from './HeaderBar';
import _ from 'lodash';
import '../css/App.css';

const App = () => {
    const [members, setMembers] = useState<IMemberList>({});
    const [absences, setAbsences] = useState<IAbsence[]>([]);
    const [status, setStatus] = useState<EPageStatus>(EPageStatus.loading);
    const [pageIndex, setPageIndex] = useState<TPageIndex>({ start: 0, end: 0, total: 0 });
    const [dateRange, setDateRange] = useState<TDateRange>({ start: null, end: null });
    const [absenceType, setAbsenceType] = useState<EAbsenceType>(EAbsenceType.all);
    const [pageTotal, setPageTotal] = useState(0);

    useEffect(() => {
        if (pageTotal < 10) {
            setPageIndex({ start: 0, end: pageTotal, total: pageTotal });
        }
        else {
            setPageIndex({ start: 0, end: 10, total: pageTotal })
        }
    }, [pageTotal]);

    useEffect(() => {
        if (Object.keys(members).length === 0 || absences.length === 0) {
            setStatus(EPageStatus.empty);
        } else {
            setStatus(EPageStatus.success);
        }
    }, [absences, members]);

    useEffect(() => {
        if (memberData.message === "Success" && absenceData.message === "Success") {
            setStatus(EPageStatus.success);
            setMembers({ ..._.mapKeys(memberData.payload, 'userId') });
            let tempAbsenceData = absenceData.payload.filter((absence) => {
                if (absenceType === EAbsenceType.all) {
                    return true;
                }
                else if (absenceType === absence.type) {
                    return true;
                } else {
                    return false;
                }
            });

            tempAbsenceData = tempAbsenceData.filter((absence) => {
                const startDate = new Date(absence.startDate);
                const endDate = new Date(absence.endDate);
                if (dateRange.start != null && dateRange.end != null) {
                    if (startDate >= dateRange.start && endDate <= dateRange.end) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return true;
                }
            });

            setPageTotal(tempAbsenceData.length);
            setAbsences(tempAbsenceData.slice(pageIndex.start, pageIndex.end));
        } else {
            setStatus(EPageStatus.error);
        }
    }, [pageIndex, absenceType, dateRange]);

    const renderData = () => {
        if (status === EPageStatus.loading) {
            return (<div className="ui active large loader"></div>);
        }
        else if (status === EPageStatus.error) {
            return (
                <div id="error-message" className="ui negative message">
                    <div className="header">Some error occurred</div>
                    <p>Please reload and try again</p>
                </div>
            );
        }
        else if (status === EPageStatus.empty) {
            return (
                <div id="empty-message" className="ui warning message">
                    <div className="header">No absence available</div>
                    <p>Please adjust filter or try again</p>
                </div>
            );
        }
        else {
            return (<AbsenceList members={members} absences={absences} />);
        }
    }

    return (
        <div id="app-container" className="ui container">
            <HeaderBar title="Absence Manager" setDateRange={setDateRange} setAbsenceType={setAbsenceType} absenceType={absenceType} />
            <PaginationFooter pageIndex={pageIndex} setPageIndex={setPageIndex} />
            {renderData()}
        </div>
    )
};

export default App;