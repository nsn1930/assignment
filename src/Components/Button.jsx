function Button({smaller, reset, oceania, sort}) {

    return(
        <>
            <button className='btn' onClick={smaller}>SMALLER THAN LITHUANIA</button>
            <button className='btn' onClick={oceania}>OCEANIA COUNTRIES</button>
            <button className='btn' onClick={reset}>TABLE RESET</button>
        </>
    )
}

export default Button;