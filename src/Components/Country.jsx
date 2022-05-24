function Country({post}) {

    return( 
        <>
            <tr>  
                <td>{post.name}</td>   
                <td>{post.area}</td>   
                <td>{post.region}</td>  
            </tr>
        </>
    )
    
}

export default Country;