export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-10">
            <div className="container mx-auto text-center text-sm">
                Built by Ravi Kumar • © {new Date().getFullYear()}
                <div className="mt-2 space-x-4">
                    <a href="">Github</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}