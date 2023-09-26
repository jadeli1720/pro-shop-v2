import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
	//.sign creates a token with the user id, the secret key, and an expiration time-frame (30 days)
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});

	//Set JWT as an HTTP-Only cookie
	res.cookie('jwt', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== 'development',
		sameSite: 'strict',
		//below is in milliseconds but needs to be converted to days
		maxAge: 30 * 24 * 60 * 60 * 1000, //30 Days
	});
};

export default generateToken;
