import React from "react";
import { connect } from "react-redux";
import { userActionCreators, UserState } from '../../userStore';
import { pagination, GetSequence } from '../utils';

const DISPLAY_PAGE_COUNT = 10;

/* <li className="page-item" aria-current="page">
    <a className="page-link text-center page-number active-page" href="#">1</a>
</li>
<li className="page-item">
    <a className="page-link text-center page-number" href="#">2</a>
</li> */

class TablefooterBase extends React.PureComponent<UserState & { dispatch: any }>{

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

        const { minPage, maxPage } = pagination(pageCount, DISPLAY_PAGE_COUNT, pageIndex);
        const pages = GetSequence(minPage, maxPage);
        console.log(maxPage,pageCount);
        return (
            <div className="card-footer shadow-sm d-flex justify-content-between align-items-center grid-footer">
                <div>
                    <span>Showing: <span>{startIndex}</span> of <span>{startIndex + users.length - 1}</span >;
                        Total: <span>{userCount}</span>
                    </span>
                </div>
                {/* <div className=""> */}
                    <ul className="pagination d-flex align-items-center">
                        <li key="prev" className={`page-item ${minPage === 1 ? 'disabled' : ''}`} onClick={() => pageIndex !== 1 && this.goToPage(pageIndex - 1)}>
                            <a className="page-link border-0">Prev</a>
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
                        <li key="next" className={`page-item ${maxPage === pageCount ? 'disabled' : ''}`}  onClick={() => pageIndex !== pageCount && this.goToPage(pageIndex + 1)}>
                            <a className="page-link border-0" href="#">Next</a>
                        </li>
                    </ul>
                {/* </div> */}
            </div>);
    }
};


const Tablefooter = connect(state => state)(TablefooterBase) as React.ComponentClass<{}>;

export default Tablefooter;