import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const ShippingPage = () => {
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [country, setCountry] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('submit');
	};

	return (
		<FormContainer>
			<h1>Shipping</h1>
			<Form onSubmit={submitHandler}>
				{/* address */}
				<Form.Group controlId='address' className='my-2'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					></Form.Control>
				</Form.Group>
				{/* city */}
				<Form.Group controlId='city' className='my-2'>
					<Form.Label>City</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter city'
						value={city}
						onChange={(e) => setCity(e.target.value)}
					></Form.Control>
				</Form.Group>
				{/* postal code */}
				<Form.Group controlId='postalCode' className='my-2'>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter postal code'
						value={postalCode}
						onChange={(e) => setPostalCode(e.target.value)}
					></Form.Control>
				</Form.Group>
				{/* country */}
				<Form.Group controlId='country' className='my-2'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter county'
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					></Form.Control>
				</Form.Group>
        <Button type='submit' variant='primary' className='my-2' >Continue</Button>
			</Form>

		</FormContainer>
	);
};

export default ShippingPage;
