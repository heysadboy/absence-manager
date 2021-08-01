import { FC } from 'react';
import { TPageIndex } from '../util/Types';
import '../css/PaginationFooter.css';

interface IPaginationFooter {
    pageIndex: TPageIndex;
    setPageIndex: (pageIndex: TPageIndex) => void;
}

const PaginationFooter: FC<IPaginationFooter> = ({ pageIndex, setPageIndex }) => {

    const previousButton = () => {
        if (pageIndex.start > 0) {
            setPageIndex({ start: pageIndex.start - 10, end: pageIndex.start, total: pageIndex.total });
        }
    }

    const nextButton = () => {
        if (pageIndex.end < pageIndex.total) {
            if (pageIndex.end + 10 > pageIndex.total) {
                setPageIndex({ start: pageIndex.end, end: pageIndex.total, total: pageIndex.total });
            }
            else {
                setPageIndex({ start: pageIndex.end, end: pageIndex.end + 10, total: pageIndex.total });
            }
        }
    }

    return (
        <div id="footer" className="ui bottom fixed menu">
            <div className="ui container">
                <div id="footer-text">
                    <p>Showing <b>{pageIndex.start + 1}</b> - <b>{pageIndex.end}</b> of <b>{pageIndex.total}</b> absentees</p>
                </div>
                <div className="right menu">
                    <div className="ui basic buttons">
                        <button className="ui button" onClick={previousButton}><i className="left chevron icon"></i></button>
                        <button className="ui button" onClick={nextButton}><i className="right chevron icon"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PaginationFooter;