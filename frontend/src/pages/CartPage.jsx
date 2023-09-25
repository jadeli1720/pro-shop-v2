import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-router-bootstrap'
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';

const CartPage = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>CartPage</div>
  )
}

export default CartPage