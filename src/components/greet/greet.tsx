type GreetProps = {
    name?: string
}

export function Greet(props: GreetProps){
    return(
        <div>hello {props.name}</div>
    )
}