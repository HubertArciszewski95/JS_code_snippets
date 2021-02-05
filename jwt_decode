 // How to decode JWT token in Postman
 const response = pm.response.json();
 
 const decodeRefreshToken = jwt_decode(response.refreshToken);
 
 function jwt_decode(jwt) {
    const parts = jwt.split('.'); // header, payload, signature
    return JSON.parse(atob(parts[1]));
}
