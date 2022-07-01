
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Auth from './auth/Auth';
import { useContext } from 'react';

function ProfileUser() {
 
  return (
    <>
      <Container className="mt-3 align=center">
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <Card border="light" style={{ width: '70rem' }}>
              <Card.Header>คุณ </Card.Header>
              <Card.Body>
                <Card.Title>เพิ่มหรือแก้ไขข้อมูล</Card.Title>
                <Card.Text>
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>ชื่อ</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="กรุณาใส่ชื่อไม่ต้องมีคำนำหน้า"
                          name="Name"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>นามสกุล</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="กรุณาใส่นามสกุล"
                          name="LastName"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>แผนก / ภาควิชา</Form.Label>
                        <Form.Select defaultValue="สำนักงานเลขานุการ">
                          <option>สำนักงานเลขานุการ</option>
                          <option>วิทยาศาสตร์ชีวภาพ</option>
                          <option>เคมี</option>
                          <option>วิทยาศาสตร์ชีวภาพ</option>
                          <option>คณิตศาสตร์ สถิติ และคอมพิวเตอร์</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>หมายเลขโทรศัพท์ภายใน</Form.Label>
                        <Form.Control name="TelInternal" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>หมายเลขโทรศัพท์ที่ติดต่อได้</Form.Label>
                        <Form.Control
                          name="TelPrivate"
                          placeholder="ไม่บังคับ"
                        />
                      </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                      บันทึกข้อมูล
                    </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileUser;
