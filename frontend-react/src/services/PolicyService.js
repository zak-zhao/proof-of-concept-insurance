import axios from 'axios';

const POLICY_API_BASE_URL = "http://localhost:8080/api/v1/policies";
class PolicyService {
    getPolicies() {
        return axios.get(POLICY_API_BASE_URL);
    }
}

export default new PolicyService()