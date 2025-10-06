import React from "react"
import Image from "next/image"

export default function Partners() {
    const partners = [
        { src: "/images/fedex.png", alt: "FedEx" },
        { src: "/images/uber.png", alt: "Uber" },
        { src: "/images/collect.png", alt: "Geopost" },
        { src: "/images/geopost.png", alt: "Geopost" },
        { src: "/images/dash.png", alt: "Dash" },
        { src: "/images/amazon.png", alt: "Amazon" }
    ]

    return (
        <div className="max-w-6xl mx-auto mt-16 border border-gray-400 rounded-lg p-6">
            <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Official partner with</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-items-center">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-full h-24"
                    >
                        <Image
                            src={partner.src}
                            alt={partner.alt}
                            width={120}
                            height={60}
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
