import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import { Button } from '@material-ui/core';
import DialogComponent from '../../HelperComponents/DialogComponent/DialogComponent';
import RenderField from '../../HelperComponents/RenderField/RenderField';
import './infoUser.css';



class infoUser extends Component {

    state = {
        isOpenModal: false
    }
    handleOpenModal = () => {
        this.setState({ isOpenModal: true })
    }
    handleCloseModal = () => {
        this.setState({ isOpenModal: false })
    }


    render() {
        const { match: { params } } = this.props;
        const { isOpenModal } = this.state;
        return (
            <div className="wrapper-info-user">
                <div className="container__info-user">
                    <h2>Id: {params.id}</h2>
                    <ul className="list__info-user">
                        <div className="item__user-info">
                            <li className="label__user-info">Имя</li>
                            <li>Ростислав</li>
                        </div>
                        <div className="item__user-info">
                            <li className="label__user-info">Фамилия</li>
                            <li>Криворучко</li>
                        </div>
                        <div className="item__user-info">
                            <li className="label__user-info">Отчество</li>
                            <li>Миколайович</li>
                        </div>
                        <div className="item__user-info">
                            <li className="label__user-info">Email</li>
                            <li>rostikowb132@gmail.com</li>
                        </div>
                        <div className="item__user-info">
                            <li className="label__user-info">Телефон</li>
                            <li></li>
                        </div>
                        <div className="item__user-info">
                            <li className="label__user-info">Город</li>
                            <li></li>
                        </div>
                        <div className="item__user-info">
                            <li className="label__user-info">Отделение</li>
                            <li></li>
                        </div>
                        <div className="item__user-info">
                            <li className="label__user-info">Купоны</li>
                            <li>Нету</li>
                        </div>
                        <div className="item__user-info">
                            <li className="label__user-info">Заказы</li>
                            <li></li>
                        </div>
                    </ul>
                    <Button variant="outlined" color="primary" onClick={this.handleOpenModal}>Изменить</Button>
                </div>
                <DialogComponent handleClose={this.handleCloseModal} open={isOpenModal} >
                    <div className="user-modal">
                        <h1>Изменение данных</h1>
                        <Formik
                            initialValues={{ name: '', last_name: '', patronymic: '', email: '', phone: '', city: '' }}
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                        >
                                <Form>
                                    <Field type="text" name="name" placeholder="Имя" component={RenderField} />
                                    <Field type="text" name="last_name" placeholder="Фамилия" component={RenderField} />
                                    <Field type="text" name="patronymic" placeholder="Отчество" component={RenderField} />
                                    <Field type="email" name="email" placeholder="Email" component={RenderField} />
                                    <Field type="text" name="phone" placeholder="Телефон" component={RenderField} />
                                    <Field type="text" name="city" placeholder="Город" component={RenderField} />
                                    {/* <Field name="lastName" placeholder="Doe" component={MyInput} /> */}
                                    <button type="submit">Submit</button>
                                </Form>
                        </Formik>
                    </div>
                </DialogComponent>
            </div>
        );
    }
}

export default infoUser;


