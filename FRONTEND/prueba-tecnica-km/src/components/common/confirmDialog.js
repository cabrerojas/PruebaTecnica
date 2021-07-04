import { Button, Row, Col} from 'react-bootstrap';

export function ConfirmDialog(props) {
    return (
        <div className='react-confirm-alert-body'>
          <h1>Atención</h1>
          <p>{props.description}</p>
          <Row className='d-flex justify-content-end'>
              <Col xs='8' className='d-flex justify-content-end'>
                <Button variant='danger' onClick={() => {  
                        {props.handleAction();
                         props.handleClose()}
                        }}>
                    {props.buttonAction}
                </Button>
                <Button variant='success' onClick={() => { props.handleClose() }}>
                    Cancelar
                </Button>
              </Col>
          </Row>
        </div>
    );
}