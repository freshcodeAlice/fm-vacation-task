import '../App.css';
import LoginForm from '../components/Login';

function LoginPage(props) {


    return (
        <section className='background'>
            <Header>
                <button>SignUp</button>
            </Header>
            <LoginForm />
        </section>
    )
}

export default LoginPage;