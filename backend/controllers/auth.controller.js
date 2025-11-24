export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    res.send("Sign up route called");
};

export const login = async (req, res) => {
    res.send("Login route called");
};

export const logout = async (req, res) => {
    res.send("Logout route called");
};