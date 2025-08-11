import './App.css'

type ButtonProps = {
    title: string;
}

function Button({ title }: ButtonProps) {
    return (
        <>
            <button className='button'>
                {title}
            </button>
        </>
    )
}

export default Button;
