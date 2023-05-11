import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { secretKey } from './config';
import { Request, Response } from 'express';
import { Session } from 'express-session';

interface User {
  id: number;
  username: string;
}

passport.use(new LocalStrategy(async (username: string, password: string, done) => {
  // Here you would check if the username and password are valid
  // For example, querying a database
  if (username === 'admin' && password === 'password') {
    return done(null, { id: 1, username: 'admin' } as User);
  } else {
    return done(null, false);
  }
}));

const resolvers = {
  Query: {
    players: () => {
      // Add code to fetch players from the database
      // For example, using a library like node-postgres:
      // const { rows } = await pool.query('SELECT * FROM players');
      // return rows;
      return [];
    },
  },
  Mutation: {
    login: async (_: any, { username, password }: { username: string, password: string }) => {
      // Authenticate the user using Passport.js
      const user = await new Promise<User>((resolve, reject) => {
        passport.authenticate('local', (err: any, user: User) => {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        })({ body: { username, password } }, null);
      });

      if (!user) {
        throw new Error('Invalid username or password');
      }

      // Generate a JWT token
      const token = jwt.sign({ id: user.id, username: user.username }, secretKey);

      return token;
    },
    logout: async (_: unknown, __: unknown, { req, res }: {req: Request, res: Response}) => {
        // Destroy the current session
        req.session.destroy((err: any) => {
          if (err) {
            console.log(err);
            return false;
          } else {
            // Remove the user's token from the response cookie
            res.clearCookie('token');
            return true;
          }
        });
      },
      
  },
};

export default resolvers;
