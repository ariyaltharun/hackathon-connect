import Layout from "./Layout";

export default function Login() {
    return <Layout>
        <div className="z-[1] flex flex-row justify-center items-center h-full">
            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" />
                <label htmlFor="">Passwor</label>
                <input type="text" />
            </form>
        </div>
    </Layout>
}