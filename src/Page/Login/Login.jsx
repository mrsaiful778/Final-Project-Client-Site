

const Login = () => {

    return (
        <div className="text-center py-10 ">
            <div className="bg-slate-400 py-10 px-10 w-96 text-center">
            <h3>Please Login</h3>
                <form>
                    <input type="text" name="name" placeholder="Name" id="" /> <br /> <br />
                    <input type="email" name="" placeholder="email" id="" /> <br /> <br />
                    <div>
                        <button className="btn btn-accent">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;