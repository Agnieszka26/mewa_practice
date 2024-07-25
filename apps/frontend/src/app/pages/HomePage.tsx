import { AuthContextProvider } from '../components/Auth/AuthContext'
import AuthInfo from '../components/Auth/AuthInfo'



const HomePage = () => {

    return (
        <div>
            <h1> Home page </h1>
            <p> routed pages </p>
            <AuthContextProvider>

                <AuthInfo />
            </AuthContextProvider>

        </div>
    )
}

export default HomePage
