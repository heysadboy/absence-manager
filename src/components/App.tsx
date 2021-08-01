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

const App = () => {
    const [members, setMembers] = useState<IMemberList>({});
    const [absences, setAbsences] = useState<IAbsence[]>([]);
    const [status, setStatus] = useState<EPageStatus>(EPageStatus.loading);
    const [pageIndex, setPageIndex] = useState<TPageIndex>({ start: 0, end: 0, total: 0 });
    const [dateRange, setDateRange] = useState<TDateRange>({ start: "", end: "" });
    const [absenceType, setAbsenceType] = useState<EAbsenceType>(EAbsenceType.all);

    useEffect(() => {
        const pageTotal: number = absenceData.payload.length;
        if (pageTotal < 10) {
            setPageIndex({ start: 0, end: pageTotal, total: pageTotal });
        }
        else {
            setPageIndex({ start: 0, end: 10, total: pageTotal })
        }
    }, [absenceType, dateRange]);

    useEffect(() => {
        if (Object.keys(members).length === 0 || absences.length === 0) {
            setStatus(EPageStatus.empty);
        }
    }, [absences, members]);

    useEffect(() => {
        if (memberData.message === "Success" && absenceData.message === "Success") {
            setMembers({ ..._.mapKeys(memberData.payload, 'userId') });
            setAbsences(absenceData.payload.slice(pageIndex.start, pageIndex.end));
            setStatus(EPageStatus.success);

        } else {
            setStatus(EPageStatus.error);
        }

    }, [status, pageIndex, absenceType, dateRange]);

    if (status === EPageStatus.loading) {
        return (<div>Loading</div>);
    }
    else if (status === EPageStatus.empty) {
        return (<div>Empty</div>);
    }
    else if (status === EPageStatus.error) {
        return (<div>Error</div>);
    }
    else {
        return (
            <div id="app-container" className="ui container">
                <HeaderBar title="Absence Manager" setDateRange={setDateRange} setAbsenceType={setAbsenceType} absenceType={absenceType} />
                <PaginationFooter pageIndex={pageIndex} setPageIndex={setPageIndex} />
                <AbsenceList members={members} absences={absences} />
            </div>
        );
    }
};

export default App;