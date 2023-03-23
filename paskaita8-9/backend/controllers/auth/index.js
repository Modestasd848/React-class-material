import User from '../../db/UserModel.js';

export function signIn(req, res) {
  res.json({
    hello: 'Hello, world, signIn',
  });
}

export function signUp(req, res) {
  try {
    const { email, password, firstName, lastName, dateOfBirth } = req.body;

    const user = User.create({
      email,
      password,
      firstName,
      lastName,
      dateOfBirth,
    });

    const { __v, ...rest } = user;

    res.json(rest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export function signOut(req, res) {
  res.json({
    hello: 'Hello, world, signOut',
  });
}
