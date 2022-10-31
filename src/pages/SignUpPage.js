import '../App.css';
import SignUpForm from '../components/SignUp';

function SignUpPage(props) {


    return (
        <section className='background'>
            <Header>
                <button>Login</button>
            </Header>
            <SignUpForm />
        </section>
    )
}

export default LoginPage;