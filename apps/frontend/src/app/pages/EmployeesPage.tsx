import { useApi } from '../../hooks/useApi';
import EmployeesList from '../features/employees/EmployeesList';
import { User } from '../types';

const EmployeesPage = () => {
    const state = useApi<User[]>(`https://randomuser.me/api/?results=5`);

    const { isError, isLoading, data } = state;

    if (isError) {
        return <p>Error</p>
    }

    if (isLoading) {
        return <p>Loading ... </p>
    }

    return (
        <div>
            <h1>Employees Page</h1>
            {data && <EmployeesList users={data} />}
        </div>
    )
}

export default EmployeesPage
