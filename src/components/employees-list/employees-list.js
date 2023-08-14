import EmployeesListItem from '../emloyees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {

        return (
            <EmployeesListItem {...item}/>
        )
    });

    return (
        <ul className="app-list-group">
            {elements}        
        </ul>
    )
}

export default EmployeesList;