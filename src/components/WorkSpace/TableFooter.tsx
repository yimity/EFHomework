import React from "react";
import { connect } from "react-redux";
import { userActionCreators, UserState } from '../../userStore';
import { pagination, GetSequence } from '../utils';

const DISPLAY_PAGE_COUNT = 10;

class TablefooterBase extends React.PureComponent<UserState & { dispatch: any }>{

    private minPage: number;
    private maxPage: number;
    constructor(props) {
        super(props);
        this.minPage = -1;
        this.maxPage = -1;
    }

    isPageInRange = (index: number): boolean => {
        return index >= this.minPage && index <= this.maxPage;
    }

    fixPageIndex = (pageIndex: number, pageCount: number): number => {
        if (pageIndex < 1) {
            pageIndex = 1;
        }
        if (pageIndex > pageCount) {
            pageIndex = pageCount;
        }
        return pageIndex;
    }

    goToPage = (index: number): void => {
        const { dispatch, pageSize } = this.props;
        dispatch(userActionCreators.getUserList(index, pageSize));
    }

    render() {
        const { users, pageSize, userCount } = this.props;
        const pageCount = Math.ceil(userCount / pageSize);

        let { pageIndex } = this.props;
        pageIndex = this.fixPageIndex(pageIndex, pageCount);

        const startIndex = (pageIndex - 1) * pageSize + 1;
        let minPage = -1;
        let maxPage = -1;

        if (this.isPageInRange(pageIndex)) {
            minPage = this.minPage;
            maxPage = this.maxPage;
        }
        else {
            const range = pagination(pageCount, DISPLAY_PAGE_COUNT, pageIndex);
            minPage = range.minPage;
            maxPage = range.maxPage;
            this.minPage = minPage;
            this.maxPage = maxPage;
        }
        const pages = GetSequence(minPage, maxPage);
        return (
            <div className="card-footer shadow-sm d-flex justify-content-between align-items-center grid-footer">
                <div>
                    <span>Showing: <span>{startIndex}</span> of <span>{startIndex + users.length - 1}</span >;
                        Total: <span>{userCount}</span>
                    </span>
                </div>
                <ul className="pagination d-flex align-items-center">
                    <li key="prev" className={`page-item ${minPage === 1 ? 'disabled' : ''}`} onClick={() => pageIndex !== 1 && this.goToPage(pageIndex - 1)}>
                        <a className="page-link border-0" href="#">Prev</a>
                    </li>
                    {
                        minPage !== 1 && <li key="more-prev" className="page-item" aria-current="page" onClick={() => this.goToPage(this.fixPageIndex(pageIndex - DISPLAY_PAGE_COUNT, pageCount))}>
                            <a className="page-link text-center page-number" href="#">...</a>
                        </li>
                    }
                    {
                        pages.map(p => (
                            <li key={`page-${p}`} className="page-item" aria-current="page" onClick={() => this.goToPage(p)}>
                                <a className={`page-link text-center page-number ${p === pageIndex ? 'active-page' : ''}`} href="#">{p}</a>
                            </li>
                        ))
                    }
                    {
                        maxPage !== pageCount && <li key="more-next" className="page-item" aria-current="page" onClick={() => this.goToPage(this.fixPageIndex(pageIndex + DISPLAY_PAGE_COUNT, pageCount))}>
                            <a className="page-link text-center page-number" href="#">...</a>
                        </li>
                    }
                    <li key="next" className={`page-item ${maxPage === pageCount ? 'disabled' : ''}`} onClick={() => pageIndex !== pageCount && this.goToPage(pageIndex + 1)}>
                        <a className="page-link border-0" href="#">Next</a>
                    </li>
                </ul>
            </div>
            );
    }
};


const Tablefooter = connect(state => state)(TablefooterBase) as React.ComponentClass<{}>;

export default Tablefooter;