export default function Footer() {
    const option1 = [
        { name: "Home", link: "/" },
        { name: "Download", link: "/download" },
        { name: "Upload", link: "/upload" },
    ]
    const option2 = [
        { name: "FAQs", link: "/faq" },
        { name: "Community", link: "/community" },
        { name: "Help", link: "/help" },
    ]
    return (
        <>
            <footer className="bg-[#674AFE] text-white p-10 flex md:flex-row items-center justify-evenly flex-col">
                <div className="text-5xl">
                    <h1 className="font-bold">Connect With Us</h1>
                </div>
                <div className="flex md:flex-row flex-col">
                    <div>
                        <ul>
                            {option1.map((item, index) => (
                                <li key={index} className="text-xl m-4">{item.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {option2.map((item, index) => (
                                <li key={index} className="text-xl m-4">{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}