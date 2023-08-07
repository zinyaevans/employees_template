import EmployeesListItem from '../emloyees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>         
        </ul>
    )
}

export default EmployeesList;