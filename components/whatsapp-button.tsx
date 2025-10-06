"use client"

import Image from "next/image"

export function WhatsAppButton() {
    const handleWhatsAppClick = () => {
        const phoneNumber = "447853786338" // Remove + and spaces for WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
                title="Contact us on WhatsApp"
            >
                <Image
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    width={100}
                    height={100}
                    className="w-10 h-10"
                />
                <span className="sr-only">WhatsApp</span>
            </button>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat with us on WhatsApp
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
        </div>
    )
}
