import Link from "next/link"


export default function Navbar(){
    return(
        <>
            <div>
                <Link href ="/">| Home</Link> |
                <Link href ="/about"> About</Link> |
                <Link href="/contact"> Contact</Link> |
                <Link href="/posts/hello"> hello</Link> |
                <Link href="/posts/Post"> index</Link> |

            </div>
        </>
    )
}