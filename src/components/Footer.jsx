export default function Footer() {
    return (
        <footer className="bg-violet-600 text-white py-6 mt-10">
            <div className="container mx-auto text-center font-bold text-base">
                Built by Ravi Kumar • © {new Date().getFullYear()}
                <div className="mt-2 space-x-4">
                    <a href="">Github</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}