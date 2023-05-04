import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

function Background({ count, setCount }: { count: number, setCount: any }) {


    return (
        <div className="body-background">

            {/* Shows form depending on count */}
            {count === 1 &&
                <RegisterForm setCount={setCount} />
            }
            {count === 0 &&
                <LoginForm setCount={setCount} />
            }


        </div>
    )




}

export default Background