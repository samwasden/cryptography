const bcrypt = require("bcryptjs")
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existingUser = bcrypt.compareSync(password, users[i].passwordHash)
        if (users[i].username === username && existingUser) {
          let userDisplay = {
            username: users[i].username,
            email: users[i].email,
            firstName: users[i].firstName,
            lastName: users[i].lastName
          }
          console.log("successfully logged in user")
          res.status(200).send(userDisplay)
          return
        }
      }
      res.status(400).send("User not found.")
    },


    register: (req, res) => {
        console.log('Registering User')

        const {username, email, firstName, lastName, password} = req.body

        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)

        let newUser = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }

        users.push(newUser)
        console.log(users)

        res.status(200)
    }
}