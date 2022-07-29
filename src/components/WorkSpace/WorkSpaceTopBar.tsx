
export default function WorkSpaceTopBar() {
    return (
        <div className="d-flex justify-content-between workspace-operator-bar" >
            <div className="d-flex align-items-center">
                <ol className="breadcrumb nav-operator">
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item">Users</li>
                    <li className="breadcrumb-item active" aria-current="page">Overview</li>
                </ol>
            </div>

            <div className="d-flex align-items-center">
                <button type="button" className="btn btn-primary btn-add-user mdi mdi-account-plus-outline " data-bs-toggle="modal" data-bs-target="#ShowEditUserDialog">Add user</button>
            </div>
        </div>
    );
}
