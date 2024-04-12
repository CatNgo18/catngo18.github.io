import Link from "next/link"

function Contact() {
  return (
    <div id='contact-section'>
      <h2>Contact</h2>
      <div className="flex flex-row gap-10 justify-center">
        <Link href="https://www.linkedin.com/in/cattien-ngo/">LinkedIn</Link>
        <Link href="https://github.com/CatNgo18">GitHub</Link>
      </div>
    </div>
  )
}
 
export default Contact