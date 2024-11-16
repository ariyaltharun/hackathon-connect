import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Background from "../components/Background"
import Layout from "./Layout"

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col min-h-full min-w-full justify-center">
                <div className="my-auto text-center px-8">
                    <p className="text-5xl font-mono">
                        Hackathon Connect
                    </p>
                    <div className="text-2xl">Find Your Perfect Hackathon Teammates Today!</div>
                </div>
                <div className="py-4 self-center">
                    <p className="font-mono">Made with ❤️</p>
                </div>
            </div>
        </Layout>
    )
}
