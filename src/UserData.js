import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';
// import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRecords: [],
    };
  }

  getRecords = async () => {
    try {
      let records = await axios.get(`${process.env.REACT_APP_SERVER}/music`);
      this.setState({
        userRecords: records.data,
      });
    } catch (error) {
      console.log("ERROR: Can't load data from MongoDB.", error.response);
    }
  };

  test = () => {
    console.log('test');
  };

  deleteRecord = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/music/${id}`;

      await axios.delete(url);

      let updatedRecords = this.state.userRecords.filter(
        (record) => record._id !== id
      );

      this.setState({
        userRecords: updatedRecords,
      });
    } catch (error) {
      console.log("ERROR: Can't delete data from MongoDB.", error.message);
    }
  };

  addRecord = (record) => {
    let url = `${process.env.REACT_APP_SERVER}/music/`;

    axios
      .post(url, record)
      .then((response) => {
        this.setState({
          userRecords: [...this.state.userRecords, response.data],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleUpdateRecord = async (event, record) => {
    event.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/music`;
    const comment = event.target[0].value;
    const id = record._id
    console.log(id)
    await axios
      .put(url + `/${id}`, {
        comment: comment,
      })
      .then((response) => {
        const tempRecords = Array(...this.state.userRecords);
        const record = tempRecords.find((record) => record._id === id);
        record.comment = comment;
        record._id = response.data._id;
        this.setState({ userRecords: tempRecords });
        alert(`Comment has now been updated!`);
      });
  };

  componentDidMount() {
    this.getRecords();
  }

  render() {
    console.log(this.state.userRecords);
    let userRecordsComponents = this.state.userRecords.map((record) => {
      return (
        <>
          <Card className="bg-dark text-white" style={{ width: '18rem' }}>
            <Card.Img
              src={record.imgURL}
              alt={record.selectedSong}
            />
            <Card.ImgOverlay>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* <Dropdown.Item href="#/action-1">Update note</Dropdown.Item> */}
                  <Dropdown.Item href="#/action-2" onClick={() => this.deleteRecord(record._id)}>
                    Delete from library
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Add to Playlist
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.ImgOverlay>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <footer className="blockquote-footer">
                  <cite title="Source Title"> {record.comment}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Form onSubmit={(event) => this.handleUpdateRecord(event, record)} style={{ width: '18rem' }}>
            <Form.Control defaultValue={record.comment} />
            {/* <Form.Control defaultValue={record._id} disabled /> */}
            <Button type="submit" variant="success">
              Update Comment
            </Button>
          </Form>
        </>
      );
    });
    console.log(userRecordsComponents);
    return (
      <>
        <h1>User Data</h1>
        {userRecordsComponents}
      </>
    );
  }
}

export default UserData;
