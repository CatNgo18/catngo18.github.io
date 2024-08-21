'use client'

import Image from "next/image";
import Link from "next/link";
import me from '../../../../public/me.jpg'

function About() {
    return (
        <div id="about-section" className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center m-10 w-1/2 max-w-4xl">
            <div className="relative w-[256px] h-[256px] flex-none">
                <Image src={me} width={256} height={256} alt="picture of me" className="drop-shadow top-0 left-0 absolute rounded-full row-[1] col-[1]"/>
                <div className="top-0 right-0 -z-50 absolute w-[260px] h-[260px] bg-accent blur-xl rounded-full"/>
            </div>
            <div className="text-center lg:text-left">
                <h2 className="text-3xl m-auto lg:m-0 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent w-fit">Hey, nice to meet you!</h2>
                <div className="text-lg">
                    <p>
                        My name is Cattien Ngo and I&#39;m on a mission to make the web a more beautiful and user-friendly place.
                        I thrive on challenges and love collaborating with creative teams.
                    </p>
                    <br/>
                    <p>
                        <span>Interested?</span> <Link href="/#contact-section">Let&#39;s talk!</Link>
                    </p>
                    <br/>
                    <h4 className="mt-8">
                        Currently obsessed with:
                    </h4>
                    <p className="italic">
                        Tamagotchis and making polymer clay charms
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About