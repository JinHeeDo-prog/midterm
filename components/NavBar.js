import Link from "next/link"


export default function Navbar(){
    return(
        <>
            <div>
                <Link href ="/">| Home</Link> |
                <Link href ="/About"> About</Link> |
                <Link href="/Contact"> Contact</Link> |
                <Link href="/posts/${sdg}"> hello</Link> |
                <Link href="/posts/Post"> index</Link> |

            </div>
        </>
    )
}