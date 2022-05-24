function Country({post, index}) {

    return( 
        <>
            <tr style={{backgroundColor: (index % 2 === 0 ? '#424242' : '#535353')}}>  
                <td>{post.name}</td>   
                <td>{post.area}</td>   
                <td>{post.region}</td>  
            </tr>
        </>
    )
    
}

export default Country;