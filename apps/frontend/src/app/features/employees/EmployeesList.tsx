import { EmployListProps } from "../../types";



const EmployeesList = ({ users }: EmployListProps) => {
    return (
        <div>
            <h1> EmployeesList </h1>
            <div>
                {users.map(({ name, email, id }) => {
                    return <div key={`${id.name}`}>
                        <p>{name.first}</p>
                        <p>{name.last}</p>
                        <p>{email}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default EmployeesList
