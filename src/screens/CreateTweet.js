import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Axios from 'axios'

class CreateTweet extends React.Component {

    state = {
        name: '',
        email: '',
        body: '',
        error: '',
        response: '',
        isLoading: ''
    }

    handleNameChange = (event) => {
        const name = event.target.value;
        this.setState({ name });
    }

    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }

    handleBodyChange = (event) => {
        const body = event.target.value;
        this.setState({ body });
    }


    handleSubmit = async (e) => {
        // your submit logic
        e.preventDefault();
        const {name, email, body} = this.state
            const postData = {
                name,
                email,
                body
            }
        try { 
            this.setState({
                isLoading: true
            })  
            const postRes = await Axios.post('https://jsonplaceholder.typicode.com/comments', postData)
            this.setState({
                isLoading: false
            })
            if(postRes.data){
                this.setState({
                        response: "Successfully tweeted"
                })
            }
        } catch(err){
            this.setState({
                isLoading: false
            })
            this.setState({
                error: err.message
            })
        }
        
    }

    render() {
        const { email, name, body, error, response, isLoading} = this.state;
        return (
            <div className="tweet-wrapper">
                <h1>Create Tweet</h1>
                {error? (<h1>{error}</h1>) :
                response? (<h1>{response}</h1>):
                isLoading? (<h1>please wait...</h1>) : ""}
                <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
                >
                <TextValidator
                    label="Name"
                    onChange={this.handleNameChange}
                    name="name"
                    value={name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextValidator
                    label="Email"
                    onChange={this.handleEmailChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator
                    label="Body"
                    onChange={this.handleBodyChange}
                    name="body"
                    value={body}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
            </div>
        );
    }
}

export default CreateTweet;