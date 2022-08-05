import CardFooter from './CardFooter';
import { Table } from 'react-bootstrap'
import List from './List';
import { useSelector } from 'react-redux';
import { getUserList } from '../redux/selector';

const ListForm = () => {
  const array = useSelector(getUserList);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> </th>
            <th>Name</th>
            <th>POSITION</th>
            <th>COUNTRY</th>
            <th>STATUS</th>
            <th>PORTFOLIO</th>
            <th>ROLE</th>
          </tr>
        </thead>
        <tbody>
          {
            array.map((item: any) => ((
              <List key={item.id} item={item} />
            )))}
        </tbody>
      </Table>
      <CardFooter />
    </>
  )
}

export default ListForm

