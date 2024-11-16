export default function SearchBar() {
    const handleCreateEvent = (e) => {
        e.preventDefault();
        console.log(document.cookie); 
        console.log("Create Event button clicked");
    }

    return (
        <div className="bg-black rounded-md border-2 border-blue-900 flex justify-between items-center w-3/4 text-white mx-auto px-8">
            <div className="flex-1">
                <input type="text" name="" id="" placeholder="don't even think about it, doesn't work" className="w-3/4 mx-4 p-1 rounded-md border-1 border-orange-900" />
            </div>
            <div className="mr-4">Filter</div>
            <div className="m-1 px-2">
                <button className="bg-black border-2 text-green-500 rounded-lg px-2 py-1 my-2 border-blue-900" onClick={handleCreateEvent}>
                    + Add an Event
                </button>
            </div>
        </div>
    )
}