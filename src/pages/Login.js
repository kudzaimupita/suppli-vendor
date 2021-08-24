import React, { Component } from 'react';
import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import {

    Spinner
} from 'reactstrap';
class Login extends Component {
    state = {
        password: '',
        email: '',
    };

    formData = {
        email: this.state.email,
        password: this.state.password,
    };
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleLoginSubmit = (e) => {
        this.props.dispatch(
            login({
                email: this.state.email,
                password: this.state.password,
            })
        );
        console.log(this.formData);
        console.log(this.state);
        e.preventDefault();
    };

    render() {
        if (this.props.isAuthenticated && this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        return (
            <div className="ps-my-account pt-6 bg-gray-100 " style={{
                // backgroundImage: `url(${require("../assets/img/brand/back1.png")})`, backgroundPosition: "",
                backgroundRepeat: " no-repeat",
                backgroundSize: "cover",
                height: '1000px'
            }}>
                <Spinner

                    color="white"
                    size={12}
                    speed={1}
                    animating={true} />
                <div className="container  " >
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                        <img
                            className="mx-auto h-12 w-auto"
                            src='/suppli-logo.png'
                            alt="suppl-i"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Vendor Portal </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="https://www.suppl-i.com/vendor/become-a-vendor" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Register Store Now
                            </a>
                        </p>
                    </div>
                    <Form
                        className="ps-form--account max-w-md sm:mx-auto sm:w-full sm:max-w-md mb-4 "
                        onSubmit={this.handleLoginSubmit}>

                        <div className="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg " id="sign-in">
                            <div className="ps-form__content m-4">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className="my-3">
                                    <Input
                                        size={'large'}
                                        type="text"
                                        placeholder="Email address"
                                        required
                                        name="email"
                                        value={this.state.email}
                                        onChange={
                                            this.handleEmailChange
                                        }
                                    />
                                </div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className="my-3">

                                    <Input.Password
                                        className=""
                                        size={'large'}
                                        type="password"
                                        placeholder="Password..."
                                        required
                                        name="password"
                                        value={this.state.password}
                                        onChange={
                                            this.handlePasswordChange
                                        }
                                    />
                                </div>
                                <div className="mb-2">
                                    <div className="text-sm">
                                        <a href="https://www.suppl-i.com/account/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="my-3 mb-4 submit group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-gray-500 group-hover:text-grayu-400" aria-hidden="true" />
                                    </span>
                                    <span style={{ marginRight: 10 }}> {this.props.loading ? <Spinner
                                        size="sm"
                                        style={{ marginRight: 6 }}
                                        // type="grow"
                                        color="white"
                                    />
                                        : null}</span>
                                    Login
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const WrapFormLogin = Form.create()(Login);
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
});
export default connect(mapStateToProps)(WrapFormLogin);
