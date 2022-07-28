import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {LogsContainer} from '../../components/LogsContainer';
import {isValidJSONString} from '../../utils/is-valid-json-string';
import {Button, Card, Col, Row, Toast} from "react-bootstrap";
import Form from 'react-bootstrap/Form'

const userApiDefinition = `
  + \`GET\` /users
  + \`GET\` /users/:id
  + \`POST\` /users
  + \`PUT\` /users/:id
  + \`Delete\` /users/:id

  you can see more information in \`README.md\`
`;

const Home = (): JSX.Element => {
  const [showToast, setShowToast] = useState(false);
  const [method, setMethod] = useState('GET');
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | undefined>(undefined);
  const [pageSize, setPageSize] = useState(50);
  const [pageIndex, setPageIndex] = useState(1);
  const [body, setBody] = useState('');

  const isQueryAll = !id && method === 'GET';

  const doRequest = async () => {
    try {
      setIsLoading(true);
      const payload = body.replaceAll('\n', '');

      if (payload && !isValidJSONString(payload)) {
        throw 'request body must be a valid JSON';
      }

      const pageQuery = isQueryAll ? `?pageIndex=${pageIndex}&pageSize=${pageSize}` : '';

      const result = await fetch('users' + (id ? `/${id}` : '') + pageQuery, {
        method,
        body: method === 'GET' ? null : payload,
      });
      const data = await result.json();
      setIsLoading(false);
      console.log(data);
    } catch (e) {
      setIsLoading(false);
      console.error('Request failed: ' + e);
    }
  };

  return (
    <div className={'m-2 card'}>
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
        <Toast.Body>Request failed!</Toast.Body>
      </Toast>
      <Card>
        <div className="p-4">
          <dl>
            <dt>API</dt>
            <dd>
              <ReactMarkdown>{userApiDefinition}</ReactMarkdown>
            </dd>
            <dt>API Test</dt>
            <dd>
              <div className="mt-4 w-full">
                <Form ref={null}>
                  <Form.Group as={Row} className="mb-3" ref={null}>
                    <Form.Label column sm="1">Method </Form.Label>
                    <Col sm="5">
                      <Form.Select ref={null} value={method} onChange={(v) => setMethod(v.target.value)} style={{width: 120}}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" ref={null}>
                    <Form.Label column sm="1">ID </Form.Label>
                    <Col sm="5">
                      <Form.Control
                        ref={null}
                        type="text"
                        value={id}
                        onChange={(v) => setId(v.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  {isQueryAll && (
                    <Form.Group as={Row} className="mb-3" ref={null}>
                      <Form.Label column sm="1">PageIndex </Form.Label>
                      <Col sm="5">
                        <Form.Control
                          ref={null}
                          type="number"
                          value={pageIndex}
                          min={1}
                          max={100}
                          onChange={(v) => setPageIndex(Number(v.target.value))}
                        />
                      </Col>
                    </Form.Group>
                  )}
                  {isQueryAll && (
                    <Form.Group as={Row} className="mb-3" ref={null}>
                      <Form.Label column sm="1">PageSize </Form.Label>
                      <Col sm="5">
                        <Form.Control
                          ref={null}
                          type="number"
                          value={pageSize}
                          min={1}
                          max={500}
                          onChange={(v) => setPageSize(Number(v.target.value))}
                        />
                      </Col>
                    </Form.Group>
                  )}
                  <Form.Group as={Row} className="mb-3" ref={null}>
                    <Form.Label column sm="1">Body </Form.Label>
                    <Col sm="5">
                      <Form.Control
                        ref={null}
                        as="textarea"
                        rows={5}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder={`type request body here, must be a valid json like this: {"name":"smith"}`}
                      >
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </Form>
                <Button variant="primary" onClick={doRequest} disabled={isLoading}>
                  Request
                </Button> Console, You can find result here:
                <LogsContainer></LogsContainer>
              </div>
            </dd>
          </dl>
        </div>
      </Card>
    </div>
  );
};

export default Home;
