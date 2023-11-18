import { Link } from 'react-router-dom';
import error from '../../assets/404.gif';

const ErrorPage = () => {
    return (
        <div className='max-w-screen-7xl mx-auto '>
            <div className='text-center'>
                <img className='' src={error} alt="" />
            
            <div>
                <Link to="/">
                <button className='btn btn-accent'> Go to home</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;