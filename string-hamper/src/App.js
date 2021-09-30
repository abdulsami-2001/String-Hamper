import React from 'react'
const App = () => {
    return (
        <>
            <div className="card text-center"  style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}} >
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="/" className="btn btn-danger">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
            <div className="container" >
                <form>
                    <label htmlFor="Email Address">
                        <h3 >Email*:</h3>
                        <input type="email" placeholder="john@abc.com" name='Login_EmailField' required  />
                    </label>
                    <br />
                    <label htmlFor="Password">
                        <h3 >Password*:</h3>
                        <input type="password" name='Login_PasswordField' placeholder="Your passowrd" required />
                    </label>
                    <br />
                    <input type="submit" value="Login" />
                    <div>
                        <p >Create An Account?</p>
                        <button >Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default App
