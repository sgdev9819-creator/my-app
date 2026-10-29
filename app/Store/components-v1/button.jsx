import Link from "next/link"
export default function Quick({text1,text2,text3,text4,text5,href1,href2,href3,href4,href5}) {

return (
<div className="button-container">
<Link href={href1}> 
        {text1}
    </Link>
    
<Link href={href2}>
        {text2}
    </Link>
    
<Link href={href3}>
        {text3}
    </Link>
    
<Link href={href4}>
        {text4}
    </Link>
    
<Link href={href5}>
        {text5}
    </Link>
</div>
)
}