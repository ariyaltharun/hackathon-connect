export default function Footer() {
    // return <div className="flex justify-center items-end absolute top-0 left-0 h-dvh w-full">
    //     <p className="py-4">Copyright © 2024</p>
    // </div>
    /* Messed Up */
    return <div className="z-0 h-full flex"> {/* flex flex-col h-dvh bg-transparent items-end"> */}
        <p className="mx-auto">Copyright © 2024</p>
    </div>
}