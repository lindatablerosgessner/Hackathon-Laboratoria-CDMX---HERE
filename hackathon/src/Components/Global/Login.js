import React, {Component} from 'react';
import {Row, Input, Button, Col} from 'react-materialize';
import {Link} from 'react-router-dom';
import Firebase from '../../config';
import './Login.css';

class loginInput extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
        email: '',
        password: '',
        }
    }

    login(event) {
        event.preventDefault();
        Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            window.location.assign('/parent');
        }).catch((err) => {
            alert(err.code);
        });
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="background">
            <div className='inputContainer'>

                <form>
                    <Row className="white-background"> 
                    <h5>Padres</h5>
                        <Col s={12} m={12} l={12}>
                        <Input value={this.state.email} onChange={this.handleOnChange} className='inputHover' s={10}  m={10} l={10} label="Correo" name='email' type='email' validate></Input>
                        </Col>
                    </Row>
                    <Row className="white-background">
                    <Col s={12} m={12} l={12}>
                        <Input value={this.state.password} onChange={this.handleOnChange} className='inputHover' s={10}  m={10} l={10} label="Contraseña" validate name='password' type='password'></Input>
                    </Col>
                    </Row >
                    <Row className="white-background">
                    <Col s={12} m={12} l={12} className='center'>
                        <Button type='submit' onClick={this.login} s={10}  m={10} l={10} waves='light' className='signInButton purple'>Entrar</Button>
                        </Col>
                    </Row>
                    <h6><Link to="/register">Regístrate</Link></h6>
                </form>
            </div>
            </div>
            )
    }
}
export default loginInput