import { useState, useEffect } from 'react';
import absenceData from '../data/absences.json';
import memberData from '../data/members.json';
import { IMemberList, IAbsence } from '../util/interfaces';
import { TPageIndex } from '../util/types';
import AbsenceList from './AbsenceList';
import PaginationFooter from './PaginationFooter';
import _ from 'lodash';

enum EStatus {
    loading = 'loading',
    error = 'error',
    success = 'success'
}

const App = () => {
    const [members, setMembers] = useState<IMemberList>({});
    const [absences, setAbsences] = useState<IAbsence[]>([]);
    const [status, setStatus] = useState<EStatus>(EStatus.loading);
    const [pageIndex, setPageIndex] = useState<TPageIndex>({ start: 0, end: 0, total: 0 });

    useEffect(() => {
        const pageTotal: number = absenceData.payload.length;
        if (pageTotal < 10) {
            setPageIndex({ start: 0, end: pageTotal, total: pageTotal });
        }
        else {
            setPageIndex({ start: 0, end: 10, total: pageTotal })
        }
    }, []);

    useEffect(() => {
        if (memberData.message === "Success" && absenceData.message === "Success") {
            setMembers({ ..._.mapKeys(memberData.payload, 'userId') });
            setAbsences(absenceData.payload.slice(pageIndex.start, pageIndex.end));
            setStatus(EStatus.success);
        }
        else {
            setStatus(EStatus.error);
        }
    }, [status, pageIndex]);

    if (status === EStatus.loading) {
        return (<div>Loading</div>);
    }
    else if (status === EStatus.error) {
        return (<div>Error</div>);
    }
    else {
        return (
            <div className="ui container">
                <h1>Absence Manager</h1>
                <AbsenceList members={members} absences={absences} />
                <PaginationFooter pageIndex={pageIndex} setPageIndex={setPageIndex} />
            </div>
        );
    }
};

export default App;