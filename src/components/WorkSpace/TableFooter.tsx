import  React  from "react";
import { connect } from "react-redux";
import {UserState} from '../../userStore';

class TablefooterBase extends React.PureComponent<UserState>{
    render() {
        const { pageIndex, users, pageSize, userCount } = this.props;
        const startIndex = (pageIndex - 1) * pageSize + 1;
        return (
            <div className="card-footer shadow-sm d-flex justify-content-between align-items-center grid-footer">
                <div>
                    <span>Showing: <span>{startIndex}</span> of <span>{startIndex + users.length - 1}</span >;
                        Total: <span>{userCount}</span>
                    </span>
                </div>
                <div className="">
                    <ul className="pagination">
                        <li className="page-item disabled ">
                            <a className="page-link border-0">Prev</a>
                        </li>
                        <li className="page-item" aria-current="page">
                            <a className="page-link text-center page-number active-page" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link text-center page-number" href="#">2</a>
                        </li>
                        <li className="page-item disabled">
                            <a className="page-link border-0" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            </div>);
    }
};


const  Tablefooter = connect(state=>state)(TablefooterBase) as React.ComponentClass<{}>;

export default  Tablefooter;