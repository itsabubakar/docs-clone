import { Button } from "@material-tailwind/react"

function Header() {
    return (
        <div className="flex items-center">
            <Button
                color="white"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple={"dark"}
                className="hidden md:inline-flex border-0 w-5 h-10 justify-center items-center"
            >
                <span className="material-icons text-2xl text-blue-600">
                    menu
                </span>
            </Button>
            <h1 className="material-icons text-3xl text-blue-600 hidden md:inline-flex ml-2">
                description
            </h1>
        </div>
    )
}
export default Header