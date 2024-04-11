import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='fixed top-1 left-1/2 -translate-x-1/2 text-center flex justify-around w-1/2 mx-auto font-roboto-slab'>
            <Link href="#main-section">Main</Link>
            <Link href="#experience-section">Experience</Link>
            <Link href="#projects-section">Projects</Link>
            <Link href="#contact-section">Contact</Link>
      </div>
    );
};

export default NavBar;