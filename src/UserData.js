import React from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


class UserData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userRecords: []
        }
    }

    getRecords = async () => {
        try {
            let records = await axios.get(`${process.env.REACT_APP_SERVER}/music`);
            this.setState({
                userRecords: records.data
            })
        } catch (error) {
            console.log('ERROR: Can\'t load data from MongoDB.', error.response);
        }
    }

    deleteRecord = async (id) => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/music/${id}`;

            await axios.delete(url);

            let updatedBooks = this.state.userRecords.filter(record => record._id !== id);

            this.setState({
                books: updatedBooks
            });
        } catch(error) {
            console.log('ERROR: Can\'t delete data from MongoDB.', error.message);
        }
    }

    componentDidMount() {
        this.getRecords();
    }

    render() {
        let userRecordsComponents = this.state.userRecords.map((record) => {
            return (
                <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                    <Card.Img src="https://via.placeholder.com/732x270" alt="Card image" />
                    <Card.ImgOverlay>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Update note</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete from library</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    </Card.ImgOverlay>
                </Card>
            )
        });
        console.log(userRecordsComponents);
        return (<>
                <h1>User Data</h1>
                {userRecordsComponents}
                </>);
    }
}

export default UserData;