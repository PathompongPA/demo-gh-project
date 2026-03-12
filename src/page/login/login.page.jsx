import { cva } from "class-variance-authority"

const style = {
    page: cva(["border border-white/20 ", "p-8 rounded-2xl"]),
    title: cva(["text-3xl", "text-white/80"])
}
export default function LoginPage() {
    return (
        <div className={style.page()}>
            <h2 className={style.title()}>login</h2>
        </div>
    )

};
