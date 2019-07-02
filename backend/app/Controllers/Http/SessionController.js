"use strict";

const User = use("App/Models/User");

class SessionController {
  async store({ request, auth }) {

    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    const user = await User.findBy("email", email);

    return {
      auth: token,
      username: user.username,
      email: user.email,
      isCust: user.isCustomer,
    };
  }
}

module.exports = SessionController;
