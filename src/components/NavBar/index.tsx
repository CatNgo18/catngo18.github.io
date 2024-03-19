import Link from 'next/link';

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/skills">Skills</Link>
            </li>
            <li>
                <Link href="/projects">Projects</Link>
            </li>
            <li>
                <Link href="/contact">Resume</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
      </ul>
    );
};

export default NavBar;