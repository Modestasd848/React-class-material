import User from '../../db/UserModel.js';

export function signIn(req, res) {
  res.json({
    hello: 'Hello, world, signIn',
  });
}

export async function signUp(req, res) {
  try {
    const { email, password, firstName, lastName, dateOfBirth } = req.body;

    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      dateOfBirth,
    });

    const resp = {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      id: user.id,
    };

    res.json(resp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export function signOut(req, res) {
  res.json({
    hello: 'Hello, world, signOut',
  });
}
