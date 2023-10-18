export async function getServerSideProps({ params }){
    const { contents } = params;
   
    return{
        props : {
             contents,
        },
    }
}

export default function hello(props){
    return (
        <h1>Hello {props.contents}!</h1>
    )
}