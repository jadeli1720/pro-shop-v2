import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentPage = () => {
	const [paymentMethod, setPaymentMethod] = useState('PayPal');

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<Form>
				<Form.Group>
					<Form.Label as='legend'>Select Method</Form.Label>
					<Col>
						<Form.Check
							className='my-2'
							type='radio'
							label='PayPal or Credit Card'
							id='PayPal'
							name='paymentMethod'
							value='PayPal'
							checked
              onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
					</Col>
				</Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
			</Form>
		</FormContainer>
	);
};

export default PaymentPage;
