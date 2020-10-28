import React, { Component } from 'react';
import PolicyService from '../services/PolicyService';

class ListPolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            policies: []
        }
        this.addPolicy = this.addPolicy.bind(this);
    }
    componentDidMount() {
        PolicyService.getPolicies().then((res) => {
            this.setState({policies: res.data});
        });
    }

    addPolicy() {
        this.props.history.push('/add-policy');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Policy List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addPolicy}>Add Policy</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Policy Agent</th>
                                <th>Policy Owner</th>
                                <th>Policy Underwriter</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.policies.map(
                                    policy =>
                                    <tr key={policy.number}>
                                        <td>{policy.agent}</td>
                                        <td>{policy.owner}</td>
                                        <td>{policy.underwriter}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListPolicyComponent;