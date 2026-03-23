import { cva } from "class-variance-authority"


let style = {
    container: cva("flex flex-col gap-8 p-8 lg:w-125 *:w-full w-screen h-screen justify-center items-center"),
    title: cva(
        "font-bold text-5xl text-80 text-center",
        "select-none"
    ),

    input: {
        container: cva(" flex flex-col *:border-2 *:border-20 *:text-40 *:focus:outline-2 *:focus:outline-20 gap-4"),
        user: cva(["text-xl p-4 rounded-lg"]),
        password: cva(["text-xl p-4 rounded-lg"]),
    },

    btn: {
        SignIn: cva([
            "p-4",
            "bg-60 rounded-lg text-white font-bold text-2xl ",
            "hover:cursor-pointer duration-300 hover:bg-80"
        ])
    }
}

export default function SignInPage() {
    return (
        <div className={style.container()}>
            <h1 className={style.title()}>My To Do</h1>

            <div className={style.input.container()}>
                <input className={style.input.user()} type="text" placeholder="Enter your user name." />
                <input className={style.input.password()} type="password" placeholder="Enter your PIN." />
            </div>

            <button className={style.btn.SignIn()}>Register</button>
        </div>
    )
};
