/* eslint-disable react/prop-types */
import { Form, ProgressBar, Button } from 'react-bootstrap'
import store from '../redux/store';

const List = ({ item }) => {

  const remove = (removeId: any) => {
    store.dispatch({
      type: 'REMOVE',
      newUser: removeId
    });
  }

  return (
    <tr>
      <td>
        <Form.Group className="mb-1" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label='' />
        </Form.Group>
      </td>
      <td>
        <span  >{item.name}<br /></span>
        <div>{item.email}</div>

      </td>
      <td>
        {item.position}<br />
        {item.tel}
      </td>
      <td> {item.country}</td>
      <td> <Button variant="success"></Button>
        {item.status}
      </td>

      <td> <ProgressBar now={item.portfolio} label={`${item.portfolio}%`} /></td>
      <td>Employee</td>
      <td>
        <Button variant="light">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
          Edit
        </Button>

        <Button variant="light" id={item.id} onClick={e => remove(e.target.id)}>
          DELETE
        </Button>
      </td>
    </tr>
  )
}

export default List
