import { Fragment } from "react";

export default function Tablefooter(){
    return (
        <div className="card-footer shadow-sm d-flex justify-content-between align-items-center grid-footer">
            <div>
                <span>Showing: 15 of 24</span>
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