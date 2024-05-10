import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="footerWrapper">
                <div className="contactDetails">
                    <p>0498 444 233</p>
                    <p className="email link">hayden.j.riley@gmail.com</p>
                </div>
                <div className="line"></div>
                <div className="websiteWatermark">
                    <Link target="_blank" href="https://blueroomstudios.com.au">
                        <p>site by blueroom studios</p>
                    </Link>
                </div>
            </div>
        </>
    )
}