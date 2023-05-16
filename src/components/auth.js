
const auth = async () =>{
    const token = localStorage.getItem('jwtToken');

    const res = await fetch('http://127.0.0.1:8000/check-auth', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
        },
    });

    if (res.ok) {
        const userInfo = await res.json();
        return userInfo;
    } else {
        const errorResponse = await res.json();
        return  errorResponse.message
    }
}

export default auth



