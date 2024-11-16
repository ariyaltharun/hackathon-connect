export default function Background({ children }) {
    return <div class="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:48px_48px]">
        { children }
    </div>
}