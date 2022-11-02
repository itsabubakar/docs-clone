import { Button } from "@material-tailwind/react"

function Header() {
    return (
        <div className="flex items-center sticky top-0 z-50 px-4 py-5 shadow-md bg-white">
            <Button
                color="white"
                buttonType="outline"
                rounded={true}
                ripple={"dark"}
                className="inline-flex border-0 w-5 h-10 justify-center  items-center"
            >
                <span className="material-icons text-2xl text-gray-600">
                    menu
                </span>
            </Button>
            <span className="material-icons text-3xl text-blue-600  md:inline-flex ml-2">
                description
            </span>

            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-700 focus-within:shadow-md" >
                <span className="material-icons text-2xl text-gray-800">
                    search
                </span>
                <input type="text" placeholder="Search" className="px-5 text-base bg-transparent outline-none flex-grow" />
            </div>
        </div>
    )
}
export default Header