import { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import { User } from '../../libs/types';
import validator from 'validator';
// import { COOKIE } from '../../libs/constants';
import cookie from 'cookie';
import ms from 'ms';
import { validateCaptchaResult, IS_CAPTCHA_ENABLED } from '../../libs/captcha';

type ErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(501).json({
      error: {
        code: 'method_unknown',
        message: 'This endpoint only responds to POST'
      }
    });
  }

  const email: string = ((req.body.email as string) || '').trim().toLowerCase();
  const token: string = req.body.token as string;
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      error: {
        code: 'bad_email',
        message: 'Invalid email'
      }
    });
  }

  if (IS_CAPTCHA_ENABLED) {
    const isCaptchaValid = await validateCaptchaResult(token);

    if (!isCaptchaValid) {
      return res.status(400).json({
        error: {
          code: 'bad_captcha',
          message: 'Invalid captcha'
        }
      });
    }
  }

  let id = nanoid();
  let createdAt: number = Date.now();
  let statusCode = 200;
  let name: string | null | undefined = undefined;
  let username: string | null | undefined = undefined;
  
  return res.status(statusCode).json({
    id,
    email,
    createdAt,
    name,
    username
  });
}
