import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center mt-44">
            <h2 className="text-3xl">Whoops!</h2>
            <p>We could not find the page you were looking for.</p>
            <p><Link href="/">Take me home!</Link></p>
        </div>
    )
}