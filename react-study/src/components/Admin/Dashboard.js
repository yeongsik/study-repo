import React from 'react';

function Dashboard() {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Admin Dashboard</h1>

            {/* Sales Summary */}
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card text-white bg-primary">
                        <div className="card-body">
                            <h5 className="card-title">Total Sales</h5>
                            <p className="card-text fs-4">$50,000</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-white bg-success">
                        <div className="card-body">
                            <h5 className="card-title">Orders Completed</h5>
                            <p className="card-text fs-4">120</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-white bg-warning">
                        <div className="card-body">
                            <h5 className="card-title">Pending Orders</h5>
                            <p className="card-text fs-4">25</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className="card mb-4">
                <div className="card-header">
                    <h5>Recent Orders</h5>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>#1001</td>
                            <td>John Doe</td>
                            <td><span className="badge bg-success">Completed</span></td>
                            <td>$500</td>
                            <td>2024-12-10</td>
                        </tr>
                        <tr>
                            <td>#1002</td>
                            <td>Jane Smith</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                            <td>$250</td>
                            <td>2024-12-11</td>
                        </tr>
                        <tr>
                            <td>#1003</td>
                            <td>Mark Lee</td>
                            <td><span className="badge bg-danger">Cancelled</span></td>
                            <td>$0</td>
                            <td>2024-12-11</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* User Analytics */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>New Users</h5>
                        </div>
                        <div className="card-body">
                            <p className="fs-4">15 New Users This Week</p>
                            <p className="text-muted">Total Users: 1,250</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Traffic Sources</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Direct
                                    <span className="badge bg-primary rounded-pill">45%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Search Engines
                                    <span className="badge bg-success rounded-pill">35%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Social Media
                                    <span className="badge bg-warning rounded-pill">20%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
