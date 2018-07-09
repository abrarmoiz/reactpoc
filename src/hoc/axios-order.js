import React, { Component } from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-demo-39cb0.firebaseio.com'
});

export default instance;




