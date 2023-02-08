import { singInWithGoogle } from '../../../firebase';

const Login = () => {
    return (
        <div className='dashboard'>
            <button onClick={singInWithGoogle}>
                Sign in with Google
            </button>

        </div>
    )
}

export default Login;