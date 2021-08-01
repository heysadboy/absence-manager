import { FC } from 'react';
import { TPageIndex } from '../util/types';

interface IPaginationFooter {
    pageIndex: TPageIndex;
    setPageIndex: (pageIndex: TPageIndex) => void;
}

const PaginationFooter: FC<IPaginationFooter> = ({ pageIndex, setPageIndex }) => {

    const previousButton = () => {
        if (pageIndex.start > 0) {
            setPageIndex({ start: pageIndex.start - 10, end: pageIndex.start , total: pageIndex.total });
        }
    }

    const nextButton = () => {
        if (pageIndex.end < pageIndex.total) {
            if (pageIndex.end + 10 > pageIndex.total) {
                setPageIndex({ start: pageIndex.end, end: pageIndex.total, total: pageIndex.total });
            }
            else {
                setPageIndex({ start: pageIndex.end , end: pageIndex.end + 10, total: pageIndex.total });
            }
        }
    }

    return (
        <div className="ui middle aligned divided list">
            <div className="item">
                <div className="right floated content">
                    <div className="ui basic buttons">
                        <button className="ui button" onClick={previousButton}><i className="left chevron icon"></i></button>
                        <button className="ui button" onClick={nextButton}><i className="right chevron icon"></i></button>
                    </div>
                </div>
                <div className="content">Showing <strong>{pageIndex.start + 1}</strong> - <strong>{pageIndex.end}</strong> of <strong>{pageIndex.total}</strong> absentees</div>
            </div>
        </div>
    )
};

export default PaginationFooter;